import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { FormForgotPassOtp } from '.';

const meta: Meta<typeof FormForgotPassOtp> = {
  title: 'Form/FormForgotPassOtp',
  component: FormForgotPassOtp,
  parameters: {
    docs: {
      description: {
        component: `
A new-password form used after OTP/email verification, with password + confirm-password inputs, matching validation, submit handling, and an optional home page link.

\`\`\`tsx
import { FormForgotPassOtp } from 'najwer23morsels/lib/FormForgotPassOtp';
\`\`\`
      `,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    onSubmit: fn(),
    onNavigate: fn(),
    isError: false,
    isPending: false,
    isSuccess: false,
    errorMsg: null,
    successMsg: null,
    footerHeight: '100px',
    linkMainPage: {
      link: '/',
      text: 'Main Page',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div>
      <FormForgotPassOtp {...args} />
    </div>
  ),
};

export const Pending: Story = {
  args: {
    isPending: true,
  },
  render: (args) => (
    <div>
      <FormForgotPassOtp {...args} />
    </div>
  ),
};

export const Error: Story = {
  args: {
    isError: true,
    errorMsg: 'Passwords do not match',
  },
  render: (args) => (
    <div>
      <FormForgotPassOtp {...args} />
    </div>
  ),
};

export const Success: Story = {
  args: {
    isSuccess: true,
    successMsg: 'Password changed successfully',
  },
  render: (args) => (
    <div>
      <FormForgotPassOtp {...args} />
    </div>
  ),
};

export const WithoutLinks: Story = {
  args: {
    linkMainPage: undefined,
  },
  render: (args) => (
    <div>
      <FormForgotPassOtp {...args} />
    </div>
  ),
};
