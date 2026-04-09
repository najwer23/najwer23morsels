import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '.';
import { InputProps, SelectProps } from './Input';

type InputStory = StoryObj<InputProps>;
type InputSelectStory = StoryObj<SelectProps>;

const meta: Meta<typeof Input> = {
  title: 'Input/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This Input component is designed for flexible use in forms, supporting labels, placeholders, validation, disabled state, custom colors, and textarea mode.

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

export const Default: InputStory = {
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

export const Validator: InputStory = {
  args: {
    label: 'Label',
    name: 'input',
    placeholder: 'Type..',
    validatorOptions: [{ type: 'empty' }],
  },
  render: (args) => (
    <div>
      <Input {...args} />
      <Input {...args} />
    </div>
  ),
};

export const Disabled: InputStory = {
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

export const InputColors: InputStory = {
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

export const DefaultValue: InputStory = {
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

export const Textarea: InputStory = {
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
