import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextBox } from '.';

const meta: Meta<typeof TextBox> = {
  title: 'TextBox/TextBox',
  component: TextBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is a TextBox component that can be used to display text with various styles. It supports properties such as color, size, and link functionality. You can use it to create links or display static text.

You can import the TextBox component from the library and use it in your application as follows:
\`\`\`tsx
import { TextBox } from 'najwer23morsels/lib/TextBox';
\`\`\`
      `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const defaultText = `It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.`;

export const Default: Story = {
  args: {
    color: 'grey',
    mobileSize: 20,
    desktopSize: 20,
    children: defaultText,
  },
  render: (args) => (
    <div>
      <TextBox {...args} />
    </div>
  ),
};

export const TextWrapBalance: Story = {
  args: {
    color: 'green',
    colorHover: 'orange',
    mobileSize: 20,
    desktopSize: 20,
    children: defaultText,
    textWrap: 'balance',
  },
  render: (args) => (
    <div>
      <TextBox {...args} />
    </div>
  ),
};

export const Link: Story = {
  args: {
    color: 'green',
    colorHover: 'orange',
    mobileSize: 20,
    desktopSize: 20,
    tag: 'a',
    href: '/ksdjdkdj',
    children: defaultText,
  },
  render: (args) => (
    <div>
      <TextBox {...args} />
    </div>
  ),
};

export const InlineLink: Story = {
  args: {
    color: 'green',
    colorHover: 'orange',
    mobileSize: 20,
    desktopSize: 20,
    tag: 'a',
    href: '/ksdjdkdj',
    children: defaultText,
  },
  render: (args) => (
    <div>
      <TextBox mobileSize={20} desktopSize={20} tag="span">
        {defaultText + ' '}
      </TextBox>
      <TextBox {...args} />
      <TextBox mobileSize={20} desktopSize={20} tag="span">
        {' ' + defaultText}
      </TextBox>
    </div>
  ),
};

export const FluidMobile20Desktop40: Story = {
  args: {
    color: 'red',
    colorHover: 'orange',
    mobileSize: 20,
    desktopSize: 40,
    href: '/ksdjdkdj',
    children: defaultText,
  },
  render: (args) => (
    <div>
      <TextBox {...args} />
    </div>
  ),
};

export const FluidMobile40Desktop20: Story = {
  args: {
    color: 'red',
    colorHover: 'orange',
    mobileSize: 40,
    desktopSize: 20,
    href: '/ksdjdkdj',
    children: defaultText,
  },
  render: (args) => (
    <div>
      <TextBox {...args} />
    </div>
  ),
};

export const Bold: Story = {
  args: {
    color: 'grey',
    mobileSize: 20,
    desktopSize: 20,
    fontWeight: 700,
    children: defaultText,
  },
  render: (args) => (
    <div>
      <TextBox {...args} />
    </div>
  ),
};

export const FontWeightHover: Story = {
  args: {
    color: 'blue',
    colorHover: 'purple',
    mobileSize: 20,
    desktopSize: 20,
    tag: 'a',
    href: '/ksdjdkdj',
    fontWeight: 400,
    fontWeightHover: 700,
    children: defaultText,
  },
  render: (args) => (
    <div>
      <TextBox {...args} />
    </div>
  ),
};

export const CenteredText: Story = {
  args: {
    color: 'grey',
    mobileSize: 20,
    desktopSize: 20,
    textAlign: 'center',
    children: defaultText,
  },
  render: (args) => (
    <div style={{ width: 400 }}>
      <TextBox {...args} />
    </div>
  ),
};

export const RightAlignedText: Story = {
  args: {
    color: 'grey',
    mobileSize: 20,
    desktopSize: 20,
    textAlign: 'right',
    children: defaultText,
  },
  render: (args) => (
    <div style={{ width: 400 }}>
      <TextBox {...args} />
    </div>
  ),
};

export const LooseLineHeight: Story = {
  args: {
    color: 'grey',
    mobileSize: 20,
    desktopSize: 20,
    lineHeight: 2,
    children: defaultText,
  },
  render: (args) => (
    <div style={{ width: 400 }}>
      <TextBox {...args} />
    </div>
  ),
};

export const WithMargin: Story = {
  args: {
    color: 'grey',
    mobileSize: 20,
    desktopSize: 20,
    margin: '40px 0',
    children: defaultText,
  },
  render: (args) => (
    <div style={{ border: '1px dashed #ccc' }}>
      <TextBox {...args} />
    </div>
  ),
};

export const AsHeading: Story = {
  args: {
    color: 'black',
    mobileSize: 28,
    desktopSize: 48,
    tag: 'h1',
    fontWeight: 800,
    textWrap: 'balance',
    children: 'One does not simply walk into Mordor.',
  },
  render: (args) => (
    <div>
      <TextBox {...args} />
    </div>
  ),
};

export const ShortLabel: Story = {
  args: {
    color: 'grey',
    mobileSize: 14,
    desktopSize: 14,
    fontWeight: 600,
    children: 'You shall not pass!',
  },
  render: (args) => (
    <div>
      <TextBox {...args} />
    </div>
  ),
};
