import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Grid } from '../Grid';
import { TextBox } from '../TextBox';
import { NavigationTabs } from '.';

const meta: Meta<typeof NavigationTabs> = {
  title: 'Navigation/NavigationTabs',
  component: NavigationTabs,
  parameters: {
    docs: {
      description: {
        component: `
Responsive navigation component with a top bar, optional bottom tabs, and a mobile menu.

Below 768px the right column and the bottom tabs are hidden, and a fixed **Menu** button opens a full-screen menu
(only when \`menuMobile\` is provided).

\`\`\`tsx
import { NavigationTabs } from 'najwer23morsels/lib/NavigationTabs';
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
    menuBottomTabs: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const preventDefault = (e: React.MouseEvent) => e.preventDefault();

const Logo = ({ label = 'Gym' }: { label?: string }) => (
  <Grid layout="flex" justifyContent="flex-start" alignItems="center" minHeight={'100%'}>
    <TextBox desktopSize={20} mobileSize={20} fontWeight={500} tag="a" href="/" onClick={preventDefault}>
      {label}
    </TextBox>
  </Grid>
);

const TopRightLinks = ({ items = ['Login'] }: { items?: string[] }) => (
  <Grid layout="flex" justifyContent="flex-end" alignItems="center" minHeight={'100%'} gap={{ col: '20px', row: '0' }}>
    {items.map((label) => (
      <TextBox
        key={label}
        tag="a"
        href={`/${label.toLowerCase()}`}
        desktopSize={20}
        mobileSize={20}
        fontWeight={500}
        onClick={preventDefault}
      >
        {label}
      </TextBox>
    ))}
  </Grid>
);

const MobileLinks = ({ items = ['Home', 'Login'] }: { items?: string[] }) => (
  <>
    {items.map((label) => (
      <TextBox
        key={label}
        tag="a"
        href={`/${label.toLowerCase().replace(/\s+/g, '-')}`}
        desktopSize={30}
        mobileSize={30}
        fontWeight={400}
        onClick={preventDefault}
      >
        {label}
      </TextBox>
    ))}
  </>
);

const BottomTabs = ({ items = ['Dashboard', 'Push Ups', 'Squats', 'Sit Ups', 'Pull Ups'] }: { items?: string[] }) => (
  <>
    {items.map((label) => (
      <div key={label}>
        <TextBox
          tag="a"
          href={`/in/${label.toLowerCase().replace(/\s+/g, '-')}`}
          onClick={preventDefault}
          desktopSize={18}
          mobileSize={18}
          fontWeight={500}
        >
          {label}
        </TextBox>
      </div>
    ))}
  </>
);

const PageContent = ({ repeat = 1000 }: { repeat?: number }) => (
  <div style={{ padding: 20 }}>{'Page content. '.repeat(repeat)}</div>
);

const defaultArgs = {
  menuTopLeftColumn: <Logo />,
  menuTopRightColumn: <TopRightLinks />,
  menuMobile: <MobileLinks />,
  menuBottomTabs: <BottomTabs />,
};

const isolatedDocs = { docs: { story: { inline: false, iframeHeight: 500 } } };

export const Default: Story = {
  args: defaultArgs,
  render: (args) => (
    <div style={{ width: '100vw', height: '400px' }}>
      <NavigationTabs {...args} />
    </div>
  ),
};

export const NavigationTabsOnlyTop: Story = {
  args: {
    ...defaultArgs,
    menuBottomTabs: undefined,
    menuOnlyTop: true,
  },
  render: (args) => (
    <div style={{ width: '100vw', height: '400px' }}>
      <NavigationTabs {...args} />
      <PageContent />
    </div>
  ),
};

export const WithoutMobileMenu: Story = {
  args: {
    ...defaultArgs,
    menuMobile: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Without `menuMobile` there is no Menu button, and the right column stays visible on small screens. Resize the viewport below 768px to check.',
      },
    },
  },
};

export const ManyTopLinks: Story = {
  args: {
    ...defaultArgs,
    menuTopRightColumn: <TopRightLinks items={['Pricing', 'Docs', 'Blog', 'Contact', 'Login']} />,
  },
};

export const ManyBottomTabs: Story = {
  args: {
    ...defaultArgs,
    menuBottomTabs: (
      <BottomTabs
        items={Array.from(
          { length: 16 },
          (_, i) => ['Dashboard', 'Push Ups', 'Squats', 'Sit Ups'][i % 4] + ` ${i + 1}`,
        )}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'The tabs wrap onto several rows (row gap 20px) and stay centered.',
      },
    },
  },
};

export const LongLabels: Story = {
  args: {
    ...defaultArgs,
    menuTopLeftColumn: <Logo label="A very long brand name that should not break the layout" />,
    menuBottomTabs: (
      <BottomTabs items={['Extremely long tab label number one', 'Another extremely long tab label', 'Short']} />
    ),
  },
};

export const CustomTopColumns: Story = {
  args: {
    ...defaultArgs,
    menuTopLeftColumn: (
      <Grid
        layout="flex"
        justifyContent="flex-start"
        alignItems="center"
        minHeight={'100%'}
        gap={{ col: '12px', row: '0' }}
      >
        <div style={{ width: 32, height: 32, borderRadius: 8, background: 'orangered' }} />
        <TextBox desktopSize={20} mobileSize={20} fontWeight={700} tag="span">
          Gym
        </TextBox>
      </Grid>
    ),
    menuTopRightColumn: (
      <Grid
        layout="flex"
        justifyContent="flex-end"
        alignItems="center"
        minHeight={'100%'}
        gap={{ col: '16px', row: '0' }}
      >
        <TextBox tag="a" href="/login" desktopSize={18} mobileSize={18} fontWeight={500} onClick={preventDefault}>
          Login
        </TextBox>
        <button
          type="button"
          style={{ padding: '8px 16px', borderRadius: 6, border: 0, background: 'orangered', color: 'white' }}
        >
          Sign up
        </button>
      </Grid>
    ),
  },
};

export const NarrowContainers: Story = {
  args: {
    ...defaultArgs,
    widthMainContainer: '800px',
    widthInnerContainer: '600px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom `widthMainContainer` (800px) and `widthInnerContainer` (600px).',
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    ...defaultArgs,
    widthMainContainer: '100%',
    widthInnerContainer: '100%',
  },
  parameters: {
    docs: {
      description: {
        story: 'Both containers use 100%, as `NavigationDashboard` does.',
      },
    },
  },
};

export const WideContainers: Story = {
  args: {
    ...defaultArgs,
    widthMainContainer: '2000px',
    widthInnerContainer: '1800px',
  },
};

export const CustomClassAndStyle: Story = {
  args: {
    ...defaultArgs,
    className: 'custom-nav',
    style: { background: '#fafafa', borderBottom: '1px solid #ddd' },
    'data-testid': 'navigation-tabs',
  } as Story['args'],
};

export const WithLongPage: Story = {
  args: defaultArgs,
  render: (args) => (
    <div style={{ width: '100vw' }}>
      <NavigationTabs {...args} />
      <PageContent repeat={3000} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The navigation scrolls away with the page. Below 768px the Menu button stays fixed on screen.',
      },
    },
  },
};

export const Mobile: Story = {
  args: defaultArgs,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  parameters: {
    ...isolatedDocs,
    docs: {
      ...isolatedDocs.docs,
      description: {
        story: 'Below 768px the right column and bottom tabs are hidden, and the fixed Menu button is shown.',
      },
    },
  },
};

export const Tablet: Story = {
  args: defaultArgs,
  globals: { viewport: { value: 'tablet', isRotated: false } },
  parameters: isolatedDocs,
};

export const MobileOnlyTop: Story = {
  args: { ...defaultArgs, menuBottomTabs: undefined, menuOnlyTop: true },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  parameters: isolatedDocs,
};

export const MobileWithoutMenu: Story = {
  args: { ...defaultArgs, menuMobile: undefined },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  parameters: {
    ...isolatedDocs,
    docs: {
      ...isolatedDocs.docs,
      description: { story: 'No `menuMobile`: no Menu button, and the right column remains visible.' },
    },
  },
};

export const MobileLongMenu: Story = {
  args: {
    ...defaultArgs,
    menuMobile: <MobileLinks items={Array.from({ length: 30 }, (_, i) => `Section ${i + 1}`)} />,
  },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  parameters: {
    ...isolatedDocs,
    docs: {
      ...isolatedDocs.docs,
      description: {
        story:
          'Open the menu: the content is taller than the screen and scrolls inside the menu, not the page behind it.',
      },
    },
  },
};

export const MobileLongPage: Story = {
  args: defaultArgs,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  parameters: isolatedDocs,
  render: (args) => (
    <div style={{ width: '100%' }}>
      <NavigationTabs {...args} />
      <PageContent repeat={3000} />
    </div>
  ),
};

export const OpenAndCloseMobileMenu: Story = {
  args: defaultArgs,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  parameters: {
    ...isolatedDocs,
    docs: {
      ...isolatedDocs.docs,
      description: {
        story: 'Opens the mobile menu, then closes it by clicking a link. Checked by the play function.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Menu' });
    const link = canvas.getByRole('link', { name: 'Home' });

    await expect(link).not.toBeVisible();

    await userEvent.click(button);

    await waitFor(() => expect(link).toBeVisible(), { timeout: 2000 });
    await expect(document.body).toHaveStyle({ overflow: 'hidden' });

    await userEvent.click(link);
    await waitFor(() => expect(link).not.toBeVisible(), { timeout: 2000 });
    await waitFor(() => expect(document.body).not.toHaveStyle({ overflow: 'hidden' }));
  },
};

export const ToggleMobileMenuWithButton: Story = {
  args: defaultArgs,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  parameters: isolatedDocs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Menu' });
    const link = canvas.getByRole('link', { name: 'Login' });

    await userEvent.click(button);
    await waitFor(() => expect(link).toBeVisible(), { timeout: 2000 });

    await userEvent.click(button);
    await waitFor(() => expect(link).not.toBeVisible(), { timeout: 2000 });
  },
};

export const NoMenuButtonWithoutMobileMenu: Story = {
  args: { ...defaultArgs, menuMobile: undefined },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  parameters: isolatedDocs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('button', { name: 'Menu' })).toBeNull();
  },
};

export const OnlyTopHidesBottomTabs: Story = {
  args: { ...defaultArgs, menuOnlyTop: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('link', { name: 'Dashboard' })).toBeNull();
  },
};

export const DesktopShowsBottomTabs: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('link', { name: 'Dashboard' })).toBeVisible();
    await expect(canvas.queryByRole('button', { name: 'Menu' })).toBeNull();
  },
};
