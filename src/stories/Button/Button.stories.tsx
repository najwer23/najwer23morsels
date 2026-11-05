import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { action } from 'storybook/actions';
import { TextBox } from '../TextBox';
import { THEMES } from '../Theme';
import { Button } from '.';

const VARIANTS = Object.keys(THEMES.default.components.button.variants) as Array<
  keyof typeof THEMES.default.components.button.variants
>;

/**
 * Loose props type for stories only.
 * Omit on a union is non-distributive, so this flattens the discriminated union.
 */
type ButtonStoryProps = Omit<React.ComponentProps<typeof Button>, 'ref'>;

/** Same component, typed with loose props so spreading args type-checks. */
const StoryButton = Button as React.ComponentType<ButtonStoryProps>;

const meta: Meta<ButtonStoryProps> = {
  title: 'Button/Button',
  component: StoryButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A customizable button component supporting theme-based color variants, loading states, disabled states, and custom dimensions.

Button colors are inherited from the active Theme. Use the Storybook theme toolbar to preview different color palettes.

Variants: ${VARIANTS.map((variant) => `\`${variant}\``).join(', ')}.

### Copy variant

With \`variant="copy"\` the button copies \`textToCopy\` to the clipboard (\`textToCopy\` is required for this variant and not allowed for the others).

After a successful copy it switches to the \`success\` variant for 800ms. A visually hidden live region announces "Copied" to screen readers.

If no children are passed, a default "Copy" label is rendered.

\`navigator.clipboard\` requires a secure context (HTTPS or localhost).

Import:
\`\`\`tsx
import { Button } from 'najwer23morsels/lib/Button';
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: VARIANTS,
      description: 'Button color variant provided by the active Theme.',
    },
    textToCopy: {
      control: 'text',
      description: 'Text copied to the clipboard. Required when `variant="copy"`.',
    },
    padding: { control: 'text' },
    margin: { control: 'text' },
    height: { control: 'text' },
    width: { control: 'text' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    type: 'button',
    variant: 'primary',
    height: '42px',
    padding: '0 10px',
    onClick: action('button-click'),
  },
};

export default meta;

type Story = StoryObj<ButtonStoryProps>;

/** Old ButtonCopy default: compact size, built-in "Copy" label (no children). */
const COPY_DEFAULT_ARGS: ButtonStoryProps = {
  variant: 'copy',
  textToCopy: 'Hagagagga',
  height: 'auto',
  padding: '0px 3px',
};

const renderButton = (args: ButtonStoryProps, label: string, fontWeight?: number) => (
  <StoryButton {...args}>
    <TextBox mobileSize={14} desktopSize={14} fontWeight={fontWeight} color="inherit">
      {label}
    </TextBox>
  </StoryButton>
);

export const Default: Story = {
  render: (args) => renderButton(args, 'Button'),
};

export const Primary: Story = {
  args: { variant: 'primary' },
  render: (args) => renderButton(args, 'Save changes'),
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
  render: (args) => renderButton(args, 'Close'),
};

export const Danger: Story = {
  args: { variant: 'danger' },
  render: (args) => renderButton(args, 'Delete'),
};

export const Success: Story = {
  args: { variant: 'success' },
  render: (args) => renderButton(args, 'Sign up'),
};

export const Menu: Story = {
  args: { variant: 'menu' },
  render: (args) => renderButton(args, 'Menu'),
};

export const Disabled: Story = {
  args: { variant: 'disabled' },
  render: (args) => renderButton(args, 'Disabled'),
};

export const DisabledProp: Story = {
  args: { variant: 'danger', disabled: true },
  render: (args) => renderButton(args, 'Disabled via prop'),
};

export const ButtonLoading: Story = {
  args: {
    loaderMobileSize: 14,
    loaderDesktopSize: 14,
  },
  render: (args) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setLoading((prev) => !prev);
      }, 3000);

      return () => clearInterval(interval);
    }, []);

    return (
      <StoryButton {...args} loading={loading}>
        <TextBox mobileSize={14} desktopSize={14} color="inherit">
          Save changes
        </TextBox>
      </StoryButton>
    );
  },
};

export const Small: Story = {
  args: { width: '80px' },
  render: (args) => renderButton(args, 'Small'),
};

export const Large: Story = {
  args: { width: '220px' },
  render: (args) => renderButton(args, 'Large button'),
};

export const FullWidth: Story = {
  args: { width: '100%' },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => renderButton(args, 'Full width'),
};

/* -------------------------------- Copy variant -------------------------------- */

export const Copy: Story = {
  args: {
    variant: 'copy',
    textToCopy: 'Hagagagga',
  },
  render: (args) => renderButton(args, 'Copy', 600),
};

export const CopyDefault: Story = {
  name: 'Copy / Small',
  args: COPY_DEFAULT_ARGS,
};

export const CopyCustomLabel: Story = {
  name: 'Copy / Custom label',
  args: {
    variant: 'copy',
    textToCopy: 'npm install najwer23morsels',
  },
  render: (args) => renderButton(args, 'Copy command', 600),
};

export const CopyCustomSize: Story = {
  name: 'Copy / Custom size',
  args: {
    variant: 'copy',
    textToCopy: 'Hagagagga',
    height: '42px',
    width: '120px',
    padding: '0 12px',
  },
  render: (args) => renderButton(args, 'Copy', 600),
};

export const CopyFullWidth: Story = {
  name: 'Copy / Full width',
  args: {
    variant: 'copy',
    textToCopy: 'Hagagagga',
    height: '42px',
    width: '100%',
    padding: '0 12px',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => renderButton(args, 'Copy to clipboard', 600),
};

export const CopyCodeSnippet: Story = {
  name: 'Copy / Code snippet',
  args: {
    variant: 'copy',
    textToCopy: 'npm install najwer23morsels',
  },
  render: (args) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '8px 8px 8px 16px',
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: '12px',
      }}
    >
      <code style={{ fontSize: 14 }}>{args.textToCopy}</code>
      <StoryButton {...args} height="32px" padding="0 10px" />
    </div>
  ),
};

export const CopyPasteToTest: Story = {
  name: 'Copy / Paste to test',
  args: {
    variant: 'copy',
    textToCopy: 'Copied from the Button story',
  },
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '320px' }}>
        {renderButton({ ...args, height: '36px', padding: '0 12px' }, 'Copy', 600)}
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Click Copy, then paste here (Ctrl/Cmd + V)"
          style={{ height: 36, padding: '0 10px', boxSizing: 'border-box' }}
        />
      </div>
    );
  },
};

/* ---------------------------------- Overview ---------------------------------- */

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 180px)',
        gap: '16px',
      }}
    >
      {VARIANTS.map((variant) => (
        <StoryButton
          key={variant}
          variant={variant}
          textToCopy={variant === 'copy' ? 'Hagagagga' : undefined}
          onClick={action(variant)}
        >
          <TextBox mobileSize={14} desktopSize={14} color="inherit">
            {variant}
          </TextBox>
        </StoryButton>
      ))}
    </div>
  ),
};
