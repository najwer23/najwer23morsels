import { Source } from '@storybook/addon-docs/blocks';
import { useState } from 'react';
import { Button } from '../../stories/Button';
import { Input } from '../../stories/Input';
import { Select } from '../../stories/Select';
import { Theme } from '../../stories/Theme/Theme';
import { THEMES } from '../../stories/Theme/Theme.const';

type ThemeSchema = (typeof THEMES)[string];
type Path = string[];

const PREFIX = '--n23m';

const SELECT_OPTIONS = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

const toHex = (value: string) => {
  const ctx = document.createElement('canvas').getContext('2d');
  if (!ctx) return '#000000';
  ctx.fillStyle = '#000000';
  ctx.fillStyle = value;
  return /^#[0-9a-f]{6}$/i.test(ctx.fillStyle) ? ctx.fillStyle : '#000000';
};

const setIn = (obj: any, path: Path, value: string): any => {
  if (path.length === 0) return value;
  const [head, ...rest] = path;
  return { ...obj, [head]: setIn(obj[head], rest, value) };
};

const Editor = ({
  node,
  path,
  onChange,
}: {
  node: Record<string, any>;
  path: Path;
  onChange: (path: Path, value: string) => void;
}) => (
  <>
    {Object.entries(node).map(([key, value]) => {
      const current = [...path, key];

      if (typeof value === 'string') {
        if (path.length === 0 && key === 'name') return null;

        return (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '4px 0' }}>
            <input
              type="color"
              value={toHex(value)}
              onChange={(e) => onChange(current, e.target.value.toUpperCase())}
            />
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(current, e.target.value)}
              style={{ width: 90, fontFamily: 'monospace' }}
            />
            <span>{key}</span>
          </div>
        );
      }

      return (
        <details key={key} open={path.length < 2} style={{ margin: '8px 0 8px 12px' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{key}</summary>
          <Editor node={value} path={current} onChange={onChange} />
        </details>
      );
    })}
  </>
);

const Preview = ({ schema }: { schema: ThemeSchema }) => {
  const button = (name: string, part: string) => `var(${PREFIX}-components-button-variants-${name}-${part})`;
  const text = (name: string) => `var(${PREFIX}-components-typography-colors-${name}-color)`;

  return (
    <div>
      <h3>Buttons</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {Object.keys(schema.components.button.variants).map((name) => (
          <button
            key={name}
            type="button"
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              cursor: 'pointer',
              background: button(name, 'background'),
              border: `1px solid ${button(name, 'border')}`,
              color: button(name, 'text'),
            }}
          >
            {name}
          </button>
        ))}
      </div>

      <h3 style={{ marginTop: 32 }}>Typography</h3>

      {Object.keys(schema.components.typography.colors).map((name) => (
        <div key={name} style={{ color: text(name), margin: '4px 0' }}>
          {name}
        </div>
      ))}
    </div>
  );
};

export const Playground = () => {
  const [base, setBase] = useState('default');
  const [schema, setSchema] = useState<ThemeSchema>(THEMES.default);

  const pickBase = (key: string) => {
    setBase(key);
    setSchema(THEMES[key]);
  };

  const update = (path: Path, value: string) => setSchema((s) => setIn(s, path, value));

  const output = `export const myTheme: ThemeSchema = ${JSON.stringify(schema, null, 2)};`;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 1fr) 2fr', gap: 32 }}>
      <div>
        <Theme themeName="default">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 16 }}>
            <Select
              name="playground-base"
              label="Start from"
              style={{ flex: 1, minWidth: 0 }}
              options={Object.entries(THEMES).map(([key, t]) => ({ value: key, label: t.name }))}
              initialValue={{ value: base, label: THEMES[base].name }}
              onSelect={(option) => pickBase(option.value)}
            />
            <div style={{ paddingTop: 20 }}>
              <Button variant="secondary" onClick={() => pickBase(base)}>
                Reset
              </Button>
            </div>
          </div>

          <Input
            name="playground-theme-name"
            label="Theme name"
            placeholder="Theme name"
            value={schema.name}
            onChange={(e) => setSchema((s) => ({ ...s, name: e.target.value }))}
            style={{ marginBottom: 16 }}
          />
        </Theme>

        <Editor node={schema} path={[]} onChange={update} />
      </div>

      <div>
        <Theme themeSchema={schema}>
          <Preview schema={schema} />
        </Theme>

        <h3 style={{ marginTop: 32 }}>Your themeSchema: {schema.name}</h3>
        <div style={{ overflow: 'auto' }}>
          <Source language="typescript" code={output} />
        </div>
      </div>
    </div>
  );
};
