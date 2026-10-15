import type { Meta, StoryObj } from '@storybook/react-vite';
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

const NavigationLinks = () => (
  <nav
    aria-label="Dashboard navigation"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    }}
  >
    {['Overview', 'Analytics', 'Reports', 'Users', 'Settings'].map((item, index) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        style={{
          display: 'block',
          padding: '10px 12px',
          borderRadius: 6,
          background: index === 0 ? '#e8edff' : 'transparent',
          color: index === 0 ? '#263fa8' : 'inherit',
          textDecoration: 'none',
        }}
      >
        {item}
      </a>
    ))}
  </nav>
);

const MainContent = ({ title = 'Dashboard overview' }: { title?: string }) => (
  <main style={{ padding: 24, minHeight: 600 }}>
    <h1 style={{ marginTop: 0 }}>{title}</h1>
    <p>Drag the divider to resize the sidebar or click it to collapse and reopen the sidebar.</p>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 16,
        marginTop: 24,
      }}
    >
      {[
        ['Total users', '2,450'],
        ['Active sessions', '186'],
        ['Reports', '38'],
      ].map(([label, value]) => (
        <section
          key={label}
          style={{
            padding: 20,
            border: '1px solid #ddd',
            borderRadius: 8,
          }}
        >
          <p style={{ margin: '0 0 8px', color: '#666' }}>{label}</p>
          <strong style={{ fontSize: 24 }}>{value}</strong>
        </section>
      ))}
    </div>
  </main>
);

const defaultArgs = {
  menuTopLeftColumn: <strong>My Dashboard</strong>,
  menuTopRightColumn: (
    <Grid layout="flex" justifyContent="flex-end">
      <TextBox
        tag="a"
        href="https://najwer23.github.io/resume/"
        desktopSize={20}
        mobileSize={20}
        fontWeight={500}
        rel="noreferrer"
        target="_blank"
      >
        Résumé
      </TextBox>
    </Grid>
  ),
  menuMobile: <span>Menu</span>,
  outlet: <MainContent />,
  aside: <NavigationLinks />,
};

export const Default: Story = {
  args: defaultArgs,
};

export const CustomContent: Story = {
  args: {
    ...defaultArgs,
    menuTopLeftColumn: <strong>Analytics Platform</strong>,
    menuTopRightColumn: <span>Jane Smith · Admin</span>,
    menuMobile: <span>Open navigation</span>,
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

export const LongSidebar: Story = {
  args: {
    ...defaultArgs,
    aside: (
      <div>
        <h3 style={{ marginTop: 0 }}>Navigation</h3>
        {Array.from({ length: 30 }, (_, index) => (
          <a
            key={index}
            href={`#section-${index + 1}`}
            style={{
              display: 'block',
              padding: '10px 0',
              color: 'inherit',
            }}
          >
            Section {index + 1}
          </a>
        ))}
      </div>
    ),
    outlet: <MainContent title="Scrollable sidebar" />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests vertical scrolling when sidebar navigation exceeds the viewport height.',
      },
    },
  },
};

export const WideContent: Story = {
  args: {
    ...defaultArgs,
    outlet: (
      <main style={{ padding: 24, minWidth: 1000, minHeight: 600 }}>
        <h1>Wide dashboard</h1>
        <p>Tests the sidebar beside a main content area wider than the available viewport.</p>
        <div
          style={{
            height: 300,
            background: 'repeating-linear-gradient(90deg, #f0f0f0 0 100px, #fff 100px 200px)',
            border: '1px solid #ddd',
          }}
        />
      </main>
    ),
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
    outlet: <MainContent title="Minimal sidebar content" />,
  },
};

export const EmptySidebar: Story = {
  args: {
    ...defaultArgs,
    aside: null,
    outlet: <MainContent title="Empty sidebar" />,
  },
};
