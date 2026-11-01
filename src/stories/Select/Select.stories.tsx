import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { action } from 'storybook/actions';
import { Select } from '.';

const countries = [
  { value: 'pl', label: 'Poland' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'es', label: 'Spain' },
  { value: 'it', label: 'Italy' },
  { value: 'cz', label: 'Czechia' },
  { value: 'sk', label: 'Slovakia' },
  { value: 'se', label: 'Sweden' },
  { value: 'no', label: 'Norway' },
  { value: 'pt', label: 'Portugal' },
];

const meta: Meta<typeof Select> = {
  title: 'Input/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Custom select/autocomplete input with a hidden submitted value.

\`\`\`tsx
import { Select } from 'najwer23morsels/lib/Select';
\`\`\`
      `,
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: '1', label: 'Test1' },
      { value: '2', label: 'Test2' },
    ],
    label: 'Select',
    name: 'select',
    placeholder: 'Select',
    validatorOptions: [{ type: 'empty' }],
    onBlur: (e, data) => {
      action('onBlur')({ inputValue: e.currentTarget.value, ...data });
    },
  },
  render: (args) => (
    <div>
      <Select {...args} />
    </div>
  ),
};

export const WithInitialValue: Story = {
  args: {
    options: countries,
    label: 'Country',
    name: 'country',
    placeholder: 'Select a country',
    initialValue: { value: 'pl', label: 'Poland' },
    validatorOptions: [{ type: 'empty' }],
    onBlur: (e, data) => {
      action('onBlur')({ inputValue: e.currentTarget.value, ...data });
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Starts with a selected option. Clicking the input keeps the value and shows all options, not only the selected one.',
      },
    },
  },
  render: (args) => (
    <div style={{ minHeight: 320 }}>
      <Select {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    options: countries,
    label: 'Country (disabled)',
    name: 'country',
    placeholder: 'Select is disabled',
    initialValue: { value: 'de', label: 'Germany' },
    disabled: true,
  },
  render: (args) => (
    <div>
      <Select {...args} />
    </div>
  ),
};

export const LongList: Story = {
  args: {
    options: Array.from({ length: 100 }, (_, i) => ({
      value: String(i + 1),
      label: `Option ${i + 1}`,
    })),
    label: 'Long list',
    name: 'longList',
    placeholder: 'Scroll or type to filter',
  },
  parameters: {
    docs: {
      description: {
        story: '100 options. Check that the dropdown scrolls and filtering stays responsive.',
      },
    },
  },
  render: (args) => (
    <div style={{ minHeight: 320 }}>
      <Select {...args} />
    </div>
  ),
};

export const TypeToFilter: Story = {
  args: {
    options: countries,
    label: 'Country',
    name: 'country',
    placeholder: 'Try typing "an" or "s"',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Typing filters the list by label (case-insensitive). While typing, the submitted value is cleared until an option is picked.',
      },
    },
  },
  render: (args) => (
    <div style={{ minHeight: 320 }}>
      <Select {...args} />
    </div>
  ),
};

export const NoMatches: Story = {
  args: {
    options: countries,
    label: 'Country',
    name: 'country',
    placeholder: 'Type "xyz"',
    validatorOptions: [{ type: 'empty' }],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Type text that matches nothing and blur. The dropdown is empty and the `existsInOptions` validator should show an error.',
      },
    },
  },
  render: (args) => (
    <div style={{ minHeight: 120 }}>
      <Select {...args} />
    </div>
  ),
};

export const Required: Story = {
  args: {
    options: countries,
    label: 'Required country',
    name: 'country',
    placeholder: 'Select a country',
    validatorOptions: [{ type: 'empty' }],
  },
  parameters: {
    docs: {
      description: {
        story: 'Focus the field and blur it without choosing anything to see the validation error.',
      },
    },
  },
  render: (args) => (
    <div style={{ minHeight: 320 }}>
      <Select {...args} />
    </div>
  ),
};

const FormDemo = (args: React.ComponentProps<typeof Select>) => {
  const [submitted, setSubmitted] = useState<string | null>(null);

  return (
    <form
      style={{ display: 'grid', gap: 12, width: 280, minHeight: 360, alignContent: 'start' }}
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setSubmitted(String(data.get(args.name) ?? ''));
      }}
    >
      <Select {...args} />
      <button type="submit">Submit</button>
      {submitted !== null && <div>Submitted value: {submitted || '(empty)'}</div>}
    </form>
  );
};

export const InForm: Story = {
  args: {
    options: countries,
    label: 'Country',
    name: 'country',
    placeholder: 'Select a country',
    validatorOptions: [{ type: 'empty' }],
  },
  parameters: {
    docs: {
      description: {
        story: 'The hidden input submits the option `value` (for example `pl`), not the visible label (`Poland`).',
      },
    },
  },
  render: (args) => <FormDemo {...args} />,
};

export const SideBySide: Story = {
  args: {
    options: countries,
    label: 'Select',
    name: 'select',
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 16, width: 280, minHeight: 360, alignContent: 'start' }}>
      <Select {...args} name="a" label="Empty" placeholder="Select" />
      <Select {...args} name="b" label="With value" initialValue={{ value: 'fr', label: 'France' }} />
      <Select {...args} name="c" label="Disabled" initialValue={{ value: 'fr', label: 'France' }} disabled />
    </div>
  ),
};
