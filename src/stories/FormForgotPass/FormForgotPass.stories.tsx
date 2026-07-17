import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { FormForgotPass } from '.';

const meta: Meta<typeof FormForgotPass> = {
  title: 'Form/FormForgotPass',
  component: FormForgotPass,
  parameters: {
    docs: {
      description: {
        component: `
A password-reset request form with an email input, validation, submit handling, and optional navigation links for the home page and back to login.

\`\`\`tsx
import { FormForgotPass } from 'najwer23morsels/lib/FormForgotPass';
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
    linkLogin: {
      link: '/auth/login',
      text: 'login',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div>
      <FormForgotPass {...args} />
    </div>
  ),
};

export const Pending: Story = {
  args: {
    isPending: true,
  },
  render: (args) => (
    <div>
      <FormForgotPass {...args} />
    </div>
  ),
};

export const Error: Story = {
  args: {
    isError: true,
    errorMsg: 'No account found with that email',
  },
  render: (args) => (
    <div>
      <FormForgotPass {...args} />
    </div>
  ),
};

export const Success: Story = {
  args: {
    isSuccess: true,
    successMsg: 'Password reset link sent to your email',
  },
  render: (args) => (
    <div>
      <FormForgotPass {...args} />
    </div>
  ),
};

export const WithoutLinks: Story = {
  args: {
    linkMainPage: undefined,
    linkLogin: undefined,
  },
  render: (args) => (
    <div>
      <FormForgotPass {...args} />
    </div>
  ),
};
