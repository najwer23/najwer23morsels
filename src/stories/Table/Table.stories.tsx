import type { Meta, StoryObj } from '@storybook/react-vite';

import type { SelectOption } from '../Select';
import { Table, type TableColumn } from '.';

const meta: Meta<typeof Table> = {
  title: 'Table/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A table with columns defined in \`jsonSchema.cols\` and rows in \`jsonData.rows\`.

Editing is optional. Pass \`handleCellEdit\` to make cells clickable and open the row editor (the \`id\` field is read-only); omit it for a read-only table. Pass \`handelCellDel\` to add a Delete button to the editor. Submission status and feedback messages are controlled through props.
`,
      },
    },
  },
  args: {
    handleCellEdit: (form) => {
      console.log('Edited row:', form);
    },
    resetQueryCellEdit: () => {
      console.log('Reset cell edit query');
    },
    handelCellDel: (row) => {
      console.log('Deleted row:', row);
    },
    isErrorCellEdit: false,
    isPendingCellEdit: false,
    isSuccessCellEdit: false,
    errorMsgCellEdit: undefined,
    successMsgCellEdit: undefined,
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

const statusOptions: SelectOption[] = [
  { label: 'Open', value: 'Open' },
  { label: 'In progress', value: 'In progress' },
  { label: 'Done', value: 'Done' },
];

const priorityOptions: SelectOption[] = [
  { label: 'High', value: 'High' },
  { label: 'Medium', value: 'Medium' },
  { label: 'Low', value: 'Low' },
];

const taskColumns: TableColumn[] = [
  { cellName: 'id', cellText: 'ID', cellType: 'text' },
  { cellName: 'title', cellText: 'Task', cellType: 'text' },
  { cellName: 'owner', cellText: 'Owner', cellType: 'text' },
  {
    cellName: 'hours',
    cellText: 'Hours',
    cellType: 'number',
    thAlign: 'right',
    tdAlign: 'right',
  },
  {
    cellName: 'dueDate',
    cellText: 'Due Date',
    cellType: 'date',
    initialValue: '2026-10-30',
  },
  {
    cellName: 'status',
    cellText: 'Status',
    cellType: 'select',
    options: statusOptions,
    initialValue: statusOptions[0],
  },
  {
    cellName: 'priority',
    cellText: 'Priority',
    cellType: 'select',
    options: priorityOptions,
    initialValue: priorityOptions[1],
  },
];

const taskRows = [
  {
    id: 1,
    title: 'Finalize pricing page copy',
    owner: 'Maria Kowalska',
    hours: 6,
    dueDate: '2026-10-30',
    status: 'In progress',
    priority: 'High',
  },
  {
    id: 2,
    title: 'Set up analytics events',
    owner: 'Tomasz Nowak',
    hours: 12,
    dueDate: '2026-11-02',
    status: 'Open',
    priority: 'Medium',
  },
  {
    id: 3,
    title: 'Record onboarding video',
    owner: 'Anna Wiśniewska',
    hours: 8,
    dueDate: '2026-11-05',
    status: 'Done',
    priority: 'Low',
  },
  {
    id: 4,
    title: 'Fix invoice PDF layout',
    owner: 'Piotr Zieliński',
    hours: 4,
    dueDate: '2026-11-10',
    status: 'In progress',
    priority: 'Medium',
  },
  {
    id: 5,
    title: 'Write release notes',
    owner: 'Maria Kowalska',
    hours: 3,
    dueDate: '2026-11-12',
    status: 'Open',
    priority: 'Low',
  },
];

export const Default: Story = {
  args: {
    jsonSchema: { cols: taskColumns },
    jsonData: { rows: taskRows },
  },
};

export const NumbersAndBooleans: Story = {
  args: {
    jsonSchema: {
      cols: [
        { cellName: 'id', cellText: 'ID', cellType: 'text' },
        { cellName: 'title', cellText: 'Task', cellType: 'text' },
        { cellName: 'done', cellText: 'Completed', cellType: 'text' },
        {
          cellName: 'hours',
          cellText: 'Hours',
          cellType: 'number',
          thAlign: 'right',
          tdAlign: 'right',
        },
        {
          cellName: 'cost',
          cellText: 'Cost',
          cellType: 'number',
          thAlign: 'right',
          tdAlign: 'right',
        },
      ],
    },
    jsonData: {
      rows: [
        { id: 1, title: 'Design', done: true, hours: 4, cost: 200 },
        { id: 2, title: 'Development', done: false, hours: 12, cost: 600 },
        { id: 3, title: 'Testing', done: true, hours: 3, cost: 150 },
      ],
    },
  },
};

export const MissingCells: Story = {
  args: {
    jsonSchema: {
      cols: [
        { cellName: 'id', cellText: 'ID', cellType: 'text' },
        { cellName: 'name', cellText: 'Name', cellType: 'text' },
        { cellName: 'email', cellText: 'Email', cellType: 'text' },
        { cellName: 'role', cellText: 'Role', cellType: 'text' },
      ],
    },
    jsonData: {
      rows: [
        { id: 1, name: 'Anna', email: 'anna@example.com', role: 'Admin' },
        { id: 2, name: 'Piotr', role: 'Editor' },
        { id: 3, email: 'maria@example.com', role: 'Viewer' },
      ],
    },
  },
};

export const Empty: Story = {
  args: {
    jsonSchema: { cols: taskColumns },
    jsonData: { rows: [] },
  },
};

export const CustomStyle: Story = {
  args: {
    jsonSchema: { cols: taskColumns },
    jsonData: { rows: taskRows },
    style: {
      '--table-cell-padding': '16px',
      '--table-border-color': '#b8c7d9',
      '--table-header-color': '#eaf1f8',
    } as React.CSSProperties,
  },
};

export const ManyRows: Story = {
  args: {
    jsonSchema: { cols: taskColumns },
    jsonData: {
      rows: Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        title: `Task ${index + 1}`,
        owner: ['Anna', 'Piotr', 'Maria', 'Tomasz'][index % 4],
        hours: ((index + 1) % 8) + 1,
        dueDate: `2026-11-${String((index % 28) + 1).padStart(2, '0')}`,
        status: statusOptions[index % statusOptions.length].value,
        priority: priorityOptions[index % priorityOptions.length].value,
      })),
    },
  },
};

