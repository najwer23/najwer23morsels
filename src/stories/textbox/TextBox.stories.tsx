import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextBox } from './TextBox';

const meta: Meta<typeof TextBox> = {
  title: 'TextBox/TextBox',
  component: TextBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// import { action } from 'storybook/actions';
// export const Default: Story = {
//   args: {
//     onClick: action('on-click'),
//   },
// };
