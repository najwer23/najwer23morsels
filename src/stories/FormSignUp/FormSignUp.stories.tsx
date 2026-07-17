import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { FormSignUp } from '.';

const meta: Meta<typeof FormSignUp> = {
  title: 'Form/FormSignUp',
  component: FormSignUp,
  parameters: {
    docs: {
      description: {
        component: `
An account sign-up form with email/password inputs, validation, submit handling, and optional navigation links for the home page and login.

\`\`\`tsx
import { FormSignUp } from 'najwer23morsels/lib/FormSignUp';
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
      <FormSignUp {...args} />
    </div>
  ),
};

export const Pending: Story = {
  args: {
    isPending: true,
  },
  render: (args) => (
    <div>
      <FormSignUp {...args} />
    </div>
  ),
};

export const Error: Story = {
  args: {
    isError: true,
    errorMsg: 'Email already in use',
  },
  render: (args) => (
    <div>
      <FormSignUp {...args} />
    </div>
  ),
};

export const Success: Story = {
  args: {
    isSuccess: true,
    successMsg: 'Account created successfully',
  },
  render: (args) => (
    <div>
      <FormSignUp {...args} />
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
      <FormSignUp {...args} />
    </div>
  ),
};
