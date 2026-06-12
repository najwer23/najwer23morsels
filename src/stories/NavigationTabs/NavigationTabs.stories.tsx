import type { Meta, StoryObj } from '@storybook/react-vite';
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
Test Test

\`\`\`tsx
import { NavigationTabs } from 'najwer23morsels/lib/NavigationTabs';
\`\`\`
      `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuTopLeftColumn: (
      <TextBox desktopSize={20} mobileSize={20} fontWeight={500} tag="a" href="/" onClick={(e) => e.preventDefault()}>
        Gym
      </TextBox>
    ),
    menuTopRightColumn: (
      <Grid layout="flex" justifyContent="flex-end">
        <TextBox
          tag="a"
          href="/login"
          desktopSize={20}
          mobileSize={20}
          fontWeight={500}
          onClick={(e) => e.preventDefault()}
        >
          Login
        </TextBox>
      </Grid>
    ),
    menuMobile: (
      <>
        {[
          { href: '/home', label: 'Home' },
          { href: '/login', label: 'Login' },
        ].map(({ href, label }) => (
          <TextBox
            key={label}
            tag="a"
            href={href}
            desktopSize={30}
            mobileSize={30}
            fontWeight={400}
            onClick={(e) => e.preventDefault()}
          >
            {label}
          </TextBox>
        ))}
      </>
    ),
    menuBottomTabs: (
      <>
        {[
          { href: '/in/dashboard', label: 'Dashboard' },
          { href: '/in/push-ups', label: 'Push Ups' },
          { href: '/in/squats', label: 'Squats' },
          { href: '/in/sit-ups', label: 'Sit Ups' },
          { href: '/in/pull-ups', label: 'Pull Ups' },
        ].map(({ href, label }) => (
          <div key={label}>
            <TextBox
              tag="a"
              href={href}
              onClick={(e) => {
                e.preventDefault();
              }}
              desktopSize={18}
              mobileSize={18}
              fontWeight={500}
            >
              {label}
            </TextBox>
          </div>
        ))}
      </>
    ),
  },
  render: (args) => (
    <div style={{ width: '100vw', height: '400px' }}>
      <NavigationTabs {...args}></NavigationTabs>
    </div>
  ),
};

export const NavigationTabsOnlyTop: Story = {
  args: {
    menuTopLeftColumn: (
      <TextBox desktopSize={20} mobileSize={20} fontWeight={500} tag="a" href="/">
        Gym
      </TextBox>
    ),
    menuTopRightColumn: (
      <Grid layout="flex" justifyContent="flex-end">
        <TextBox tag="a" href="/login" desktopSize={20} mobileSize={20} fontWeight={500}>
          Login
        </TextBox>
      </Grid>
    ),
    menuMobile: (
      <>
        {[
          { href: '/home', label: 'Home' },
          { href: '/login', label: 'Login' },
        ].map(({ href, label }) => (
          <TextBox
            key={label}
            tag="a"
            href={href}
            desktopSize={30}
            mobileSize={30}
            fontWeight={400}
            onClick={(e) => e.preventDefault()}
          >
            {label}
          </TextBox>
        ))}
      </>
    ),
    menuOnlyTop: true,
  },
  render: (args) => (
    <div style={{ width: '100vw', height: '400px' }}>
      <NavigationTabs {...args}></NavigationTabs>
    </div>
  ),
};
