import type { Meta, StoryObj } from '@storybook/react-vite';

import { Loader } from '.';

const meta: Meta<typeof Loader> = {
  title: 'Loader/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is a loader component that can be used to indicate loading states in your application. It supports various properties such as size, color, and more.

You can import the Button component from the library and use it in your application as follows:
\`\`\`tsx
import { Loader } from 'najwer23morsels/lib/loader';
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
    loaderColor: 'black',
    minHeight: '400px',
  },
  render: (args) => (
    <div>
      <div style={{ width: 'min(700px,calc(100vw - 50px)', height: '400px' }}>
        <Loader {...args} />
      </div>
    </div>
  ),
};
