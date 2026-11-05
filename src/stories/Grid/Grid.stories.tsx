import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { TextBox } from '../TextBox';
import { Grid } from './Grid';
import { GridColumnsProps, GridContainerProps, GridFlexProps, GridSplitProps } from './Grid.types';

type GridContainerStory = StoryObj<GridContainerProps>;
type GridFlexStory = StoryObj<GridFlexProps>;
type GridColumnsStory = StoryObj<GridColumnsProps>;
type GridSplitStory = StoryObj<GridSplitProps>;

const meta: Meta<typeof Grid> = {
  title: 'Grid/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
This is a grid component that can be used to create responsive layouts. It supports four layouts:

- \`container\`: a centered box with max/min width, padding and margin
- \`flex\`: a flex row/column with justify, align, wrap and gap
- \`columns\`: a responsive column grid driven by \`col\` (equal columns)
- \`split\`: a responsive grid driven by \`split\` (custom track widths per breakpoint, e.g. fixed + fluid)

Breakpoints for \`columns\` and \`split\`: mobile < 768px, tablet >= 768px, smallDesktop >= 1200px, desktop >= 1600px. A missing breakpoint falls back to the next smaller one.

\`split\` accepts a single track (\`'1fr'\` = stacked) or a \`[first, second]\` tuple per breakpoint. Any CSS track size works: \`400px\`, \`1fr\`, \`30%\`, \`minmax(0, 2fr)\`.

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

/* -------------------------------- split -------------------------------- */

// Children of a split grid should use margin={0} and widthMax="100%",
// otherwise the Grid defaults (margin: auto, max-width: 1920px) stop them filling their track.
const SplitChild = ({ label, text }: { label: string; text?: string }) => (
  <Grid layout="container" widthMax="100%" margin={0} padding="0">
    <div style={box}>
      <TextBox mobileSize={14} desktopSize={14}>
        {label}
      </TextBox>
      {text && (
        <TextBox mobileSize={12} desktopSize={12}>
          {text}
        </TextBox>
      )}
    </div>
  </Grid>
);

export const GridSplitFixedAndFluid: GridSplitStory = {
  args: {
    layout: 'split',
    widthMax: '100%',
    gap: { col: '20px', row: '20px' },
    split: {
      mobile: '1fr',
      tablet: ['400px', '1fr'],
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Stacked below 768px. From 768px up: a fixed 400px column next to a fluid one. Resize the viewport to see the switch.',
      },
    },
  },
  render: (args) => (
    <div style={{ padding: '16px', boxSizing: 'border-box' }}>
      <Grid {...args}>
        <SplitChild label="400px (fixed)" />
        <SplitChild label="1fr (fluid)" text={testText} />
      </Grid>
    </div>
  ),
};

export const GridSplitDifferentWidthPerBreakpoint: GridSplitStory = {
  args: {
    layout: 'split',
    widthMax: '100%',
    gap: { col: '20px', row: '20px' },
    split: {
      mobile: '1fr',
      tablet: ['240px', '1fr'],
      smallDesktop: ['320px', '1fr'],
      desktop: ['minmax(0, 3fr)', 'minmax(0, 7fr)'],
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'tablet: 240px + 1fr, smallDesktop: 320px + 1fr, desktop: 30% / 70% (as `fr` so the gap does not cause overflow).',
      },
    },
  },
  render: (args) => (
    <div style={{ padding: '16px', boxSizing: 'border-box' }}>
      <Grid {...args}>
        <SplitChild label="Left" text={testText} />
        <SplitChild label="Right" text={testText} />
      </Grid>
    </div>
  ),
};

export const GridSplitPartialBreakpoints: GridSplitStory = {
  args: {
    layout: 'split',
    widthMax: '100%',
    gap: { col: '16px', row: '16px' },
    split: { mobile: '1fr', smallDesktop: ['1fr', '2fr'] },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Only `mobile` and `smallDesktop` are set. Tablet falls back to `mobile` (stacked), then it becomes 1fr / 2fr at 1200px.',
      },
    },
  },
  render: (args) => (
    <div style={{ padding: '16px', boxSizing: 'border-box' }}>
      <Grid {...args}>
        <SplitChild label="1fr" />
        <SplitChild label="2fr" />
      </Grid>
    </div>
  ),
};

export const GridSplitAlignStart: GridSplitStory = {
  args: {
    layout: 'split',
    widthMax: '100%',
    alignItems: 'start',
    gap: { col: '20px', row: '20px' },
    split: { mobile: '1fr', tablet: ['300px', '1fr'] },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Default `alignItems` is `stretch` (equal heights). Here `alignItems="start"` keeps each column at its natural height.',
      },
    },
  },
  render: (args) => (
    <div style={{ padding: '16px', boxSizing: 'border-box' }}>
      <Grid {...args}>
        <SplitChild label="Short" />
        <SplitChild label="Long" text={testText + ' ' + testText} />
      </Grid>
    </div>
  ),
};

export const GridSplitLoading: GridSplitStory = {
  args: {
    layout: 'split',
    widthMax: '100%',
    gap: { col: '20px', row: '20px' },
    split: { mobile: '1fr', tablet: ['300px', '1fr'] },
    minHeight: '100px',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'The Loader spans both columns, not just the first track.',
      },
    },
  },
  render: (args) => {
    const loading = useBlink();

    return (
      <div style={{ padding: '16px', boxSizing: 'border-box' }}>
        <Grid {...args} loading={loading}>
          <SplitChild label="Left" />
          <SplitChild label="Right" />
        </Grid>
      </div>
    );
  },
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

export const GridContainerWithSplit: GridSplitStory = {
  args: {
    layout: 'split',
    widthMax: '100%',
    gap: { col: '20px', row: '20px' },
    split: { mobile: '1fr', tablet: ['200px', '1fr'] },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'A split grid nested in a centered container with a max width of 900px.',
      },
    },
  },
  render: (args) => (
    <div style={{ width: '100%' }}>
      <Grid layout="container" widthMax="900px" padding="0 10px">
        <Grid {...args}>
          <SplitChild label="Sidebar (200px)" />
          <SplitChild label="Content (1fr)" text={testText} />
        </Grid>
      </Grid>
    </div>
  ),
};
