import type { Meta, StoryObj } from '@storybook/react-vite';

import { Masonry } from '.';

const meta: Meta<typeof Masonry> = {
  title: 'grid/Masonry',
  component: Masonry,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible Masonry layout component for React that arranges children in columns with configurable gaps and responsive column counts.

Supports dynamic content heights and adapts column count based on viewport size breakpoints.

\`\`\`tsx
import { Masonry } from 'najwer23morsels/lib/masonry';
\`\`\`
      `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const items = Array.from({ length: 20 }).map((_, index) => (
  <div
    key={index}
    style={{
      background: '#' + Math.floor(Math.random() * 16777215).toString(16),
    }}
  >
    <>
      <div>{index}</div>
      {' Text text text'.repeat(Math.floor(Math.random() * 160))}
    </>
  </div>
));

export const Default: Story = {
  args: {
    gap: {
      col: '20px',
      row: '20px',
    },
    col: {
      smallDesktop: 3,
      desktop: 3,
      mobile: 1,
      tablet: 2,
    },
    children: items,
  },
  render: (args) => (
    <div>
      <Masonry {...args} />
    </div>
  ),
};
