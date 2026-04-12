import type { Meta, StoryObj } from '@storybook/react-vite';

import { Calendar } from '.';

const meta: Meta<typeof Calendar> = {
  title: 'Input/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Test Test

\`\`\`tsx
import { Calendar } from 'najwer23morsels/lib/calendar';
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
      <Calendar {...args}>hello world!</Calendar>
    </div>
  ),
};
