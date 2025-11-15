import type { Meta, StoryObj } from '@storybook/react-vite';

import { Picture } from '.';

const meta: Meta<typeof Picture> = {
  title: 'Picture/Picture',
  component: Picture,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Test Test

\`\`\`tsx
import { Picture } from 'najwer23morsels/lib/picture';
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
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4,
  },
  render: (args) => (
    <div>
      <Picture {...args}>hello world!</Picture>
    </div>
  ),
};
