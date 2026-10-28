import type { Meta, StoryObj } from '@storybook/react-vite';

import { Table } from '.';

const meta: Meta<typeof Table> = {
  title: 'Table/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Renders a read-only table. Columns are defined in \`jsonSchema.col\` (\`cellName\` is the key in a row, \`cellText\` is the header label). Each item in \`jsonData.rows\` is one row with a unique \`id\`.

\`\`\`tsx
import { Table } from 'najwer23morsels/lib/Table';
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 640, maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

const taskColumns = [
  { cellName: 'title', cellText: 'Task' },
  { cellName: 'owner', cellText: 'Owner' },
  { cellName: 'hours', cellText: 'Hours', thAlign: 'right' as const, tdAlign: 'right' as const },
];

const taskRows = [
  { id: 1, title: 'Finalize pricing page copy', owner: 'Maria Kowalska', hours: 6 },
  { id: 2, title: 'Set up analytics events', owner: 'Tomasz Nowak', hours: 12 },
  { id: 3, title: 'Record onboarding video', owner: 'Anna Wiśniewska', hours: 8 },
  { id: 4, title: 'Fix invoice PDF layout', owner: 'Piotr Zieliński', hours: 4 },
  { id: 5, title: 'Write release notes', owner: 'Maria Kowalska', hours: 3 },
];

export const Default: Story = {
  args: {
    jsonSchema: { col: taskColumns },
    jsonData: { rows: taskRows },
  },
};

export const NumbersAndBooleans: Story = {
  name: 'Numbers and booleans',
  parameters: {
    docs: {
      description: {
        story: 'Numbers are right-aligned with tabular figures. Booleans are displayed as the text `true` or `false`.',
      },
    },
  },
  args: {
    jsonSchema: {
      col: [
        { cellName: 'title', cellText: 'Task' },
        { cellName: 'done', cellText: 'Done' },
        { cellName: 'hours', cellText: 'Hours', thAlign: 'right', tdAlign: 'right' },
        { cellName: 'cost', cellText: 'Cost', thAlign: 'right', tdAlign: 'right' },
      ],
    },
    jsonData: {
      rows: [
        { id: 1, title: 'Write release notes', done: false, hours: 3, cost: 240.5 },
        { id: 2, title: 'Fix invoice PDF layout', done: true, hours: 4, cost: 320 },
        { id: 3, title: 'Record onboarding video', done: false, hours: 8, cost: 1280.75 },
      ],
    },
  },
};

export const MissingCells: Story = {
  name: 'Missing cells',
  parameters: {
    docs: {
      description: {
        story: 'A row without a value for a column renders an empty cell.',
      },
    },
  },
  args: {
    jsonSchema: { col: taskColumns },
    jsonData: {
      rows: [
        { id: 1, title: 'Finalize pricing page copy', owner: 'Maria Kowalska', hours: 6 },
        { id: 2, title: 'Set up analytics events', hours: 12 },
        { id: 3, title: 'Record onboarding video', owner: 'Anna Wiśniewska' },
      ],
    },
  },
};

export const Empty: Story = {
  parameters: {
    docs: {
      description: {
        story: 'With no rows, only the header is shown.',
      },
    },
  },
  args: {
    jsonSchema: { col: taskColumns },
    jsonData: { rows: [] },
  },
};

export const CustomStyle: Story = {
  name: 'Custom style',
  parameters: {
    docs: {
      description: {
        story:
          'Override the CSS variables through the `style` prop: `--table-cell-padding`, `--table-border-color` and `--table-header-color`.',
      },
    },
  },
  args: {
    jsonSchema: { col: taskColumns },
    jsonData: { rows: taskRows },
    style: {
      '--table-cell-padding': '16px 20px',
      '--table-border-color': '#2a6f97',
      '--table-header-color': '#2a6f97',
    } as React.CSSProperties,
  },
};

export const ManyRows: Story = {
  name: 'Many rows',
  args: {
    jsonSchema: { col: taskColumns },
    jsonData: {
      rows: Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        title: `Task number ${i + 1}`,
        owner: ['Maria Kowalska', 'Tomasz Nowak', 'Anna Wiśniewska'][i % 3],
        hours: (i % 8) + 1,
      })),
    },
  },
};

export const Narrow: Story = {
  name: 'Narrow',
  parameters: {
    docs: {
      description: {
        story:
          'A narrow container demonstrates horizontal scrolling and edge shadows when the columns exceed the available width.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 280, maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    jsonSchema: {
      col: [
        { cellName: 'title', cellText: 'Task' },
        { cellName: 'owner', cellText: 'Owner' },
        { cellName: 'hours', cellText: 'Hours' },
        { cellName: 'status', cellText: 'Status' },
        { cellName: 'priority', cellText: 'Priority' },
      ],
    },
    jsonData: {
      rows: taskRows.map((row, index) => ({
        ...row,
        status: index % 2 === 0 ? 'In progress' : 'Completed',
        priority: index % 2 === 0 ? 'High' : 'Normal',
      })),
    },
  },
};
