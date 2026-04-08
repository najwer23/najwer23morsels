import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select } from '.';

const meta: Meta<typeof Select> = {
  title: 'Select/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Test Test

\`\`\`tsx
import { Select } from 'najwer23morsels/lib/select';
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
  args: {},
  render: (args) => (
    <div>
      <Select {...args}>hello world!</Select>
    </div>
  ),
};
