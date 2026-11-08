import type { Meta, StoryObj } from '@storybook/react-vite';

import type { SelectOption } from '../Select';
import { Table, type TableColumn, type TableRowDelete, type TableRowEdit } from '.';

const defaultRowEdit: TableRowEdit = {
  onRowEdit: (form) => {
    console.log('Edited row:', form);
  },
  isRowEditError: false,
  isRowEditPending: false,
  isRowEditSuccess: false,
  rowEditErrorMsg: undefined,
  rowEditSuccessMsg: undefined,
};

const defaultRowDelete: TableRowDelete = {
  onRowDelete: (id) => {
    console.log('Deleted row:', id);
  },
  isRowDeleteError: false,
  isRowDeletePending: false,
  isRowDeleteSuccess: false,
  rowDeleteErrorMsg: undefined,
  rowDeleteSuccessMsg: undefined,
};

const meta: Meta<typeof Table> = {
  title: 'Table/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A table with columns defined in \`jsonSchema.cols\` and rows in \`jsonData.rows\`.

Editing is optional and configured through the \`rowEdit\` object. Pass \`rowEdit.onRowEdit\` to make cells clickable and open the row editor (the \`id\` field is read-only); omit \`rowEdit\` for a read-only table. Submission status and feedback messages are controlled through \`isRowEditError\`, \`isRowEditPending\`, \`isRowEditSuccess\`, \`rowEditErrorMsg\` and \`rowEditSuccessMsg\`.

Deleting is configured separately through the \`rowDelete\` object. Pass \`rowDelete.onRowDelete\` to add a Delete button to the editor. Clicking it opens an "Are you sure?" confirmation dialog, and \`onRowDelete\` is called only after confirming. The dialog stays open to show the result: \`rowDeleteErrorMsg\` when \`isRowDeleteError\` is true, or \`rowDeleteSuccessMsg\` with a Close button when \`isRowDeleteSuccess\` is true. Delete status is controlled through \`isRowDeleteError\`, \`isRowDeletePending\`, \`isRowDeleteSuccess\`, \`rowDeleteErrorMsg\` and \`rowDeleteSuccessMsg\`. Because the Delete button lives in the editor, \`rowEdit.onRowEdit\` must also be set.

\`onRowReset\` is independent of both objects. It is called when a dialog is closed or cancelled, including the Close button after a successful delete, so the parent can reset its edit and delete queries.

Pass \`isLoading\` to replace the body rows with a loader while data is being fetched; the header row stays visible.
`,
      },
    },
  },
  args: {
    rowEdit: defaultRowEdit,
    rowDelete: defaultRowDelete,
    onRowReset: () => {
      console.log('Reset row edit and delete queries');
    },
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
  { cellName: 'title', cellText: 'Task', cellType: 'text', validatorOptions: [{ type: 'empty' }] },
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
    thAlign: 'center',
    tdAlign: 'center',
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
    rowEdit: undefined,
    rowDelete: undefined,
    onRowReset: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Without `rowEdit` the table is read-only: cells are not clickable and no dialogs are rendered.',
      },
    },
  },
};

export const EditWithoutDelete: Story = {
  args: {
    jsonSchema: { cols: taskColumns },
    jsonData: { rows: taskRows },
    rowDelete: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Without `rowDelete` the edit dialog has no Delete button and Save stays aligned to the right.',
      },
    },
  },
};

export const DeleteConfirmation: Story = {
  args: {
    jsonSchema: { cols: taskColumns },
    jsonData: { rows: taskRows },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Click a cell, then Delete. An "Are you sure?" dialog opens. Cancel closes only the confirmation; "Yes, delete" calls `rowDelete.onRowDelete` with the row id and leaves the dialog open so the parent can show the result.',
      },
    },
  },
};

