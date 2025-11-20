import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { action } from 'storybook/actions';
import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  title: 'Slider/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is a multi-slide slider component that can be used to display multiple items in a carousel format. It supports various properties such as circular navigation, loading states, and more.

You can import the Slider component from the library and use it in your application as follows:
\`\`\`tsx
import { Slider } from 'najwer23morsels/lib/slider';
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

export const SliderCircular: Story = {
  args: {
    isCircular: true,
  },
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
            {slides.map(({ color, label, action }, i) => (
              <div key={i + 100} style={{ background: color, ...slideStyle }} onClick={action}>
                {label}
              </div>
            ))}
          </Slider>
        </div>
      );
    };

    return <LoadingToggle />;
  },
};

export const Slider1Slide: Story = {
  args: {
    isCircular: false,
    slidesConfig: {
      mobile: {
        items: 1,
        slidesToScroll: 1,
      },
      tablet: {
        items: 1,
        slidesToScroll: 1,
      },
      desktop: {
        items: 1,
        slidesToScroll: 1,
      },
    },
  },
  render: (args) => (
    <div style={{ width: 'min(700px,calc(100vw - 50px))', height: '400px' }}>
      <Slider {...args}>
        <div style={{ background: slides[0].color, ...slideStyle }} onClick={slides[0].action}>
          {slides[0].label}
        </div>
      </Slider>
    </div>
  ),
};

export const Slider2Slides: Story = {
  args: {
    isCircular: true,
    slidesConfig: {
      mobile: {
        items: 1,
        slidesToScroll: 1,
      },
      tablet: {
        items: 2,
        slidesToScroll: 2,
      },
      desktop: {
        items: 2,
        slidesToScroll: 2,
      },
    },
  },
  render: (args) => (
    <div style={{ width: 'min(700px,calc(100vw - 50px))', height: '400px' }}>
      <Slider {...args}>
        <div style={{ background: slides[0].color, ...slideStyle }} onClick={slides[0].action}>
          {slides[0].label}
        </div>
        <div style={{ background: slides[1].color, ...slideStyle }} onClick={slides[1].action}>
          {slides[1].label}
        </div>
      </Slider>
    </div>
  ),
};
