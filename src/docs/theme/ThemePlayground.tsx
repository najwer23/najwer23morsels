import { Source } from '@storybook/addon-docs/blocks';
import { type ComponentProps, useState } from 'react';
import { Button } from '../../stories/Button';
import { Input } from '../../stories/Input';
import { Select } from '../../stories/Select';
import { TextBox } from '../../stories/TextBox';
import { Theme } from '../../stories/Theme/Theme';
import { THEMES } from '../../stories/Theme/Theme.const';
import { Typography } from '../../stories/Typography/Typography';

type ThemeSchema = (typeof THEMES)[string];
type Path = string[];
type ButtonVariant = NonNullable<ComponentProps<typeof Button>['variant']>;
type TypographyVariant = NonNullable<ComponentProps<typeof Typography>['variant']>;

const PREFIX = '--n23m';

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

            <Input
              label={key}
              name="editor-playground-theme-name"
              type="text"
              value={value}
              onChange={(e) => onChange(current, e.target.value)}
            />
          </div>
        );
      }

      return (
        <details key={key} open={path.length < 2} style={{ margin: '8px 0 8px 12px' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
            <Typography variant="body" tag={'span'}>
              {key}
            </Typography>
          </summary>
          <Editor node={value} path={current} onChange={onChange} />
        </details>
      );
    })}
  </>
);

const Preview = ({ schema }: { schema: ThemeSchema }) => {
  const text = (name: string) => `var(${PREFIX}-components-typography-colors-${name}-color)`;

  return (
    <div>
      <Typography variant="subheading" margin={'0 0 20px'}>
        Buttons
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {Object.keys(schema.components.button.variants).map((name) => {
          const variant = name as ButtonVariant;
          const label = (
            <TextBox mobileSize={16} desktopSize={16} color="inherit">
              {name}
            </TextBox>
          );

          if (variant === 'copy') {
            return (
              <Button key={name} variant="copy" textToCopy={name}>
                {label}
              </Button>
            );
          }

          return (
            <Button key={name} variant={variant}>
              {label}
            </Button>
          );
        })}
      </div>

      <Typography variant="subheading" margin={'20px 0 20px'}>
        Typography
      </Typography>

      {Object.keys(schema.components.typography.colors).map((name) => (
        <div>
          <Typography key={name} variant={name as TypographyVariant} color={text(name)}>
            Lorem Ipsum is simply..
          </Typography>
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
        <Theme name="default">
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
                <TextBox mobileSize={16} desktopSize={16} color="inherit">
                  Reset
                </TextBox>
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
        <Theme schema={schema}>
          <Preview schema={schema} />
        </Theme>

        <Typography variant="subheading" margin={'20px 0 0 0'}>
          Your Schema: {schema.name}
        </Typography>
        <div style={{ overflow: 'auto' }}>
          <Source language="typescript" code={output} />
        </div>
      </div>
    </div>
  );
};
