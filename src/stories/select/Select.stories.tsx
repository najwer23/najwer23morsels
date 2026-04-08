import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select } from '.';

const meta: Meta<typeof Select> = {
  title: 'Input/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Custom select/autocomplete input with a hidden submitted value.

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
  args: {
    options: [
      { value: '1', label: 'Test1' },
      { value: '2', label: 'Test2' },
    ],
    label: 'Select',
    name: 'select',
    placeholder: 'Select',
    validatorOptions: [{ type: 'empty' }],
  },
  render: (args) => (
    <div>
      <Select {...args}>hello world!</Select>
    </div>
  ),
};
