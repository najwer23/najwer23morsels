import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { FormLogin } from '.';

const meta: Meta<typeof FormLogin> = {
  title: 'Form/FormLogin',
  component: FormLogin,
  parameters: {
    docs: {
      description: {
        component: `
A ready-to-use login form with email/password inputs, validation, submit handling, and optional navigation links for the home page, sign up, and forgot password.

\`\`\`tsx
import { FormLogin } from 'najwer23morsels/lib/FormLogin';
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
    linkMainPage: {
      link: '/',
      text: 'Main Page',
    },
    linkSignUp: {
      link: '/auth/sign-up',
      text: 'sign up',
    },
    linkForgotPassword: {
      link: '/auth/forgot-password',
      text: 'forgot password',
    },
    footerHeight: '0px',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div>
      <FormLogin {...args} />
    </div>
  ),
};

export const Pending: Story = {
  args: {
    isPending: true,
  },
  render: (args) => (
    <div>
      <FormLogin {...args} />
    </div>
  ),
};

export const Error: Story = {
  args: {
    isError: true,
    errorMsg: 'Invalid email or password',
  },
  render: (args) => (
    <div>
      <FormLogin {...args} />
    </div>
  ),
};

export const Success: Story = {
  args: {
    isSuccess: true,
    successMsg: 'Logged in successfully',
  },
  render: (args) => (
    <div>
      <FormLogin {...args} />
    </div>
  ),
};

export const WithoutLinks: Story = {
  args: {
    linkMainPage: undefined,
    linkSignUp: undefined,
    linkForgotPassword: undefined,
  },
  render: (args) => (
    <div>
      <FormLogin {...args} />
    </div>
  ),
};
