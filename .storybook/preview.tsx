import type { Preview } from '@storybook/react-vite';
import { THEMES, Theme } from '../src/stories/Theme';

import themeDocs from './themeDocs';

// @ts-ignore
import './main.css';

const preview: Preview = {
  parameters: {
    docs: {
      theme: themeDocs,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      context: 'body',
      config: {},
      options: {},
    },
    options: {
      storySort: {
        order: [
          'Documentation',
          [
            'README',
            'CHANGELOG',
            'Theme',
            ['Theme Schema', 'Playground', 'CSS Variables', 'Color Palette', 'Contrast checker WCAG', '*'],
            '*',
          ],
          '*',
        ],
      },
    },
  },

  globalTypes: {
    theme: {
      description: 'Application theme',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: Object.entries(THEMES).map(([value, theme]) => ({
          value,
          title: theme.name,
        })),
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: 'default',
  },

  decorators: [
    (Story, context) => (
      <Theme themeName={context.globals.theme as keyof typeof THEMES}>
        <Story />
      </Theme>
    ),
  ],
};

export default preview;
