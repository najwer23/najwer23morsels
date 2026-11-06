import { forwardRef } from 'react';
import { TextBox } from '../TextBox';
import type { ThemeTypographyVariant } from '../Theme/Theme.types';
import { TypographyPreset } from './Typography.types';
import { TYPOGRAPHY_VARIANTS } from './Typography.variants';

type TypographyProps = Partial<TypographyPreset> &
  React.HTMLAttributes<HTMLElement> & {
    variant: ThemeTypographyVariant;
    href?: string;
    target?: React.HTMLAttributeAnchorTarget;
    rel?: string;
    className?: string;
  };

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant, style, color, colorHover, ...overrides }, ref) => {
    const preset = TYPOGRAPHY_VARIANTS[variant];
    const themePrefix = `--n23m-components-typography-colors-${variant}`;

    return (
      <TextBox
        {...preset}
        {...overrides}
        ref={ref}
        color={color ?? `var(${themePrefix}-color, inherit)`}
        colorHover={colorHover ?? `var(${themePrefix}-hover, inherit)`}
        style={{ ...preset.style, ...style }}
      />
    );
  },
);

Typography.displayName = 'Typography';
