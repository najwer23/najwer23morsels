import type { StoryObj } from '@storybook/react';

import { Carousel as CarouselSnack } from './Carousel';

const meta = {
  title: 'Carousel/Carousel',
  component: CarouselSnack,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is a carousel component that can be used to display a series of images or other content in a scrollable format. It supports various properties such as the number of items to show, the number of items to scroll, and more.

You can import the Carousel component from the library and use it in your application as follows:
\`\`\`tsx
import { Carousel } from 'najwer23morsels/lib/Carousel';
\`\`\`
      `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Carousel: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 15 }, (_, i) => (
          <img draggable="false" key={i} src="https://picsum.photos/500/700" height="700" width="500" alt="" />
        ))}
      </>
    ),
  },
};

export const CarouselStandardSmallerChild: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 20 }, (_, i) => (
          <a draggable="false" href="/jkg" key={i}>
            <img draggable="false" src="https://picsum.photos/300/400" height="400" width="300" alt="" />
          </a>
        ))}
      </>
    ),
  },
};
