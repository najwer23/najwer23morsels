import type { StoryObj } from '@storybook/react';

import { Button as ButtonSnack } from '.';

const meta = {
  title: 'Button/Button',
  component: ButtonSnack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    children: 'Click!',
    disabled: false,
    onClick: () => {
      console.log('Hello Click!');
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Click!',
    disabled: true,
    onClick: () => {
      console.log('Hello Click!');
    },
  },
};
