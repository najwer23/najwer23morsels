import type { Preview } from '@storybook/react';
import './tokens.css';
import { withConsole } from '@storybook/addon-console';

export const decorators = [(Story: any, context: any) => withConsole()(Story)(context)];

const preview: Preview = {
  decorators,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
