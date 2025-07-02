import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextBox } from '../textbox';
import { Grid } from './Grid';
import { useEffect, useState } from 'react';

const meta: Meta<typeof Grid> = {
  title: 'Grid/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is a grid component that can be used to create responsive layouts. It supports various properties such as layout type, column configuration, gap, padding, and more. You can use it to create both container-based and column-based layouts.

You can import the Grid component from the library and use it in your application as follows:
\`\`\`tsx
import { Grid } from 'najwer23morsels/lib/Grid';
\`\`\`
      `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const testText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export const GridContainerWidthMax600: Story = {
  args: {
    layout: 'container',
    widthMax: 600,
    gap: { col: '20px', row: '20px' },
    padding: '10px',
  },
  render: (args) => (
    <div style={{ width: '100vw', backgroundColor: '#f0f0f0' }}>
      <Grid {...args}>
        <div style={{ border: '1px solid black', backgroundColor: '#f0f0f0' }}>
          <TextBox mobileSize={12} desktopSize={12}>
            Padding: 10px; max-width: 600px
          </TextBox>
        </div>
      </Grid>
    </div>
  ),
};

export const GridContainerLoading: Story = {
  args: {
    layout: 'container',
    widthMax: 600,
    padding: '10px',
    minHeight: 400,
  },
  render: (args) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setLoading((prev) => !prev);
      }, 3000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div style={{ width: '100vw', backgroundColor: '#f0f0f0' }}>
        <Grid {...args} loading={loading}>
          <div style={{ minHeight: '400px', backgroundColor: '#f0f0f0', border: '1px solid black' }}>
            <TextBox mobileSize={12} desktopSize={12}>
              max-width: 600px
            </TextBox>
            <TextBox mobileSize={12} desktopSize={12}>
              Padding: 10px; minHeight: 400px
            </TextBox>
          </div>
        </Grid>
      </div>
    );
  },
};

export const GridColumns: Story = {
  args: {
    layout: 'columns',
    gap: { col: '20px', row: '20px' },
    col: {
      smallDesktop: 3,
      desktop: 3,
      mobile: 1,
      tablet: 2,
    },
  },
  render: (args) => (
    <div style={{ width: '600px' }}>
      <Grid {...args}>
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i}>
            <TextBox mobileSize={16} desktopSize={16}>
              {testText}
            </TextBox>
          </div>
        ))}
      </Grid>
    </div>
  ),
};

export const GridContainerWithColumns: Story = {
  args: {
    layout: 'columns',
    gap: { col: '20px', row: '20px' },
    col: {
      smallDesktop: 2,
      desktop: 2,
      mobile: 1,
      tablet: 2,
    },
  },
  render: (args) => (
    <div style={{ width: '100vw' }}>
      <Grid layout="container" widthMax={400} padding="0 10px 0 10px">
        <Grid {...args}>
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i}>
              <TextBox mobileSize={16} desktopSize={16}>
                {testText}
              </TextBox>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  ),
};
