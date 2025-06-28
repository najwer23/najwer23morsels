import type { Meta, StoryObj } from '@storybook/react-vite';

import { Loader } from '.';

const meta: Meta<typeof Loader> = {
  title: 'Loader/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    () => (
      <div style={{ width: 'min(700px,calc(100vw - 50px)', height: '400px' }}>
        <Loader />
      </div>
    ),
  ],
};
