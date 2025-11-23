import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconArrowLeft, IconArrowRight } from '.';
import { IconLocate } from './IconLocate';

const meta: Meta<typeof IconArrowRight> = {
  title: 'Icons/Icons',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is a collection of icon components that can be used in your application. The icons are designed to be simple and easy to use, with customizable properties such as width and height.

You can import the Icons component from the library and use it in your application as follows:
\`\`\`tsx
import { IconArrowRight } from 'najwer23morsels/lib/icons';
import { IconArrowLeft } from 'najwer23morsels/lib/icons';
\`\`\`
      `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    width: 20,
    height: 20,
    color: 'black',
  },
  render: (args) => (
    <div style={{ color: 'black', display: 'flex', gap: '10px' }}>
      <IconArrowRight {...args} />
      <IconArrowLeft {...args} />
      <IconLocate {...args} color="red" />
    </div>
  ),
};
