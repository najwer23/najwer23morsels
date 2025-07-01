import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconArrowLeft, IconArrowRight } from '.';

const meta: Meta<typeof IconArrowRight> = {
  title: 'Icons/Icons',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: () => (
    <div style={{ color: 'black', display: 'flex', gap: '10px' }}>
      <IconArrowRight width={20} height={20} />
      <IconArrowLeft width={20} height={20} />
    </div>
  ),
};
