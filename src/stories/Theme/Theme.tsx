import { THEMES, ThemeName } from './Theme.const';
import { ThemeSchema } from './Theme.types';
import { getThemeVariables } from './Theme.utils';

interface ThemeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  schema?: ThemeSchema;
  name?: ThemeName;
  style?: React.CSSProperties;
}

export const Theme = ({ children, className, style, schema, name = 'default', ...props }: ThemeProps) => {
  const selectedTheme = schema ?? THEMES[name];

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
