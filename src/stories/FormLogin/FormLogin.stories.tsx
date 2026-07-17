import type { Meta, StoryObj } from '@storybook/react-vite';

import { FormLogin } from '.';

const meta: Meta<typeof FormLogin> = {
  title: 'Form/FormLogin',
  component: FormLogin,
  parameters: {
    docs: {
      description: {
        component: `
Test Test

\`\`\`tsx
import { FormLogin } from 'najwer23morsels/lib/FormLogin';
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
      <FormLogin {...args}>hello world!</FormLogin>
    </div>
  ),
};
