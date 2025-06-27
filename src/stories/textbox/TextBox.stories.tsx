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

export const Default: Story = {
  decorators: [
    () => (
      <div>
        <TextBox color="grey" mobileSize={20} desktopSize={20}>
          It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your
          feet, there's no knowing where you might be swept off to.
        </TextBox>
      </div>
    ),
  ],
};

export const Link: Story = {
  decorators: [
    () => (
      <div>
        <TextBox color="green" colorHover="orange" mobileSize={20} desktopSize={20} href="/ksdjdkdj">
          It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your
          feet, there's no knowing where you might be swept off to.
        </TextBox>
      </div>
    ),
  ],
};

export const FluidMobile20Desktop40: Story = {
  decorators: [
    () => (
      <div>
        <TextBox color="red" colorHover="orange" mobileSize={20} desktopSize={40} href="/ksdjdkdj">
          It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your
          feet, there's no knowing where you might be swept off to.
        </TextBox>
      </div>
    ),
  ],
};

export const FluidMobile40Desktop20: Story = {
  decorators: [
    () => (
      <div>
        <TextBox color={'red'} colorHover={'orange'} mobileSize={40} desktopSize={20} href="/ksdjdkdj">
          It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your
          feet, there's no knowing where you might be swept off to.
        </TextBox>
      </div>
    ),
  ],
};
