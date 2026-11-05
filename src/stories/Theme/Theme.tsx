import { THEMES, ThemeName } from './Theme.const';
import { ThemeConfig } from './Theme.types';
import { getThemeVariables } from './Theme.utils';

interface ThemeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  themeConfig?: ThemeConfig;
  themeName?: ThemeName;
  style?: React.CSSProperties;
}

export const Theme = ({ children, className, style, themeConfig, themeName = 'default', ...props }: ThemeProps) => {
  const selectedTheme = themeConfig ?? THEMES[themeName];

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
