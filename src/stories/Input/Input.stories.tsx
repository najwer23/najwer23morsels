import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { action } from 'storybook/actions';

import { Input } from '.';
import { InputProps } from './Input';

type InputStory = StoryObj<InputProps>;

const meta: Meta<typeof Input> = {
  title: 'Input/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A form field with a label, placeholder, validation, disabled state and custom colors. It renders an \`input\` (default) or a \`textarea\` (\`kind="textarea"\`).

Validation runs when the field loses focus. Once a field shows an error, it re-validates on every change, so the error clears as soon as the value is valid.

Validation messages use the \`validatorInputError\` variant from the Typography theme.

\`name\` is used as the element \`id\` and must be unique on the page.

\`\`\`tsx
import { Input } from 'najwer23morsels/lib/Input';
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    kind: { control: 'inline-radio', options: ['input', 'textarea'] },
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    defaultValue: { control: 'text' },
    disabled: { control: 'boolean' },
    labelColor: { control: 'color' },
    inputColor: { control: 'color' },
    inputColorBorder: { control: 'color' },
  },
  args: {
    onChange: action('change'),
    onBlur: action('blur'),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

/* ---------- Input ---------- */

export const Default: InputStory = {
  args: {
    label: 'Label',
    name: 'default',
    placeholder: 'Type..',
  },
};

export const Required: InputStory = {
  parameters: {
    docs: {
      description: {
        story: 'Click into the field, leave it empty, then click away to see the themed validation error.',
      },
    },
  },
  args: {
    label: 'Required field',
    name: 'required',
    placeholder: 'Type..',
    validatorOptions: [{ type: 'empty' }],
  },
};

export const DefaultValue: InputStory = {
  args: {
    label: 'Label',
    name: 'defaultValue',
    defaultValue: 'Default Value',
  },
};

export const Disabled: InputStory = {
  args: {
    label: 'Disabled',
    name: 'disabled',
    placeholder: 'Type..',
    disabled: true,
  },
};

export const DisabledWithValue: InputStory = {
  args: {
    label: 'Disabled with value',
    name: 'disabledWithValue',
    defaultValue: 'Cannot edit this',
    disabled: true,
  },
};

export const Controlled: InputStory = {
  parameters: {
    docs: {
      description: {
        story: 'Controlled with `value` and `onChange`. The text below mirrors the state.',
      },
    },
  },
  args: {
    label: 'Controlled',
    name: 'controlled',
    placeholder: 'Type..',
  },
  render: function Render(args: InputProps) {
    const [value, setValue] = useState('');

    return (
      <>
        <Input
          {...args}
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value);
            args.onChange?.(e);
          }}
        />
        <p style={{ fontSize: 12, margin: '8px 0 0' }}>Value: {value || '(empty)'}</p>
      </>
    );
  },
};

export const Password: InputStory = {
  args: {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter password',
    autoComplete: 'current-password',
  },
};

export const NumberWithStep: InputStory = {
  args: {
    label: 'Amount',
    name: 'amount',
    type: 'number',
    step: 0.01,
    placeholder: '0.00',
  },
};

export const Colors: InputStory = {
  args: {
    label: 'Label',
    name: 'colors',
    placeholder: 'Type..',
    inputColorBorder: '#6B4FA0',
    inputColor: '#3F454B',
    labelColor: '#B45309',
  },
};

/* ---------- Textarea ---------- */

export const Textarea: InputStory = {
  args: {
    label: 'Message',
    name: 'textarea',
    kind: 'textarea',
    placeholder: 'Type..',
  },
};

export const TextareaDefaultValue: InputStory = {
  args: {
    label: 'Message',
    name: 'textareaDefaultValue',
    kind: 'textarea',
    defaultValue: 'Default Value',
  },
};

export const TextareaRequired: InputStory = {
  parameters: {
    docs: {
      description: {
        story: 'Click into the field, leave it empty, then click away to see the themed validation error.',
      },
    },
  },
  args: {
    label: 'Message',
    name: 'textareaRequired',
    kind: 'textarea',
    placeholder: 'Type..',
    validatorOptions: [{ type: 'empty' }],
  },
};

export const TextareaDisabled: InputStory = {
  args: {
    label: 'Message',
    name: 'textareaDisabled',
    kind: 'textarea',
    defaultValue: 'Cannot edit this',
    disabled: true,
  },
};

export const TextareaControlled: InputStory = {
  args: {
    label: 'Message',
    name: 'textareaControlled',
    kind: 'textarea',
    placeholder: 'Type..',
  },
  render: function Render(args: InputProps) {
    const [value, setValue] = useState('');

    return (
      <>
        <Input
          {...args}
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value);
            args.onChange?.(e);
          }}
        />
        <p style={{ fontSize: 12, margin: '8px 0 0' }}>Characters: {value.length}</p>
      </>
    );
  },
};

export const TextareaColors: InputStory = {
  args: {
    label: 'Message',
    name: 'textareaColors',
    kind: 'textarea',
    placeholder: 'Type..',
    inputColorBorder: '#6B4FA0',
    inputColor: '#3F454B',
    labelColor: '#B45309',
  },
};
