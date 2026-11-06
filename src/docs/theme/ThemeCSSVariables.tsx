import { Source } from '@storybook/addon-docs/blocks';
import { getThemeVariables } from '../../stories/Theme/Theme.utils';

export const ThemeCSSVariables = ({ theme }: { theme: object }) => {
  const vars = Object.entries(getThemeVariables(theme) as Record<string, string>).filter(
    ([name]) => name !== '--n23m-name',
  );

  const css = `:root {\n${vars.map(([name, value]) => `  ${name}: ${value};`).join('\n')}\n}`;

  return <Source language="css" code={css} />;
};
