import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { action } from 'storybook/actions';
import { TextBox } from '../TextBox';
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

const slideStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const slides = [
  { color: 'red', label: '1', action: action('on-click-1') },
  { color: 'blue', label: '2', action: action('on-click-2') },
  { color: 'orange', label: '3', action: action('on-click-3') },
  { color: 'green', label: '4', action: action('on-click-4') },
  { color: 'pink', label: '5', action: action('on-click-5') },
];

const Slide = ({ color, label, onClick }: { color: string; label: string; onClick?: () => void }) => (
  <div
    style={{
      background: color,
      ...slideStyle,
    }}
    onClick={onClick}
  >
    <TextBox color="white" mobileSize={60} desktopSize={60}>
      {label}
    </TextBox>
  </div>
);

export const Default: Story = {
  args: {},
  render: (args) => (
    <div style={{ width: 'min(700px,calc(100vw - 50px))', height: '400px' }}>
      <Slider {...args}>
        {slides.map(({ color, label, action }) => (
          <Slide key={label} color={color} label={label} onClick={action} />
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
        {slides.map(({ color, label, action }) => (
          <Slide key={label} color={color} label={label} onClick={action} />
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
            {slides.map(({ color, label, action }) => (
              <Slide key={`loading-${label}`} color={color} label={label} onClick={action} />
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
        <Slide color={slides[0].color} label={slides[0].label} onClick={slides[0].action} />
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
        <Slide color={slides[0].color} label={slides[0].label} onClick={slides[0].action} />
        <Slide color={slides[1].color} label={slides[1].label} onClick={slides[1].action} />
        <Slide color={slides[0].color} label={slides[0].label} onClick={slides[0].action} />
        <Slide color={slides[1].color} label={slides[1].label} onClick={slides[1].action} />
      </Slider>
    </div>
  ),
};
