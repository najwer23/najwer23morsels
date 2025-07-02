import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: true },
    },
  ],
};
export default config;
