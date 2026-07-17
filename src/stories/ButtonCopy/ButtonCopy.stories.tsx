import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonCopy } from '.';

const meta: Meta<typeof ButtonCopy> = {
  title: 'Button/ButtonCopy',
  component: ButtonCopy,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A button that copies text to the clipboard.

\`\`\`tsx
import { ButtonCopy } from 'najwer23morsels/lib/ButtonCopy';
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
      <ButtonCopy {...args}></ButtonCopy>
    </div>
  ),
};
