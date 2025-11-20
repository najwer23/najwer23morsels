import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { action } from 'storybook/actions';
import { TextBox } from '../textbox';
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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'button',
    backgroundColor: 'yellow',
    width: '300px',
    height: '90px',
    padding: 0,
    borderColor: 'black',
  },
  render: (args) => (
    <div>
      <Button onClick={action('button-click')} {...args}>
        <TextBox mobileSize={25} desktopSize={25} margin={0}>
          Hello!
        </TextBox>
      </Button>
    </div>
  ),
};

export const ButtonLoading: Story = {
  args: {
    type: 'button',
    backgroundColor: 'yellow',
    width: '300px',
    height: '90px',
    padding: 0,
    borderColor: 'black',
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
        <Button onClick={action('button-click')} {...args} loading={loading}>
          <TextBox mobileSize={25} desktopSize={25} margin={0}>
            Hello!
          </TextBox>
        </Button>
      </div>
    );
  },
};

export const ButtonDisabled: Story = {
  args: {
    type: 'button',
    backgroundColor: 'yellow',
    width: '300px',
    height: '90px',
    padding: 0,
    backgroundColorDisabled: 'gray',
    borderColor: 'black',
  },
  render: (args) => (
    <div>
      <Button onClick={action('button-click')} {...args} disabled>
        <TextBox mobileSize={25} desktopSize={25} margin={0} color="white">
          Hello!
        </TextBox>
      </Button>
    </div>
  ),
};
