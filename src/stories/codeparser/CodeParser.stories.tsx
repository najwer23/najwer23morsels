import type { Meta, StoryObj } from '@storybook/react-vite';

import { CodeParser } from '.';

const meta: Meta<typeof CodeParser> = {
  title: 'CodeParser/CodeParser',
  component: CodeParser,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is a CodeParser component that can be used to display code snippets with syntax highlighting. It supports various properties such as language, theme, and more.

You can import the CodeParser component from the library and use it in your application as follows:
\`\`\`tsx
import { CodeParser } from 'najwer23morsels/lib/CodeParser';
\`\`\`
      `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div>
      <CodeParser {...args}>{`@keyframes rounded-mask-reveal {
  from {
    clip-path: inset(10% 10% 10% 10% round 30px);
  }
  to {
    clip-path: inset(0% 0% 0% 0% round 30px);
  }
}

video {
  animation: rounded-mask-reveal linear both;
  animation-timeline: view();
  animation-range: cover 0% cover 50%;
}`}</CodeParser>
    </div>
  ),
};
