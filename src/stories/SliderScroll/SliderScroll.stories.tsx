import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextBox } from '../TextBox';
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

const slideStyle: React.CSSProperties = {
  width: '200px',
  height: '340px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Slide = ({ color, label, width = '200px' }: { color: string; label: string; width?: string }) => (
  <div
    style={{
      ...slideStyle,
      width,
      background: color,
    }}
  >
    <TextBox color="white" mobileSize={60} desktopSize={60}>
      {label}
    </TextBox>
  </div>
);

const SlideLink = ({ color, label, href }: { color: string; label: string; href: string }) => (
  <a
    draggable={false}
    href={href}
    style={{
      ...slideStyle,
      background: color,
      textDecoration: 'none',
    }}
  >
    <TextBox color="white" mobileSize={60} desktopSize={60}>
      {label}
    </TextBox>
  </a>
);

const renderSlides = (differentSizes = false) =>
  slides.map(({ label, color }, index) => (
    <Slide
      key={label}
      color={color}
      label={label}
      width={differentSizes ? `${[180, 220, 260, 300, 320, 240, 200][index]}px` : undefined}
    />
  ));

const renderSlider = (args: Story['args'], children: React.ReactNode) => (
  <div style={{ width: 'min(700px, calc(100vw - 50px))', height: '400px' }}>
    <SliderScroll {...args}>{children}</SliderScroll>
  </div>
);

export const Default: Story = {
  args: {
    gap: '10px',
  },
  render: (args) => renderSlider(args, renderSlides()),
};

export const SliderScrollCircular: Story = {
  args: {
    gap: '10px',
    isCircular: true,
  },
  render: (args) => renderSlider(args, renderSlides()),
};

export const SliderScrollCircularDifferentSizes: Story = {
  args: {
    gap: '10px',
    isCircular: true,
  },
  render: (args) => renderSlider(args, renderSlides(true)),
};

export const SliderScrollCircularDifferentSizesAutoplay: Story = {
  args: {
    gap: '10px',
    isCircular: true,
    autoPlay: true,
    autoPlaySpeed: 0.5,
  },
  render: (args) => renderSlider(args, renderSlides(true)),
};

export const SliderScrollWithLinksAsItem: Story = {
  args: {
    gap: '10px',
  },
  render: (args) =>
    renderSlider(
      args,
      slides.map(({ label, color, href }) => <SlideLink key={label} color={color} label={label} href={href} />),
    ),
};

export const SliderScrollWithImgLinksAsItem: Story = {
  args: {
    gap: '10px',
  },
  render: (args) =>
    renderSlider(
      args,
      Array.from({ length: 20 }, (_, index) => (
        <a
          draggable={false}
          href="/jkg"
          key={index}
          style={{
            display: 'block',
            width: '300px',
            height: '340px',
            flexShrink: 0,
          }}
        >
          <img
            draggable={false}
            src={`https://picsum.photos/seed/slider-${index}/300/340`}
            alt={`Slide ${index + 1}`}
            width={300}
            height={340}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </a>
      )),
    ),
};
