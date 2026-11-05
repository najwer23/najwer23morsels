export const getThemeVariables = <T extends object>(theme: T, prefix = '--n23m'): React.CSSProperties => {
  const cssVariables: Record<string, string> = {};

  const parseTheme = (themeValue: object, variablePath: string[] = []) => {
    Object.entries(themeValue).forEach(([key, value]) => {
      const currentPath = [...variablePath, key];

      if (typeof value === 'object' && value !== null) {
        parseTheme(value, currentPath);
        return;
      }

      if (typeof value === 'string') {
        cssVariables[`${prefix}-${currentPath.join('-')}`] = value;
      }
    });
  };

  parseTheme(theme);

  return cssVariables as React.CSSProperties;
};
