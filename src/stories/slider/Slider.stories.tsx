import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

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
      <div style={{ width: 'min(700px,calc(100vw - 50px)', height: '400px' }}>
        <Slider isCircular>
          <div
            style={{
              background: 'red',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '40px',
            }}
            onClick={action('on-click-1')}>
            1
          </div>
          <div
          onClick={action('on-click-2')}
            style={{
              background: 'blue',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '40px',
            }}>
            2
          </div>
          <div
          onClick={action('on-click-3')}
            style={{
              background: 'orange',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '40px',
            }}>
            3
          </div>
          <div
          onClick={action('on-click-4')}
            style={{
              background: 'green',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '40px',
            }}>
            4
          </div>
        </Slider>
      </div>
    ),
  ],
};
