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
A simple calendar component for selecting and displaying dates.

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
  args: {
    name: 'Calendar',
    label: 'Calendar',
    placeholder: 'Your perfect date',
  },
  render: (args) => (
    <div>
      <Calendar {...args} />
    </div>
  ),
};
