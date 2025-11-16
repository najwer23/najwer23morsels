import type { Meta, StoryObj } from '@storybook/react-vite';

import { Picture } from '.';

const meta: Meta<typeof Picture> = {
  title: 'Picture/Picture',
  component: Picture,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Picture component renders an image with support for aspect ratio control and responsive content. It accepts a source URL, alternative text, and an aspect ratio to maintain consistent image dimensions. 

You can import the Picture component from the library and use it in your application as follows:
\`\`\`tsx
import { Picture } from 'najwer23morsels/lib/picture';
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
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4,
  },
  render: (args) => (
    <div>
      <Picture {...args}>hello world!</Picture>
    </div>
  ),
};

export const PictureBorder: Story = {
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4,
    border: true,
    loading: 'eager',
  },
  render: (args) => (
    <div style={{ width: '300px', height: '400px' }}>
      <Picture {...args}>hello world!</Picture>
    </div>
  ),
};

export const PictureFigcaption: Story = {
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4,
    border: true,
    loading: 'eager',
    figcaption: 'what a view!',
    figcaptionColor: 'red',
  },
  render: (args) => (
    <div style={{ width: '300px', height: '400px' }}>
      <Picture {...args}>hello world!</Picture>
    </div>
  ),
};
