import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Slider } from '.';
import { useEffect, useState } from 'react';

const meta: Meta<typeof Slider> = {
  title: 'Slider/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is a slider component that allows you to display multiple slides with various properties. It supports circular navigation, loading states, and can handle different numbers of slides.

You can import the Slider component from the library and use it in your application as follows:
\`\`\`tsx
import { Slider } from 'najwer23morsels/lib/Slider';
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
];

const twoSlides = slides.slice(0, 2);
const oneSlide = slides.slice(0, 1);

export const Default: Story = {
  args: {},
  render: (args) => (
    <div style={{ width: 'min(700px,calc(100vw - 50px))', height: '400px' }}>
      <Slider {...args}>
        {slides.map(({ color, label, action }, i) => (
          <div key={i} style={{ background: color, ...slideStyle }} onClick={action}>
            {label}
          </div>
        ))}
      </Slider>
    </div>
  ),
};

export const Slider1Slide: Story = {
  args: {},
  render: (args) => (
    <div style={{ width: 'min(700px,calc(100vw - 50px))', height: '400px' }}>
      <Slider {...args}>
        {oneSlide.map(({ color, label, action }, i) => (
          <div key={i} style={{ background: color, ...slideStyle }} onClick={action}>
            {label}
          </div>
        ))}
      </Slider>
    </div>
  ),
};

export const Slider2Slides: Story = {
  args: {},
  render: (args) => (
    <div style={{ width: 'min(700px,calc(100vw - 50px))', height: '400px' }}>
      <Slider {...args}>
        {twoSlides.map(({ color, label, action }, i) => (
          <div key={i} style={{ background: color, ...slideStyle }} onClick={action}>
            {label}
          </div>
        ))}
      </Slider>
    </div>
  ),
};

export const SliderCircular: Story = {
  args: { isCircular: true },
  render: (args) => (
    <div style={{ width: 'min(700px,calc(100vw - 50px))', height: '400px' }}>
      <Slider {...args}>
        {slides.map(({ color, label, action }, i) => (
          <div key={i} style={{ background: color, ...slideStyle }} onClick={action}>
            {label}
          </div>
        ))}
      </Slider>
    </div>
  ),
};

export const SliderCircular1Slide: Story = {
  args: { isCircular: true },
  render: (args) => (
    <div style={{ width: 'min(700px,calc(100vw - 50px))', height: '400px' }}>
      <Slider {...args}>
        {oneSlide.map(({ color, label, action }, i) => (
          <div key={i} style={{ background: color, ...slideStyle }} onClick={action}>
            {label}
          </div>
        ))}
      </Slider>
    </div>
  ),
};

export const SliderCircular2Slides: Story = {
  args: { isCircular: true },
  render: (args) => (
    <div style={{ width: 'min(700px,calc(100vw - 50px))', height: '400px' }}>
      <Slider {...args}>
        {twoSlides.map(({ color, label, action }, i) => (
          <div key={i} style={{ background: color, ...slideStyle }} onClick={action}>
            {label}
          </div>
        ))}
      </Slider>
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
          <Slider loading={loading}>
            <div style={{ background: 'red', ...slideStyle }} onClick={action('on-click-1')}>
              1
            </div>
            <div style={{ background: 'green', ...slideStyle }} onClick={action('on-click-2')}>
              2
            </div>
          </Slider>
        </div>
      );
    };

    return <LoadingToggle />;
  },
};
