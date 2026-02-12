import type { Meta, StoryObj } from '@storybook/react-vite';

import { CopyButton } from '.';

const meta: Meta<typeof CopyButton> = {
  title: 'CopyButton/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Test Test

\`\`\`tsx
import { CopyButton } from 'najwer23morsels/lib/copybutton';
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
    textToCopy: 'Hagagagga',
  },
  render: (args) => (
    <div>
      <CopyButton {...args}></CopyButton>
    </div>
  ),
};
