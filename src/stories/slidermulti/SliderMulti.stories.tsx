import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { SliderMulti } from '.';
import { useEffect, useState } from 'react';

const meta: Meta<typeof SliderMulti> = {
  title: 'Slider/SliderMulti',
  component: SliderMulti,
   parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is a multi-slide slider component that can be used to display multiple items in a carousel format. It supports various properties such as circular navigation, loading states, and more.

You can import the SliderMulti component from the library and use it in your application as follows:
\`\`\`tsx
import { SliderMulti } from 'najwer23morsels/lib/SliderMulti';
\`\`\`
      `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const slideStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: '40px',
};

const slides = [
  { color: 'red', label: '1', action: action('on-click-1') },
  { color: 'blue', label: '2', action: action('on-click-2') },
  { color: 'orange', label: '3', action: action('on-click-3') },
  { color: 'green', label: '4', action: action('on-click-4') },
  { color: 'pink', label: '5', action: action('on-click-5') },
];

export const Default: Story = {
  args: {},
  render: (args) => (
    <div style={{ width: 'min(700px,calc(100vw - 50px))', height: '400px' }}>
      <SliderMulti {...args}>
        {slides.map(({ color, label, action }, i) => (
          <div key={i} style={{ background: color, ...slideStyle }} onClick={action}>
            {label}
          </div>
        ))}
      </SliderMulti>
    </div>
  ),
};

export const SliderMultiCircular: Story = {
  args: {
    isCircular: true,
  },
  render: (args) => (
    <div style={{ width: 'min(700px,calc(100vw - 50px))', height: '400px' }}>
      <SliderMulti {...args}>
        {slides.map(({ color, label, action }, i) => (
          <div key={i} style={{ background: color, ...slideStyle }} onClick={action}>
            {label}
          </div>
        ))}
      </SliderMulti>
    </div>
  ),
};

export const SliderLoading: Story = {
  args: {},
  render: () => {
    const LoadingToggle = () => {
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const interval = setInterval(() => {
          setLoading((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
      }, []);

      return (
        <div style={{ width: 'min(700px,calc(100vw - 50px))', height: '400px' }}>
          <SliderMulti loading={loading}>
            {slides.map(({ color, label, action }, i) => (
              <div key={i + 100} style={{ background: color, ...slideStyle }} onClick={action}>
                {label}
              </div>
            ))}
          </SliderMulti>
        </div>
      );
    };

    return <LoadingToggle />;
  },
};
