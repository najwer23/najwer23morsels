import type { Meta, StoryObj } from '@storybook/react-vite';

import { LoaderDots } from '.';

const meta: Meta<typeof LoaderDots> = {
  title: 'Loader/LoaderDots',
  component: LoaderDots,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is a loader component that can be used to indicate loading states in your application.

\`\`\`tsx
import { LoaderDots } from 'najwer23morsels/lib/LoaderDots';
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
  render: (args) => (
    <div>
      <LoaderDots {...args} />
    </div>
  ),
};
