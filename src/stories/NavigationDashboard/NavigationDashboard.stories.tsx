import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Grid } from '../Grid';
import { TextBox } from '../TextBox';
import { NavigationDashboard } from '.';

const meta: Meta<typeof NavigationDashboard> = {
  title: 'Navigation/NavigationDashboard',
  component: NavigationDashboard,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A dashboard layout with a sticky, resizable, collapsible sidebar.

Drag the divider to resize the sidebar, or click it to toggle the sidebar.
Below 768px the sidebar is hidden and the header shows a floating menu button.

\`\`\`tsx
import { NavigationDashboard } from 'najwer23morsels/lib/NavigationDashboard';
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    menuTopLeftColumn: { control: false },
    menuTopRightColumn: { control: false },
    menuMobile: { control: false },
    outlet: { control: false },
    aside: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/* ---------- helpers ---------- */

const NAV_ITEMS = ['Overview', 'Analytics', 'Reports', 'Users', 'Settings'];

const NavigationLinks = ({ items = NAV_ITEMS }: { items?: string[] }) => (
  <nav aria-label="Dashboard navigation" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    {items.map((item, index) => (
      <a
        key={item}
        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
        style={{
          display: 'block',
          padding: '10px 12px',
          borderRadius: 6,
          background: index === 0 ? '#e8edff' : 'transparent',
          color: index === 0 ? '#263fa8' : 'inherit',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {item}
      </a>
    ))}
  </nav>
);

const STATS: Array<[string, string]> = [
  ['Total users', '2,450'],
  ['Active sessions', '186'],
  ['Reports', '38'],
  ['Revenue', '$12,480'],
  ['Conversion', '3.4%'],
  ['Bounce rate', '41%'],
  ['Avg. session', '4m 12s'],
  ['Open tickets', '17'],
];

const MainContent = ({
  title = 'Dashboard overview',
  cards = STATS.length,
  minHeight = 600,
}: {
  title?: string;
  cards?: number;
  minHeight?: number;
}) => (
  <main style={{ minHeight, width: '100%' }}>
    <h1 style={{ marginTop: 0 }}>{title}</h1>
    <p>Drag the divider to resize the sidebar, or click it to collapse and reopen the sidebar.</p>

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 24 }}>
      {Array.from({ length: cards }, (_, index) => {
        const [label, value] = STATS[index % STATS.length];

        return (
          <section
            key={index}
            style={{ minWidth: 200, flex: '1 1 200px', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}
          >
            <p style={{ margin: '0 0 8px', color: '#666' }}>{label}</p>
            <strong style={{ fontSize: 24 }}>{value}</strong>
          </section>
        );
      })}
    </div>
  </main>
);

const WideTable = () => (
  <table style={{ borderCollapse: 'collapse', minWidth: 1800 }}>
    <thead>
      <tr>
        {Array.from({ length: 12 }, (_, i) => (
          <th
            key={i}
            style={{ border: '1px solid #ddd', padding: '8px 16px', textAlign: 'left', background: '#fafafa' }}
          >
            Column {i + 1}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {Array.from({ length: 15 }, (_, row) => (
        <tr key={row}>
          {Array.from({ length: 12 }, (_, col) => (
            <td key={col} style={{ border: '1px solid #ddd', padding: '8px 16px', whiteSpace: 'nowrap' }}>
              Row {row + 1} / Cell {col + 1}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const defaultArgs = {
  menuTopLeftColumn: (
    <Grid layout="flex" justifyContent="flex-start" alignItems="center" minHeight={'100%'}>
      <TextBox
        tag="a"
        href="https://najwer23.github.io/hol/"
        desktopSize={20}
        mobileSize={20}
        fontWeight={500}
        rel="noreferrer"
        target="_blank"
      >
        Link
      </TextBox>
    </Grid>
  ),
  menuTopRightColumn: (
    <Grid layout="flex" justifyContent="flex-end" alignItems="center" minHeight={'100%'}>
      <TextBox
        tag="a"
        href="https://najwer23.github.io/hol/"
        desktopSize={16}
        mobileSize={16}
        fontWeight={500}
        rel="noreferrer"
        target="_blank"
      >
        hola
      </TextBox>
    </Grid>
  ),
  menuMobile: <NavigationLinks />,
  outlet: <MainContent />,
  aside: <NavigationLinks />,
};

/* ---------- basic ---------- */

export const Default: Story = {
  args: defaultArgs,
};

export const CustomContent: Story = {
  args: {
    ...defaultArgs,
    aside: (
      <div>
        <h3 style={{ marginTop: 0 }}>Workspace</h3>
        <NavigationLinks />
        <hr style={{ margin: '24px 0' }} />
        <p style={{ color: '#666', fontSize: 13 }}>Workspace: Production</p>
      </div>
    ),
    outlet: <MainContent title="Analytics" />,
  },
};

export const MinimalSidebar: Story = {
  args: {
    ...defaultArgs,
    aside: (
      <div>
        <h3 style={{ marginTop: 0 }}>Menu</h3>
        <p>Small sidebar content.</p>
      </div>
    ),
    outlet: <MainContent title="Minimal sidebar content" cards={2} minHeight={300} />,
  },
};

export const EmptySidebar: Story = {
  args: {
    ...defaultArgs,
    aside: null,
    outlet: <MainContent title="Empty sidebar" />,
  },
};

/* ---------- scrolling ---------- */

export const LongSidebar: Story = {
  args: {
    ...defaultArgs,
    aside: (
      <div>
        <h3 style={{ marginTop: 0 }}>Navigation</h3>
        <NavigationLinks items={Array.from({ length: 40 }, (_, i) => `Section ${i + 1}`)} />
      </div>
    ),
    outlet: <MainContent title="Scrollable sidebar" />,
  },
  parameters: {
    docs: {
      description: {
        story: 'The sidebar is taller than the viewport and scrolls on its own, without scrolling the page.',
      },
    },
  },
};

export const LongPage: Story = {
  args: {
    ...defaultArgs,
    outlet: <MainContent title="Long page" cards={80} minHeight={3000} />,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Scroll the page. The header scrolls away, the sidebar sticks and grows to full viewport height, and the divider stays centered on screen.',
      },
    },
  },
};

export const LongSidebarAndLongPage: Story = {
  args: {
    ...defaultArgs,
    aside: <NavigationLinks items={Array.from({ length: 40 }, (_, i) => `Section ${i + 1}`)} />,
    outlet: <MainContent title="Both scroll" cards={80} minHeight={3000} />,
  },
};

/* ---------- overflow ---------- */

export const WideContent: Story = {
  args: {
    ...defaultArgs,
    outlet: (
      <main style={{ width: '100%', minHeight: 600 }}>
        <h1 style={{ marginTop: 0 }}>Wide content</h1>
        <p>
          The striped block is 2400px wide. It should scroll inside the outlet, with no page-level horizontal scroll.
        </p>
        <div
          style={{
            width: 2400,
            height: 300,
            background: 'repeating-linear-gradient(90deg, #f0f0f0 0 100px, #fff 100px 200px)',
            border: '1px solid #ddd',
          }}
        />
      </main>
    ),
  },
};

export const WideTableContent: Story = {
  args: {
    ...defaultArgs,
    outlet: (
      <main style={{ width: '100%', minHeight: 600 }}>
        <h1 style={{ marginTop: 0 }}>Wide table</h1>
        <WideTable />
      </main>
    ),
  },
};

export const LongUnbrokenText: Story = {
  args: {
    ...defaultArgs,
    outlet: (
      <main style={{ width: '100%', minHeight: 300 }}>
        <h1 style={{ marginTop: 0 }}>Long unbroken text</h1>
        <p style={{ whiteSpace: 'nowrap' }}>{'Unbreakable '.repeat(80)}</p>
        <pre style={{ background: '#f6f6f6', padding: 16 }}>
          {'const veryLongLine = '.concat('"x".repeat(300)'.repeat(10))}
        </pre>
      </main>
    ),
  },
};

/* ---------- responsive ---------- */

// Storybook 9+ syntax. On Storybook 8 use: parameters: { viewport: { defaultViewport: 'mobile1' } }
export const Mobile: Story = {
  args: defaultArgs,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  parameters: {
    docs: {
      description: {
        story: 'Below 768px the sidebar and divider are hidden and the floating Menu button opens the mobile menu.',
      },
    },
  },
};

export const Tablet: Story = {
  args: defaultArgs,
  globals: { viewport: { value: 'tablet', isRotated: false } },
};

export const MobileLongPage: Story = {
  args: {
    ...defaultArgs,
    outlet: <MainContent title="Mobile long page" cards={60} minHeight={3000} />,
  },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  parameters: {
    docs: {
      description: {
        story: 'Scroll the page: the Menu button should stay fixed on screen.',
      },
    },
  },
};

/* ---------- interaction ---------- */

export const ToggleSidebar: Story = {
  args: defaultArgs,
  parameters: {
    docs: {
      description: {
        story: 'Click the divider to collapse and reopen the sidebar. The play function checks it automatically.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'Overview' });
    const toggle = canvas.getByRole('button', { name: '|' });

    await expect(link).toBeVisible();

    await userEvent.click(toggle);
    await waitFor(() => expect(link).not.toBeVisible(), { timeout: 2000 });

    await userEvent.click(toggle);
    await waitFor(() => expect(link).toBeVisible(), { timeout: 2000 });
  },
};

export const WideContentNoPageScroll: Story = {
  args: WideContent.args,
  parameters: {
    docs: {
      description: {
        story: 'Asserts that wide content does not create horizontal scroll on the page.',
      },
    },
  },
  play: async () => {
    const doc = document.documentElement;
    await expect(doc.scrollWidth).toBeLessThanOrEqual(doc.clientWidth);
  },
};
