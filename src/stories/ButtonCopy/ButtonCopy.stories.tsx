import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { TextBox } from '../TextBox';
import { ButtonCopy } from '.';

const meta: Meta<typeof ButtonCopy> = {
  title: 'Button/ButtonCopy',
  component: ButtonCopy,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A button that copies text to the clipboard.

It uses the \`copy\` variant by default and switches to the \`success\` variant for 800ms after a successful copy. A visually hidden live region announces "Copied" to screen readers.

\`navigator.clipboard\` requires a secure context (HTTPS or localhost).

\`\`\`tsx
import { ButtonCopy } from 'najwer23morsels/lib/ButtonCopy';
\`\`\`
      `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    textToCopy: { control: 'text' },
    padding: { control: 'text' },
    height: { control: 'text' },
    width: { control: 'text' },
  },
  args: {
    textToCopy: 'Hagagagga',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomLabel: Story = {
  args: {
    textToCopy: 'npm install najwer23morsels',
  },
  render: (args) => (
    <ButtonCopy {...args}>
      <TextBox mobileSize={14} desktopSize={14} fontWeight={600} color="inherit">
        Copy command
      </TextBox>
    </ButtonCopy>
  ),
};

export const CustomSize: Story = {
  args: {
    height: '42px',
    width: '120px',
    padding: '0 12px',
  },
  render: (args) => (
    <ButtonCopy {...args}>
      <TextBox mobileSize={14} desktopSize={14} fontWeight={600} color="inherit">
        Copy
      </TextBox>
    </ButtonCopy>
  ),
};

export const FullWidth: Story = {
  args: {
    height: '42px',
    width: '100%',
    padding: '0 12px',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <ButtonCopy {...args}>
      <TextBox mobileSize={14} desktopSize={14} fontWeight={600} color="inherit">
        Copy to clipboard
      </TextBox>
    </ButtonCopy>
  ),
};

export const CodeSnippet: Story = {
  args: {
    textToCopy: 'npm install najwer23morsels',
  },
  render: (args) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '8px 8px 8px 16px',
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: '12px',
      }}
    >
      <code style={{ fontSize: 14 }}>{args.textToCopy}</code>
      <ButtonCopy {...args} height="32px" padding="0 10px" />
    </div>
  ),
};

export const PasteToTest: Story = {
  args: {
    textToCopy: 'Copied from the ButtonCopy story',
  },
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '320px' }}>
        <ButtonCopy {...args} height="36px" padding="0 12px" />
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Click Copy, then paste here (Ctrl/Cmd + V)"
          style={{ height: 36, padding: '0 10px', boxSizing: 'border-box' }}
        />
      </div>
    );
  },
};
