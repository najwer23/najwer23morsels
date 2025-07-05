import type { Meta, StoryObj } from '@storybook/react-vite';
import { SliderScroll } from './SliderScroll';

const meta: Meta<typeof SliderScroll> = {
  title: 'Slider/SliderScroll',
  component: SliderScroll,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is a SliderScroll component that can be used to display a series of images or other content in a scrollable format. It supports various properties such as the number of items to show, the number of items to scroll, and more.

You can import the SliderScroll component from the library and use it in your application as follows:
\`\`\`tsx
import { SliderScroll } from 'najwer23morsels/lib/SliderScroll';
\`\`\`
      `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const slides = [
  { color: 'red', label: '1', href: '/here1' },
  { color: 'blue', label: '2', href: '/here2' },
  { color: 'orange', label: '3', href: '/here3' },
  { color: 'green', label: '4', href: '/here4' },
  { color: 'pink', label: '5', href: '/here5' },
  { color: 'purple', label: '6', href: '/here6' },
  { color: 'orangered', label: '7', href: '/here7' },
];

export const Default: Story = {
  args: {
    gap: '10px',
  },
  render: (args) => (
    <div style={{ width: 'min(700px,calc(100vw - 50px))', height: '400px' }}>
      <SliderScroll {...args}>
        {slides.map(({ label }, i) => (
          <div
            key={i}
            style={{
              width: '200px',
              height: '340px',
              background: slides[i].color,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '40px',
            }}>
            {label}
          </div>
        ))}
      </SliderScroll>
    </div>
  ),
};

export const SliderScrollWithLinksAsItem: Story = {
  args: {
    gap: '10px',
  },
  render: (args) => (
    <div style={{ width: 'min(700px,calc(100vw - 50px))', height: '400px' }}>
      <SliderScroll {...args}>
        {slides.map(({ label, href }, i) => (
          <a
            draggable="false"
            href={href}
            key={i}
            style={{
              width: '200px',
              height: '340px',
              background: slides[i].color,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '40px',
            }}>
            {label}
          </a>
        ))}
      </SliderScroll>
    </div>
  ),
};

export const SliderScrollWithImgLinksAsItem: Story = {
  args: {
    gap: '10px',
  },
  render: (args) => (
    <div style={{ width: 'min(700px,calc(100vw - 50px))', height: '400px' }}>
      <SliderScroll {...args}>
        {Array.from({ length: 20 }, (_, i) => (
          <a
            draggable="false"
            href="/jkg"
            key={i}
            style={{
              width: '300px',
              height: '340px',
            }}>
            <img
              draggable="false"
              src="https://picsum.photos/300/340"
              alt=""
              width="300px"
              height="340px"
              style={{ height: '100%', width: 'auto', display: 'block' }}
            />
          </a>
        ))}
      </SliderScroll>
    </div>
  ),
};
