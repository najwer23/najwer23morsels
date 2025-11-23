import type { Meta, StoryObj } from '@storybook/react-vite';

import { Footer } from '.';

const meta: Meta<typeof Footer> = {
  title: 'Footer/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: `
Test Test

\`\`\`tsx
import { Footer } from 'najwer23morsels/lib/footer';
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
      <Footer {...args}>hello world!</Footer>
    </div>
  ),
};
