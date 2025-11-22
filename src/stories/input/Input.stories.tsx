import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'Input/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Test Test

\`\`\`tsx
import { Input } from 'najwer23morsels/lib/input';
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
    label: 'Label',
    name: 'input',
    placeholder: 'Type..',
  },
  render: (args) => (
    <div>
      <Input {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    name: 'disabled',
    placeholder: 'Type..',
    disabled: true,
  },
  render: (args) => (
    <div>
      <Input {...args} />
    </div>
  ),
};

export const InputColors: Story = {
  args: {
    label: 'Label',
    name: 'inputColors',
    placeholder: 'Type..',
    inputColorBorder: 'blue',
    inputColor: 'purple',
    labelColor: 'orange',
  },
  render: (args) => (
    <div>
      <Input {...args} />
    </div>
  ),
};

export const DefaultValue: Story = {
  args: {
    label: 'Label',
    name: 'defaultValue',
    placeholder: 'Type..',
    defaultValue: 'Default Value',
  },
  render: (args) => (
    <div>
      <Input {...args} />
    </div>
  ),
};

export const Textarea: Story = {
  args: {
    label: 'Label',
    name: 'textarea',
    placeholder: 'Type..',
    defaultValue: 'Default Value',
    kind: 'textarea',
  },
  render: (args) => (
    <div style={{ minWidth: '400px' }}>
      <Input {...args} />
    </div>
  ),
};