export const DeletePending: Story = {
  args: {
    jsonSchema: { cols: taskColumns },
    jsonData: { rows: taskRows },
    rowDelete: { ...defaultRowDelete, isRowDeletePending: true },
  },
  parameters: {
    docs: {
      description: {
        story:
          'While `isRowDeletePending` is true, the Delete and Save buttons in the editor and both buttons in the confirmation dialog are disabled.',
      },
    },
  },
};

export const DeleteError: Story = {
  args: {
    jsonSchema: { cols: taskColumns },
    jsonData: { rows: taskRows },
    rowDelete: {
      ...defaultRowDelete,
      isRowDeleteError: true,
      rowDeleteErrorMsg: 'Could not delete this row. Try again.',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'When `isRowDeleteError` is true, the confirmation dialog stays open and shows `rowDeleteErrorMsg` so the user can retry or cancel.',
      },
    },
  },
};

export const DeleteSuccess: Story = {
  args: {
    jsonSchema: { cols: taskColumns },
    jsonData: { rows: taskRows },
    rowDelete: {
      ...defaultRowDelete,
      isRowDeleteSuccess: true,
      rowDeleteSuccessMsg: 'Row deleted successfully',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'When `isRowDeleteSuccess` is true, the confirmation dialog shows `rowDeleteSuccessMsg` in place of the error message, with a single Close button. Close (or Esc) closes both dialogs and calls `onRowReset` so the parent can reset the delete query.',
      },
    },
  },
};

export const EditError: Story = {
  args: {
    jsonSchema: { cols: taskColumns },
    jsonData: { rows: taskRows },
    rowEdit: {
      ...defaultRowEdit,
      isRowEditError: true,
      rowEditErrorMsg: 'Could not save changes.',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Edit state is independent of delete state: an edit error does not affect the delete dialog.',
      },
    },
  },
};

export const EditSuccess: Story = {
  args: {
    jsonSchema: { cols: taskColumns },
    jsonData: { rows: taskRows },
    rowEdit: {
      ...defaultRowEdit,
      isRowEditSuccess: true,
      rowEditSuccessMsg: 'Changes saved',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'When `isRowEditSuccess` is true, the edit form shows `rowEditSuccessMsg`. Delete state is unaffected.',
      },
    },
  },
};

export const TextInputs: Story = {
  args: {
    jsonSchema: {
      cols: [
        { cellName: 'id', cellText: 'ID', cellType: 'text' },
        { cellName: 'title', cellText: 'Task', cellType: 'text' },
        { cellName: 'owner', cellText: 'Owner', cellType: 'text' },
      ],
    },
    jsonData: {
      rows: [
        { id: 1, title: 'Design', owner: 'Anna' },
        { id: 2, title: 'Development', owner: 'Piotr' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Only `text` columns. Click a cell: every field renders as `type="text"`, prefilled from the row, and `id` is disabled.',
      },
    },
  },
};

export const NumberInputs: Story = {
  args: {
    jsonSchema: {
      cols: [
        { cellName: 'id', cellText: 'ID', cellType: 'text' },
        { cellName: 'hours', cellText: 'Hours', cellType: 'number', thAlign: 'right', tdAlign: 'right' },
        { cellName: 'cost', cellText: 'Cost', cellType: 'number', thAlign: 'right', tdAlign: 'right' },
      ],
    },
    jsonData: {
      rows: [
        { id: 1, hours: 4, cost: 200.5 },
        { id: 2, hours: 12, cost: 600 },
        { id: 3, hours: 0, cost: 0 },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Only `number` columns. Click a cell: fields render as `type="number"` (up/down arrows, letters are rejected). The `0` row should show `0`, not an empty input.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    jsonSchema: { cols: taskColumns },
    jsonData: { rows: taskRows },
    isLoading: true,
    tableLoadingHeight: '500px',
  },
  parameters: {
    docs: {
      description: {
        story:
          'While `isLoading` is true, the headers stay visible and the body shows a single row with `LoaderDots` spanning all columns. Rows are not rendered, so nothing can be clicked or edited until loading finishes.',
      },
    },
  },
};
