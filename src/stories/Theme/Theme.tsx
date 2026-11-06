import { THEMES, ThemeName } from './Theme.const';
import { ThemeSchema } from './Theme.types';
import { getThemeVariables } from './Theme.utils';

interface ThemeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  themeSchema?: ThemeSchema;
  themeName?: ThemeName;
  style?: React.CSSProperties;
}

export const Theme = ({ children, className, style, themeSchema, themeName = 'default', ...props }: ThemeProps) => {
  const selectedTheme = themeSchema ?? THEMES[themeName];

  return (
    <div
      className={['n23mTheme', className].filter(Boolean).join(' ')}
      {...props}
      style={
        {
          ...getThemeVariables(selectedTheme),
        } as React.CSSProperties
      }
      data-n23m-theme={selectedTheme.name}
    >
      {children}
    </div>
  );
};
