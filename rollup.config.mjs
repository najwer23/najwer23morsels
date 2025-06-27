import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import outputSize, { summarize, format } from 'rollup-plugin-output-size';
import fs from 'fs';
import path from 'path';

/**
 * Recursively retrieves files from a directory that match a specific query.
 * @param {string} dir - The directory to search in.
 * @param {string[]} [filesIn=[]] - Accumulator for found files.
 * @param {string} query - The query string to match file names.
 * @returns {string[]} - An array of matching file paths.
 */
const getFiles = (dir, filesIn = [], query) => {
  const fsFiles = fs.readdirSync(dir);

  for (const file of fsFiles) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, filesIn, query);
    } else if (fullPath.includes(query)) {
      filesIn.push(fullPath);
    }
  }

  return filesIn;
};

// Retrieve all index.ts files from the stories directory
const filesIndexTs = getFiles('src/stories/', [], 'index.ts').map((filePath) => path.basename(path.dirname(filePath))); // Get the directory name

// Create an input object for Rollup
const Input = Object.fromEntries(
  filesIndexTs.map((name) => [
    name.charAt(0).toUpperCase() + name.slice(1), // Capitalize first letter
    `src/stories/${name}/index.ts`,
  ]),
);

// Rollup configuration
export default {
  input: Input,
  output: {
    dir: 'lib',
    format: 'esm',
    // sourcemap: true,
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript(),
    postcss({
      extensions: ['.css'],
      minimize: true,
      modules: true,
    }),
    terser(),
    outputSize({
      handle(info) {
        console.log(format(info));
      },
      summary(summary) {
        console.log(summarize(summary));
      },
    }),
  ],
};
