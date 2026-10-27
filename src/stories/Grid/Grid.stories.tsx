import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { TextBox } from '../TextBox';
import { Grid, GridColumnsProps, GridContainerProps, GridFlexProps } from './Grid';

type GridContainerStory = StoryObj<GridContainerProps>;
type GridFlexStory = StoryObj<GridFlexProps>;
type GridColumnsStory = StoryObj<GridColumnsProps>;

const meta: Meta<typeof Grid> = {
  title: 'Grid/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is a grid component that can be used to create responsive layouts. It supports three layouts:

- \`container\`: a centered box with max/min width, padding and margin
- \`flex\`: a flex row/column with justify, align, wrap and gap
- \`columns\`: a responsive column grid driven by \`col\`

Breakpoints for \`columns\`: mobile < 768px, tablet >= 768px, smallDesktop >= 1200px, desktop >= 1600px. A missing breakpoint falls back to the next smaller one.

\`\`\`tsx
import { Grid } from 'najwer23morsels/lib/grid';
\`\`\`
      `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

const testText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const box: React.CSSProperties = {
  border: '1px solid black',
  backgroundColor: '#f0f0f0',
  boxSizing: 'border-box',
  padding: '10px',
};

// toggles every 3s, used by the loading stories
const useBlink = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setLoading((prev) => !prev), 3000);
    return () => clearInterval(interval);
  }, []);
  return loading;
};

/* ------------------------------ container ------------------------------ */

export const GridContainerWidthMax600: GridContainerStory = {
  args: {
    layout: 'container',
    widthMax: '600px',
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

export const GridContainerLoading: GridContainerStory = {
  args: {
    layout: 'container',
    widthMax: '600px',
    padding: '10px',
    minHeight: '402px',
  },
  render: (args) => {
    const loading = useBlink();

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

/* -------------------------------- flex --------------------------------- */

export const GridFlex: GridFlexStory = {
  args: {
    layout: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: { col: '20px', row: '20px' },
    padding: '10px',
  },
  render: (args) => (
    <div style={{ width: '600px', backgroundColor: '#f0f0f0' }}>
      <Grid {...args}>
        {['One', 'Two', 'Three'].map((label) => (
          <div key={label} style={box}>
            <TextBox mobileSize={14} desktopSize={14}>
              {label}
            </TextBox>
          </div>
        ))}
      </Grid>
    </div>
  ),
};

export const GridFlexLoading: GridFlexStory = {
  args: {
    layout: 'flex',
    padding: '10px',
    minHeight: '150px',
  },
  render: (args) => {
    const loading = useBlink();

    return (
      <div style={{ width: '600px', backgroundColor: '#f0f0f0' }}>
        <Grid {...args} loading={loading}>
          <div style={box}>One</div>
          <div style={box}>Two</div>
        </Grid>
      </div>
    );
  },
};

/* ------------------------------- columns ------------------------------- */

export const GridColumns: GridColumnsStory = {
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

export const GridColumnsPartialBreakpoints: GridColumnsStory = {
  args: {
    layout: 'columns',
    gap: { col: '16px', row: '16px' },
    col: { mobile: 1, desktop: 4 },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Only `mobile` and `desktop` are set. Tablet and smallDesktop fall back to `mobile`, so it jumps from 1 to 4 columns at 1600px.',
      },
    },
  },
  render: (args) => (
    <div style={{ padding: '16px', boxSizing: 'border-box' }}>
      <Grid {...args}>
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} style={box}>
            <TextBox mobileSize={14} desktopSize={14}>
              Item {i + 1}
            </TextBox>
          </div>
        ))}
      </Grid>
    </div>
  ),
};

export const GridColumnsLoading: GridColumnsStory = {
  args: {
    layout: 'columns',
    gap: { col: '20px', row: '20px' },
    col: { mobile: 1, tablet: 2, smallDesktop: 3, desktop: 3 },
    minHeight: '260px',
    widthMax: '600px',
  },
  parameters: {
    docs: {
      description: {
        story: 'The Loader fills the full width of the grid, not just one column.',
      },
    },
  },
  render: (args) => {
    const loading = useBlink();

    return (
      <div style={{ width: '100vw' }}>
        <Grid {...args} loading={loading}>
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} style={box}>
              <TextBox mobileSize={14} desktopSize={14}>
                Item {i + 1}
              </TextBox>
            </div>
          ))}
        </Grid>
      </div>
    );
  },
};

export const GridColumnsAsList: GridColumnsStory = {
  args: {
    layout: 'columns',
    as: 'ul',
    gap: { col: '16px', row: '16px' },
    col: { mobile: 1, tablet: 2, smallDesktop: 3, desktop: 3 },
    style: { listStyle: 'none' },
    padding: '0',
    margin: '0',
  },
  parameters: {
    docs: {
      description: {
        story: 'Rendered as `<ul>` with `<li>` children. The column width applies to every direct child.',
      },
    },
  },
  render: (args) => (
    <div style={{ width: '600px' }}>
      <Grid {...args}>
        {Array.from({ length: 6 }, (_, i) => (
          <li key={i} style={box}>
            <TextBox mobileSize={14} desktopSize={14}>
              List item {i + 1}
            </TextBox>
          </li>
        ))}
      </Grid>
    </div>
  ),
};

/* ------------------------------- nested -------------------------------- */

export const GridContainerWithColumns: GridColumnsStory = {
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
      <Grid layout="container" widthMax={'400px'} padding="0 10px 0 10px">
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