export const Narrow: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '280px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    jsonSchema: {
      cols: [
        { cellName: 'id', cellText: 'ID', cellType: 'text' },
        { cellName: 'title', cellText: 'Task', cellType: 'text' },
        { cellName: 'owner', cellText: 'Owner', cellType: 'text' },
        { cellName: 'hours', cellText: 'Hours', cellType: 'number' },
        {
          cellName: 'status',
          cellText: 'Status',
          cellType: 'select',
          options: statusOptions,
          initialValue: statusOptions[0],
        },
        {
          cellName: 'priority',
          cellText: 'Priority',
          cellType: 'select',
          options: priorityOptions,
          initialValue: priorityOptions[1],
        },
      ],
    },
    jsonData: {
      rows: Array.from({ length: 5 }, (_, index) => ({
        id: index + 1,
        title: `Task ${index + 1}`,
        owner: ['Anna', 'Piotr', 'Maria', 'Tomasz', 'Jan'][index],
        hours: index + 2,
        status: statusOptions[index % statusOptions.length].value,
        priority: priorityOptions[index % priorityOptions.length].value,
      })),
    },
  },
};

export const ReadOnly: Story = {
  args: {
    jsonSchema: { cols: taskColumns },
    jsonData: { rows: taskRows },
    handleCellEdit: undefined,
    resetQueryCellEdit: undefined,
    handelCellDel: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Without `handleCellEdit` the table is read-only: cells are not clickable and no edit dialog is rendered.',
      },
    },
  },
};

export const EditWithoutDelete: Story = {
  args: {
    jsonSchema: { cols: taskColumns },
    jsonData: { rows: taskRows },
    handelCellDel: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Without `handelCellDel` the edit dialog has no Delete button and Save stays aligned to the right.',
      },
    },
  },
};
