import type { Meta, StoryObj } from '@storybook/react-vite';

import { CodeParser } from '.';

const meta: Meta<typeof CodeParser> = {
  title: 'CodeParser/CodeParser',
  component: CodeParser,
  parameters: {
    layout: 'centered',
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
