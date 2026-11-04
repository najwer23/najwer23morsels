import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { action } from 'storybook/actions';
import { TextBox } from '../TextBox';
import { Button } from '.';

const COLORS = {
  primary: '#3F454B',
  primaryBorder: '#343A40',

  secondary: '#666666',
  secondaryBorder: '#555555',

  danger: '#C24141',
  dangerBorder: '#A93434',

  success: '#367C59',
  successBorder: '#2D684B',

  disabled: '#D4D4D4',
  disabledBorder: '#C8C8C8',

  text: '#FFFFFF',
  textDark: '#333333',
  textDisabled: '#595959',
};

const meta: Meta<typeof Button> = {
  title: 'Button/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A customizable button component supporting semantic colors, loading states, disabled states, and custom dimensions.


Import:
\`\`\`tsx
import { Button } from 'najwer23morsels/lib/Button';
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    type: 'button',
    backgroundColor: COLORS.primary,
    height: '42px',
    borderColor: COLORS.primaryBorder,
    padding: '0 10px',
    onClick: action('button-click'),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderButton = (args: React.ComponentProps<typeof Button>, label: string, color: string = COLORS.text) => (
  <Button {...args}>
    <TextBox mobileSize={14} desktopSize={14} color={color}>
      {label}
    </TextBox>
  </Button>
);

export const Default: Story = {
  render: (args) => renderButton(args, 'Button'),
};

export const ButtonLoading: Story = {
  args: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primaryBorder,
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
        Save changes
      </Button>
    );
  },
};
export const ButtonDisabled: Story = {
  args: {
    backgroundColor: COLORS.disabled,
    backgroundColorDisabled: COLORS.disabled,
    borderColor: COLORS.disabledBorder,
    disabled: true,
  },
  render: (args) => renderButton(args, 'Disabled', COLORS.textDisabled),
};

export const Danger: Story = {
  args: {
    backgroundColor: COLORS.danger,
    borderColor: COLORS.dangerBorder,
  },
  render: (args) => renderButton(args, 'Delete'),
};

export const SaveChanges: Story = {
  args: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primaryBorder,
  },
  render: (args) => renderButton(args, 'Save changes'),
};

export const Close: Story = {
  args: {
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.secondaryBorder,
  },
  render: (args) => renderButton(args, 'Close', COLORS.text),
};

export const Login: Story = {
  args: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primaryBorder,
  },
  render: (args) => renderButton(args, 'Log in'),
};

export const SignUp: Story = {
  args: {
    backgroundColor: COLORS.success,
    borderColor: COLORS.successBorder,
  },
  render: (args) => renderButton(args, 'Sign up'),
};

export const ResetPassword: Story = {
  args: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primaryBorder,
  },
  render: (args) => renderButton(args, 'Reset password'),
};

export const Small: Story = {
  args: {
    width: '80px',
    height: '42px',
  },
  render: (args) => renderButton(args, 'Small'),
};

export const Large: Story = {
  args: {
    width: '220px',
    height: '42px',
  },
  render: (args) => renderButton(args, 'Large button'),
};

export const FullWidth: Story = {
  args: {
    width: '100%',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => renderButton(args, 'Full width'),
};

export const SemanticActions: Story = {
  render: () => {
    const buttons = [
      {
        label: 'Log in',
        background: COLORS.primary,
        border: COLORS.primaryBorder,
      },
      {
        label: 'Sign up',
        background: COLORS.success,
        border: COLORS.successBorder,
      },
      {
        label: 'Reset password',
        background: COLORS.primary,
        border: COLORS.primaryBorder,
      },
      {
        label: 'Save changes',
        background: COLORS.primary,
        border: COLORS.primaryBorder,
      },
      {
        label: 'Delete',
        background: COLORS.danger,
        border: COLORS.dangerBorder,
      },
      {
        label: 'Close',
        background: COLORS.secondary,
        border: COLORS.secondaryBorder,
        color: COLORS.text,
      },
      {
        label: 'Disabled',
        background: COLORS.disabled,
        border: COLORS.disabledBorder,
        color: COLORS.textDisabled,
        disabled: true,
      },
    ];

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 180px)',
          gap: '16px',
        }}
      >
        {buttons.map((button) => (
          <Button
            key={button.label}
            height="42px"
            backgroundColor={button.background}
            borderColor={button.border}
            disabled={button.disabled}
            onClick={action(button.label)}
          >
            <TextBox mobileSize={14} desktopSize={14} color={button.color ?? COLORS.text}>
              {button.label}
            </TextBox>
          </Button>
        ))}
      </div>
    );
  },
};
