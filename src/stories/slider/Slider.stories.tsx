import type { Meta, StoryObj } from '@storybook/react-vite';

import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  title: 'Slider/Slider',
  component: Slider,
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
      <div style={{width: "min(700px,calc(100vw - 50px)", height: "400px"}}>
        <Slider isCircular>
          <div style={{background: "red", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "40px"}}>1</div>
          <div style={{background: "blue", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "40px"}}>2</div>
          <div style={{background: "orange", display: "flex", justifyContent: "center", alignItems: "center" , color: "white", fontSize: "40px"}}>3</div>
          <div style={{background: "green", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "40px"}}>4</div>
        </Slider>
      </div>
    ),
  ],
};
