import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { action } from 'storybook/actions';
import { TextBox } from '../TextBox';
import { Button } from '.';

const VARIANTS = ['primary', 'secondary', 'danger', 'success', 'copy', 'menu', 'disabled'] as const;

const meta: Meta<typeof Button> = {
  title: 'Button/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A customizable button component supporting color variants, loading states, disabled states, and custom dimensions.

Variants: \`primary\` (default), \`secondary\`, \`danger\`, \`success\`, \`copy\`, \`menu\`, \`disabled\`.
Use \`backgroundColor\`, \`borderColor\` and \`textColor\` to override a variant.

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
    },
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

type Story = StoryObj<typeof meta>;

const renderButton = (args: React.ComponentProps<typeof Button>, label: string) => (
  <Button {...args}>
    <TextBox mobileSize={14} desktopSize={14} color="inherit">
      {label}
    </TextBox>
  </Button>
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

export const Copy: Story = {
  args: { variant: 'copy' },
  render: (args) => renderButton(args, 'Copy'),
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

export const CustomColors: Story = {
  args: {
    backgroundColor: '#0057B8',
    borderColor: '#003F87',
    textColor: '#FFFFFF',
  },
  render: (args) => renderButton(args, 'Custom'),
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
      <Button {...args} loading={loading}>
        <TextBox mobileSize={14} desktopSize={14} color="inherit">
          Save changes
        </TextBox>
      </Button>
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
        <Button key={variant} variant={variant} onClick={action(variant)}>
          <TextBox mobileSize={14} desktopSize={14} color="inherit">
            {variant}
          </TextBox>
        </Button>
      ))}
    </div>
  ),
};
