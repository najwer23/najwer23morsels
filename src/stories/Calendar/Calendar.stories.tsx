import type { Meta, StoryObj } from '@storybook/react-vite';

import { Calendar } from '.';

const meta: Meta<typeof Calendar> = {
  title: 'Input/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A simple calendar component for selecting and displaying dates.

\`\`\`tsx
import { Calendar } from 'najwer23morsels/lib/Calendar';
\`\`\`
      `,
      },
    },
  },
  argTypes: {
    initialValue: {
      control: 'text',
      description: 'Initial date in `YYYY-MM-DD` format, or an empty string for no date',
    },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Calendar',
    label: 'Calendar',
    placeholder: 'Your perfect date',
  },
  render: (args) => (
    <div>
      <Calendar {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    name: 'Calendar',
    label: 'Calendar (disabled)',
    placeholder: 'Calendar is disabled',
    disabled: true,
  },
  render: (args) => (
    <div>
      <Calendar {...args} />
    </div>
  ),
};

export const Empty: Story = {
  args: {
    name: 'Calendar',
    label: 'Calendar (empty)',
    placeholder: 'YYYY-MM-DD',
    initialValue: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Starts with no value. The dropdown opens on today’s month.',
      },
    },
  },
  render: (args) => (
    <div>
      <Calendar {...args} />
    </div>
  ),
};

export const WithInitialValue: Story = {
  args: {
    name: 'Calendar',
    label: 'Birthday',
    placeholder: 'YYYY-MM-DD',
    initialValue: '1995-03-15',
  },
  render: (args) => (
    <div>
      <Calendar {...args} />
    </div>
  ),
};

export const LeapDay: Story = {
  args: {
    name: 'Calendar',
    label: 'Leap day (2024-02-29)',
    placeholder: 'YYYY-MM-DD',
    initialValue: '2024-02-29',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Feb 29 in a leap year. Change the year to 2023 or 2025 with the year picker: the day should clamp to Feb 28 instead of jumping to March.',
      },
    },
  },
  render: (args) => (
    <div>
      <Calendar {...args} />
    </div>
  ),
};

export const EndOfMonth: Story = {
  args: {
    name: 'Calendar',
    label: 'End of month (2025-01-31)',
    placeholder: 'YYYY-MM-DD',
    initialValue: '2025-01-31',
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the next-month arrow: Jan 31 should become Feb 28, not overflow into March.',
      },
    },
  },
  render: (args) => (
    <div>
      <Calendar {...args} />
    </div>
  ),
};

export const InvalidDate: Story = {
  args: {
    name: 'Calendar',
    label: 'Invalid date (2026-02-29)',
    placeholder: 'YYYY-MM-DD',
    initialValue: '2026-02-29',
  },
  parameters: {
    docs: {
      description: {
        story: '2026 is not a leap year, so the validator should show an error after blur.',
      },
    },
  },
  render: (args) => (
    <div>
      <Calendar {...args} />
    </div>
  ),
};

export const WithValidation: Story = {
  args: {
    name: 'Calendar',
    label: 'Required date',
    placeholder: 'YYYY-MM-DD',
    initialValue: '',
    // Adapt this to your ValidatorOptions shape
    validatorOptions: [{ type: 'empty' }] as never,
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra validator rules are merged with the built-in `date` rule.',
      },
    },
  },
  render: (args) => (
    <div>
      <Calendar {...args} />
    </div>
  ),
};

export const TypeToNavigate: Story = {
  args: {
    name: 'Calendar',
    label: 'Type to navigate',
    placeholder: 'Try typing 1995-03',
    initialValue: '',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Type a partial date such as `1995-03`: the header and the days grid follow the typed year and month before the date is complete.',
      },
    },
  },
  render: (args) => (
    <div>
      <Calendar {...args} />
    </div>
  ),
};

export const SideBySide: Story = {
  args: {
    name: 'Calendar',
    label: 'Calendar',
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 16, width: 280 }}>
      <Calendar {...args} name="a" label="Default" placeholder="YYYY-MM-DD" />
      <Calendar {...args} name="b" label="With value" initialValue="2000-01-01" />
      <Calendar {...args} name="c" label="Disabled" initialValue="2000-01-01" disabled />
    </div>
  ),
};
