import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { action } from 'storybook/actions';
import { TextBox } from '../TextBox';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Button/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is a button component that can be used to trigger actions. It supports various properties such as background color, width, height, and more. You can also use it with loading states and disabled states.

You can import the Button component from the library and use it in your application as follows:
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
    backgroundColor: 'orangered',
    width: '100px',
    height: '40px',
    borderColor: 'black',
    onClick: action('button-click'),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div>
      <Button {...args}>
        <TextBox mobileSize={14} desktopSize={14} color="white">
          Button!
        </TextBox>
      </Button>
    </div>
  ),
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
      <div>
        <Button {...args} loading={loading}>
          <TextBox mobileSize={14} desktopSize={14} color="white">
            Button!
          </TextBox>
        </Button>
      </div>
    );
  },
};

export const ButtonDisabled: Story = {
  args: {
    backgroundColorDisabled: 'gray',
    disabled: true,
  },
  render: (args) => (
    <div>
      <Button {...args}>
        <TextBox mobileSize={14} desktopSize={14} margin={0} color="white">
          Button!
        </TextBox>
      </Button>
    </div>
  ),
};

export const Small: Story = {
  args: {
    width: '60px',
    height: '28px',
  },
  render: (args) => (
    <div>
      <Button {...args}>
        <TextBox mobileSize={12} desktopSize={12} color="white">
          Small
        </TextBox>
      </Button>
    </div>
  ),
};

export const Large: Story = {
  args: {
    width: '200px',
    height: '56px',
  },
  render: (args) => (
    <div>
      <Button {...args}>
        <TextBox mobileSize={18} desktopSize={18} color="white">
          Large Button
        </TextBox>
      </Button>
    </div>
  ),
};

export const CustomColor: Story = {
  args: {
    backgroundColor: 'royalblue',
    borderColor: 'navy',
  },
  render: (args) => (
    <div>
      <Button {...args}>
        <TextBox mobileSize={14} desktopSize={14} color="white">
          Blue Button
        </TextBox>
      </Button>
    </div>
  ),
};

export const NoBorder: Story = {
  args: {
    borderColor: 'transparent',
    backgroundColor: 'seagreen',
  },
  render: (args) => (
    <div>
      <Button {...args}>
        <TextBox mobileSize={14} desktopSize={14} color="white">
          No Border
        </TextBox>
      </Button>
    </div>
  ),
};

export const CustomStyleBoxShadow: Story = {
  args: {
    style: { boxShadow: '0 4px 10px rgba(0,0,0,0.3)' },
  },
  render: (args) => (
    <div>
      <Button {...args}>
        <TextBox mobileSize={14} desktopSize={14} color="white">
          Box Shadow
        </TextBox>
      </Button>
    </div>
  ),
};

export const SubmitType: Story = {
  args: {
    type: 'submit',
  },
  render: (args) => (
    <div>
      <Button {...args}>
        <TextBox mobileSize={14} desktopSize={14} color="white">
          Submit
        </TextBox>
      </Button>
    </div>
  ),
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
  render: (args) => (
    <div>
      <Button {...args}>
        <TextBox mobileSize={14} desktopSize={14} color="white">
          Full Width
        </TextBox>
      </Button>
    </div>
  ),
};
