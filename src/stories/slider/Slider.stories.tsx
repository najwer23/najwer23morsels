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

const slideStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: '40px',
};

export const Default: Story = {
  decorators: [
    () => (
      <div style={{ width: 'min(700px,calc(100vw - 50px)', height: '400px' }}>
        <Slider>
          <div
            style={{
              background: 'red',
              ...slideStyle,
            }}
            onClick={action('on-click-1')}>
            1
          </div>
          <div
            onClick={action('on-click-2')}
            style={{
              background: 'blue',
              ...slideStyle,
            }}>
            2
          </div>
          <div
            onClick={action('on-click-3')}
            style={{
              background: 'orange',
              ...slideStyle,
            }}>
            3
          </div>
          <div
            onClick={action('on-click-4')}
            style={{
              background: 'green',
              ...slideStyle,
            }}>
            4
          </div>
        </Slider>
      </div>
    ),
  ],
};

export const SliderCircular: Story = {
  decorators: [
    () => (
      <div style={{ width: 'min(700px,calc(100vw - 50px)', height: '400px' }}>
        <Slider isCircular>
          <div
            style={{
              background: 'red',
              ...slideStyle,
            }}
            onClick={action('on-click-1')}>
            1
          </div>
          <div
            onClick={action('on-click-2')}
            style={{
              background: 'blue',
              ...slideStyle,
            }}>
            2
          </div>
          <div
            onClick={action('on-click-3')}
            style={{
              background: 'orange',
              ...slideStyle,
            }}>
            3
          </div>
          <div
            onClick={action('on-click-4')}
            style={{
              background: 'green',
              ...slideStyle,
            }}>
            4
          </div>
        </Slider>
      </div>
    ),
  ],
};

export const Slider2Slides: Story = {
  decorators: [
    () => (
      <div style={{ width: 'min(700px,calc(100vw - 50px)', height: '400px' }}>
        <Slider>
          <div
            style={{
              background: 'red',
              ...slideStyle,
            }}
            onClick={action('on-click-1')}>
            1
          </div>
          <div
            onClick={action('on-click-2')}
            style={{
              background: 'blue',
              ...slideStyle,
            }}>
            2
          </div>
        </Slider>
      </div>
    ),
  ],
};

export const SliderCircular2Slides: Story = {
  decorators: [
    () => (
      <div style={{ width: 'min(700px,calc(100vw - 50px)', height: '400px' }}>
        <Slider isCircular>
          <div
            style={{
              background: 'red',
              ...slideStyle,
            }}
            onClick={action('on-click-1')}>
            1
          </div>
          <div
            onClick={action('on-click-2')}
            style={{
              background: 'blue',
              ...slideStyle,
            }}>
            2
          </div>
        </Slider>
      </div>
    ),
  ],
};

export const SliderCircular1Slide: Story = {
  decorators: [
    () => (
      <div style={{ width: 'min(700px,calc(100vw - 50px)', height: '400px' }}>
        <Slider isCircular>
          <div
            style={{
              background: 'red',
              ...slideStyle,
            }}
            onClick={action('on-click-1')}>
            1
          </div>
        </Slider>
      </div>
    ),
  ],
};

export const Slider1Slide: Story = {
  decorators: [
    () => (
      <div style={{ width: 'min(700px,calc(100vw - 50px)', height: '400px' }}>
        <Slider>
          <div
            style={{
              background: 'red',
              ...slideStyle,
            }}
            onClick={action('on-click-1')}>
            1
          </div>
        </Slider>
      </div>
    ),
  ],
};

export const SldierArrowsStyle: Story = {
  decorators: [
    () => (
      <div style={{ width: 'min(700px,calc(100vw - 50px)', height: '400px' }}>
        <Slider arrowsColorBackground='yellow' arrowsColor='blue' arrowsColorBorder='blue'>
          <div
            style={{
              background: 'red',
              ...slideStyle,
            }}
            onClick={action('on-click-1')}>
            1
          </div>
          <div
            onClick={action('on-click-2')}
            style={{
              background: 'blue',
              ...slideStyle,
            }}>
            2
          </div>
          <div
            onClick={action('on-click-3')}
            style={{
              background: 'orange',
              ...slideStyle,
            }}>
            3
          </div>
          <div
            onClick={action('on-click-4')}
            style={{
              background: 'green',
              ...slideStyle,
            }}>
            4
          </div>
        </Slider>
      </div>
    ),
  ],
};