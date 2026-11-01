import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import fs from 'fs';
import path from 'path';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import { gzipSync } from 'zlib';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const external = Object.keys(pkg.peerDependencies ?? {}).map((name) => new RegExp(`^${name}(/.*)?$`));

const Input = Object.fromEntries(
  fs
    .readdirSync('src/stories', { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(`src/stories/${d.name}/index.ts`))
    .map((d) => [d.name, `src/stories/${d.name}/index.ts`]),
);

const progress = () => {
  const kb = (bytes) => `${(bytes / 1024).toFixed(2)} kB`;

  let count = 0;
  let startedAt = 0;
  const isTTY = process.stdout.isTTY;

  const line = (msg) => {
    if (isTTY) process.stdout.write(`\r\x1b[K${msg}`);
  };

  return {
    name: 'progress',
    buildStart() {
      count = 0;
      startedAt = Date.now();
      console.log('▶ Building...');
    },
    transform(_code, id) {
      count++;
      line(`  transforming (${count}): ${path.relative(process.cwd(), id)}`);
      return null;
    },
    buildEnd() {
      line('');
      console.log(`✓ ${count} modules transformed in ${((Date.now() - startedAt) / 1000).toFixed(1)}s`);
    },
    renderStart() {
      console.log('▶ Rendering chunks...');
    },
    writeBundle(options, bundle) {
      const rows = Object.values(bundle)
        .filter((file) => file.type === 'chunk')
        .map((file) => ({
          name: file.fileName,
          raw: Buffer.byteLength(file.code),
          gzip: gzipSync(file.code).length,
        }))
        .sort((a, b) => a.raw - b.raw);

      const totalRaw = rows.reduce((sum, r) => sum + r.raw, 0);
      const totalGzip = rows.reduce((sum, r) => sum + r.gzip, 0);

      console.log('');
      for (const r of rows) {
        console.log(`  ${r.name.padEnd(32)} ${kb(r.raw).padStart(11)}  gzip ${kb(r.gzip).padStart(10)}`);
      }

      console.log(`  ${'TOTAL'.padEnd(32)} ${kb(totalRaw).padStart(11)}  gzip ${kb(totalGzip).padStart(10)}`);
      console.log(`\n✓ Done in ${((Date.now() - startedAt) / 1000).toFixed(1)}s`);
    },
  };
};

// Rollup configuration
export default {
  input: Input,
  external,
  output: {
    dir: 'lib',
    format: 'esm',
    entryFileNames: '[name]/index.js',
    // sourcemap: true,
  },
  plugins: [
    progress(),
    resolve(),
    typescript(),
    postcss({
      extensions: ['.css'],
      minimize: true,
      modules: true,
    }),
    terser(),
  ],
};
