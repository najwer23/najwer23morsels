import { Source, Unstyled } from '@storybook/addon-docs/blocks';
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

const AA = 4.5;
const AAA = 7;

const toHex = (value: string) => {
  const ctx = document.createElement('canvas').getContext('2d');

  if (!ctx) return '#000000';

  ctx.fillStyle = '#000000';
  ctx.fillStyle = value;

  return /^#[0-9a-f]{6}$/i.test(ctx.fillStyle) ? ctx.fillStyle : '#000000';
};

const getLuminance = (color: string) => {
  const hex = toHex(color);

  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;

    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const getContrastRatio = (foreground: string, background: string) => {
  const [high, low] = [getLuminance(foreground), getLuminance(background)].sort((a, b) => b - a);

  return (high + 0.05) / (low + 0.05);
};

const setIn = (obj: any, path: Path, value: string): any => {
  if (path.length === 0) return value;

  const [head, ...rest] = path;

  return {
    ...obj,
    [head]: setIn(obj[head], rest, value),
  };
};

const Contrast = ({ ratio }: { ratio: number }) => {
  const passedAA = ratio >= AA;
  const passedAAA = ratio >= AAA;

  const statusStyle = (passed: boolean): React.CSSProperties => ({
    color: passed ? '#16803C' : '#C62828',
    fontWeight: 600,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif',
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
        marginTop: 8,
      }}
    >
      <Typography variant="caption">{ratio.toFixed(2)}:1</Typography>

      <div style={statusStyle(passedAA)}>AA {passedAA ? '✓' : '✕'}</div>
      <div style={statusStyle(passedAAA)}>AAA {passedAAA ? '✓' : '✕'}</div>
    </div>
  );
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
        if (path.length === 0 && key === 'fontFamily') return null;

        return (
          <div
            key={key}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              margin: '4px 0',
            }}
          >
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
      <h2>1. Buttons</h2>
      <br />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        {Object.entries(schema.components.button.variants).map(([name, config]) => {
          const variant = name as ButtonVariant;

          const label = (
            <TextBox mobileSize={16} desktopSize={16} color="inherit">
              {name}
            </TextBox>
          );

          const contrastRatio = getContrastRatio(config.text, config.background);

          return (
            <div
              key={name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {variant === 'copy' ? (
                <Button variant="copy" textToCopy={name}>
                  {label}
                </Button>
              ) : (
                <Button variant={variant}>{label}</Button>
              )}

              <Contrast ratio={contrastRatio} />
            </div>
          );
        })}
      </div>

      <br />
      <h2>2. Typography</h2>
      <br />

      <Unstyled>
        {Object.keys(schema.components.typography.colors).map((name) => (
          <div key={name}>
            <Typography
              variant={name as TypographyVariant}
              color={text(name)}
              margin={'0 0 5px 0'}
              mobileSize={16}
              desktopSize={16}
              lineHeight={1}
            >
              {name}
            </Typography>
          </div>
        ))}
      </Unstyled>
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
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)',
        gap: 32,
      }}
    >
      <Unstyled>
        <Theme name="default">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 16,
            }}
          >
            <Select
              name="playground-base"
              label="Start from"
              style={{ flex: 1, minWidth: 0 }}
              options={Object.entries(THEMES).map(([key, t]) => ({
                value: key,
                label: t.name,
              }))}
              initialValue={{
                value: base,
                label: THEMES[base].name,
              }}
              onSelect={(option) => pickBase(option.value)}
            />

            <div style={{ paddingTop: 11 }}>
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
            onChange={(e) =>
              setSchema((s) => ({
                ...s,
                name: e.target.value,
              }))
            }
            style={{ marginBottom: 16 }}
          />

          <Input
            name="playground-theme-font-family"
            label="Font family"
            placeholder="e.g. Inter, system-ui, sans-serif"
            value={schema.fontFamily ?? ''}
            onChange={(e) =>
              setSchema((s) => ({
                ...s,
                fontFamily: e.target.value,
              }))
            }
            style={{ marginBottom: 16 }}
          />
        </Theme>

        <Editor node={schema} path={[]} onChange={update} />
      </Unstyled>

      <div>
        <Theme schema={schema}>
          <Preview schema={schema} />

          <br />
          <br />
          <h2>3. Your Schema: {schema.name}</h2>

          <div
            style={{
              width: '100%',
              maxWidth: '100%',
              minWidth: 0,
              overflow: 'hidden',
            }}
          >
            <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
              <Source language="typescript" code={output} />
            </div>
          </div>
        </Theme>
      </div>
    </div>
  );
};
