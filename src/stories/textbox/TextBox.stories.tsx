import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextBox } from '.';

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

export const Link: Story = {
  args: {
    color: 'green',
    colorHover: 'orange',
    mobileSize: 20,
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
