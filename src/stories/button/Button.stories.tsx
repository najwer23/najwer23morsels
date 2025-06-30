import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '.';
import { TextBox } from '../textbox';
import { action } from 'storybook/actions';
import { useEffect, useState } from 'react';

const meta: Meta<typeof Button> = {
  title: 'Button/Button',
  component: Button,
  parameters: {
    layout: 'centered',
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
  },
  render: (args) => (
    <div>
      <Button onClick={action('button-click')} {...args}>
        <TextBox mobileSize={25} desktopSize={25} margin={0}>
          Halo
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
  },
  render: (args) => {
    const LoadingToggle = () => {
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const interval = setInterval(() => {
          setLoading((prev) => !prev);
        }, 5000);

        return () => clearInterval(interval);
      }, []);

      return (
        <div>
          <Button onClick={action('button-click')} {...args} loading={loading}>
            <TextBox mobileSize={25} desktopSize={25} margin={0}>
              Halo
            </TextBox>
          </Button>
        </div>
      );
    };

    return <LoadingToggle />;
  },
};

export const DuttonDisabled: Story = {
  args: {
    type: 'button',
    backgroundColor: 'yellow',
    width: '300px',
    height: '90px',
    padding: 0,
    backgroundColorDisabled: 'gray',
  },
  render: (args) => (
    <div>
      <Button onClick={action('button-click')} {...args} disabled>
        <TextBox mobileSize={25} desktopSize={25} margin={0} color="white">
          Halo
        </TextBox>
      </Button>
    </div>
  ),
};
