import type { Meta, StoryObj } from '@storybook/react-vite';

import { Typography } from '.';

const meta: Meta<typeof Typography> = {
  title: 'Typography/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Typography provides semantic text presets built on top of TextBox.

Each \`variant\` defines the typography scale, including its semantic HTML tag,
font size, weight, line height and spacing.

Colors are provided by the active Theme. Any TextBox prop can still be used
to override the preset.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['display', 'heading', 'subheading', 'body', 'caption', 'link'],
    },
    color: {
      control: 'color',
    },
    colorHover: {
      control: 'color',
    },
  },
  args: {
    variant: 'body',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: {
    variant: 'display',
  },
  render: (args) => <Typography {...args}>Portfolio</Typography>,
};

export const Heading: Story = {
  args: {
    variant: 'heading',
  },
  render: (args) => <Typography {...args}>Selected work</Typography>,
};

export const Subheading: Story = {
  args: {
    variant: 'subheading',
  },
  render: (args) => <Typography {...args}>Five things worth your time</Typography>,
};

export const Body: Story = {
  args: {
    variant: 'body',
  },
  render: (args) => (
    <Typography {...args}>
      A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
      tightens.
    </Typography>
  ),
};

export const Caption: Story = {
  args: {
    variant: 'caption',
  },
  render: (args) => <Typography {...args}>Software Engineer — Warsaw</Typography>,
};

export const Link: Story = {
  args: {
    variant: 'link',
    href: '/about',
  },
  render: (args) => <Typography {...args}>Learn more</Typography>,
};

export const AllVariants: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 560 }}>
      <Typography variant="display">Portfolio</Typography>

      <Typography variant="caption">Software Engineer — Warsaw</Typography>

      <Typography variant="heading">Selected work</Typography>

      <Typography variant="body">
        A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
        tightens.
      </Typography>

      <Typography variant="body">
        A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
        tightens.
      </Typography>

      <Typography variant="subheading">Five things worth your time</Typography>

      <Typography variant="body">
        A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
        tightens.
      </Typography>

      <Typography variant="subheading">Five things worth your time</Typography>

      <Typography variant="body">
        A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
        tightens.
      </Typography>

      <Typography variant="heading">Selected work 2</Typography>

      <Typography variant="body">
        A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
        tightens.
      </Typography>

      <Typography variant="body">
        A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
        tightens.
      </Typography>

      <Typography variant="link" href="/about">
        Learn more about this project
      </Typography>
    </div>
  ),
};

export const AllVariants2Lines: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 560 }}>
      <Typography variant="display">Portfolio Portfolio</Typography>

      <Typography variant="caption">
        Software Engineer — Warsaw Software Engineer — Warsaw Software Engineer — Warsaw
      </Typography>

      <Typography variant="heading">Selected work Selected work Selected work Selected work</Typography>

      <Typography variant="body">
        A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
        tightens.
      </Typography>

      <Typography variant="body">
        A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
        tightens.
      </Typography>

      <Typography variant="subheading">
        Five things worth your time. Five things worth your time. Five things worth your time
      </Typography>

      <Typography variant="body">
        A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
        tightens.
      </Typography>

      <Typography variant="subheading">Five things worth your time</Typography>

      <Typography variant="body">
        A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
        tightens.
      </Typography>

      <Typography variant="heading">Selected work 2</Typography>

      <Typography variant="body">
        A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
        tightens.
      </Typography>

      <Typography variant="body">
        A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
        tightens.
      </Typography>
    </div>
  ),
};

export const ColorOverride: Story = {
  args: {
    variant: 'heading',
    color: '#2F4BFF',
  },
  render: (args) => <Typography {...args}>Overriding the preset color</Typography>,
};

export const LinkWithText: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Typography variant="heading">
        Discover more{' '}
        <Typography variant="link" href="/about">
          about this project
        </Typography>
      </Typography>

      <Typography variant="caption">
        Software Engineer — Warsaw{' '}
        <Typography variant="link" href="/about">
          View profile
        </Typography>
      </Typography>

      <Typography variant="body">
        The quick brown fox jumps{' '}
        <Typography variant="link" href="/about">
          over the lazy dog
        </Typography>
        .
      </Typography>
    </div>
  ),
};
