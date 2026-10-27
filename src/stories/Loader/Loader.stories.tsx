import type { Meta, StoryObj } from '@storybook/react-vite';

import { Loader } from '.';

const meta: Meta<typeof Loader> = {
  title: 'Loader/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is a loader component that can be used to indicate loading states in your application.

- \`minHeight\`: height of the loader (it is applied as \`height\`). Without it, the loader fills the height of its parent.
- \`textPosition\`: \`center\` (default) or \`topLeft\`, useful when the loader is very tall.
- \`loaderColor\`: color of the dots, text and dotted border.
- \`text\`, \`mobileSize\`, \`desktopSize\`: label and its font sizes.

You can import the Loader component from the library and use it in your application as follows:
\`\`\`tsx
import { Loader } from 'najwer23morsels/lib/Loader';
\`\`\`
      `,
      },
    },
  },
  argTypes: {
    textPosition: {
      control: 'inline-radio',
      options: ['center', 'topLeft'],
    },
    loaderColor: { control: 'color' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const frame = (height?: string): React.CSSProperties => ({
  width: 'min(700px, calc(100vw - 50px))',
  height,
});

export const Default: Story = {
  args: {
    loaderColor: 'black',
    minHeight: '400px',
  },
  render: (args) => (
    <div style={frame()}>
      <Loader {...args} />
    </div>
  ),
};

export const TopLeft: Story = {
  args: {
    minHeight: '400px',
    textPosition: 'topLeft',
  },
  parameters: {
    docs: {
      description: {
        story: 'The text sits in the top left corner, so it stays visible on a very tall loader.',
      },
    },
  },
  render: (args) => (
    <div style={frame()}>
      <Loader {...args} />
    </div>
  ),
};

export const CenterVsTopLeft: Story = {
  args: {
    minHeight: '300px',
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Both positions side by side on the same height.',
      },
    },
  },
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        width: 'min(900px, calc(100vw - 50px))',
      }}
    >
      <Loader {...args} textPosition="center" text="center" />
      <Loader {...args} textPosition="topLeft" text="topLeft" />
    </div>
  ),
};

export const CustomTextAndColor: Story = {
  args: {
    loaderColor: '#0a7d3b',
    text: 'Fetching your orders',
    minHeight: '200px',
  },
  render: (args) => (
    <div style={frame()}>
      <Loader {...args} />
    </div>
  ),
};

export const TextSizes: Story = {
  args: {
    minHeight: '160px',
    text: 'Loading',
    mobileSize: 24,
    desktopSize: 32,
  },
  parameters: {
    docs: {
      description: {
        story: '`mobileSize` and `desktopSize` control the font size of the text and dots.',
      },
    },
  },
  render: (args) => (
    <div style={frame()}>
      <Loader {...args} />
    </div>
  ),
};

export const Compact: Story = {
  args: {
    minHeight: '56px',
    text: 'Saving',
    mobileSize: 14,
    desktopSize: 14,
  },
  parameters: {
    docs: {
      description: {
        story: 'A small inline loader, for example inside a card or a form row.',
      },
    },
  },
  render: (args) => (
    <div style={{ width: '240px' }}>
      <Loader {...args} />
    </div>
  ),
};

export const FillsParent: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Without `minHeight` the loader uses `height: 100%`, so it fills the parent. The parent here is 250px tall.',
      },
    },
  },
  render: (args) => (
    <div style={frame('250px')}>
      <Loader {...args} />
    </div>
  ),
};

export const Accessible: Story = {
  args: {
    minHeight: '200px',
    text: 'Loading results',
    role: 'status',
    'aria-live': 'polite',
    'aria-busy': true,
  },
  parameters: {
    docs: {
      description: {
        story:
          '`role`, `aria-*` and other HTML attributes are passed to the root element, so screen readers can announce the loader.',
      },
    },
  },
  render: (args) => (
    <div style={frame()}>
      <Loader {...args} />
    </div>
  ),
};
