import type { Meta, StoryObj } from '@storybook/react-vite';

import { NavigationDashboard } from '.';

const meta: Meta<typeof NavigationDashboard> = {
  title: 'NavigationDashboard/NavigationDashboard',
  component: NavigationDashboard,
  parameters: {
    docs: {
      description: {
        component: `
Test Test

\`\`\`tsx
import { NavigationDashboard } from 'najwer23morsels/lib/NavigationDashboard';
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
      <NavigationDashboard {...args}>hello world!</NavigationDashboard>
    </div>
  ),
};
