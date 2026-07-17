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

Each \`variant\` defines the typography scale while \`appearance\`
controls the color palette. Any TextBox prop can still be used
to override the preset.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['display', 'heading', 'subheading', 'body', 'caption'],
    },
    appearance: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    color: {
      control: 'color',
    },
  },
  args: {
    variant: 'body',
    appearance: 'light',
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

export const AllVariantsLight: Story = {
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
    </div>
  ),
};

export const AllVariantsLight2Lines: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 560 }}>
      <Typography variant="display">Pyrtfolio Pyortfolio </Typography>

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

export const AllVariantsDark: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <div
      style={{
        background: '#14151A',
        padding: 32,
        borderRadius: 12,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 560,
        }}
      >
        <Typography variant="display" appearance="dark">
          Portfolio
        </Typography>

        <Typography variant="caption" appearance="dark">
          Software Engineer — Warsaw
        </Typography>

        <Typography variant="heading" appearance="dark">
          Selected work
        </Typography>

        <Typography variant="body" appearance="dark">
          A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
          tightens.
        </Typography>

        <Typography variant="body" appearance="dark">
          A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
          tightens.
        </Typography>

        <Typography variant="subheading" appearance="dark">
          Five things worth your time
        </Typography>

        <Typography variant="body" appearance="dark">
          A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
          tightens.
        </Typography>

        <Typography variant="subheading" appearance="dark">
          Five things worth your time
        </Typography>

        <Typography variant="body" appearance="dark">
          A simulated-annealing solver that cools its way to a near-optimal route, visualized step by step as the path
          tightens.
        </Typography>
      </div>
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

export const AppearanceComparison: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      <div style={{ padding: 24 }}>
        <Typography variant="heading">Light</Typography>
        <Typography variant="body">The quick brown fox jumps over the lazy dog.</Typography>
        <Typography variant="caption">Light appearance</Typography>
      </div>

      <div
        style={{
          background: '#14151A',
          padding: 24,
          borderRadius: 12,
        }}
      >
        <Typography variant="heading" appearance="dark">
          Dark
        </Typography>
        <Typography variant="body" appearance="dark">
          The quick brown fox jumps over the lazy dog.
        </Typography>
        <Typography variant="caption" appearance="dark">
          Dark appearance
        </Typography>
      </div>
    </div>
  ),
};
