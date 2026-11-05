import { forwardRef } from 'react';
import { TextBox, type TextBoxOwnProps } from '../TextBox';
import { ThemeTypographyVariant } from '../Theme/Theme.types';

type TypographyPreset = Omit<TextBoxOwnProps, 'children'> & {
  tag?: React.ElementType;
  letterSpacing?: React.CSSProperties['letterSpacing'];
};

const VARIANTS: Record<ThemeTypographyVariant, TypographyPreset> = {
  display: {
    tag: 'h1',
    mobileSize: 42,
    desktopSize: 76,
    lineHeight: 1.05,
    fontWeight: 700,
    textWrap: 'balance',
    margin: 'clamp(40px, 8vw, 60px) 0 10px',
  },

  heading: {
    tag: 'h2',
    mobileSize: 30,
    desktopSize: 52,
    fontWeight: 650,
    lineHeight: 1.1,
    textWrap: 'balance',
    margin: 'clamp(30px, 8vw, 40px) 0 5px',
  },

  subheading: {
    tag: 'h3',
    mobileSize: 20,
    desktopSize: 26,
    lineHeight: 1.25,
    fontWeight: 500,
    margin: '30px 0 0',
  },

  body: {
    tag: 'p',
    mobileSize: 16,
    desktopSize: 17,
    fontWeight: 400,
    margin: '10px 0 0',
  },

  caption: {
    tag: 'span',
    mobileSize: 11,
    desktopSize: 12,
    lineHeight: 1,
    fontWeight: 600,
    margin: 0,
    style: {
      textTransform: 'uppercase',
    },
  },

  link: {
    tag: 'a',
    mobileSize: 'inherit',
    desktopSize: 'inherit',
    lineHeight: 'inherit',
    letterSpacing: 'inherit',
    fontWeight: 'inherit',
    margin: 0,
  },

  validatorFormError: {
    tag: 'p',
    mobileSize: 12,
    desktopSize: 12,
    fontWeight: 400,
    margin: '15px 0 10px 0',
  },

  validatorFormSuccess: {
    tag: 'p',
    mobileSize: 12,
    desktopSize: 12,
    fontWeight: 400,
    margin: '15px 0 10px 0',
  },

  validatorInputError: {
    tag: 'p',
    mobileSize: 12,
    desktopSize: 12,
    fontWeight: 400,
    margin: '2px 0 2px',
    lineHeight: '14px',
  },

  loaderForm: {
    mobileSize: 12,
    desktopSize: 12,
    fontWeight: 400,
    margin: '15px 0 10px',
  },

  validatorDialogError: {
    tag: 'p',
    mobileSize: 16,
    desktopSize: 16,
    fontWeight: 400,
    margin: '10px 0 0 0',
  },

  validatorDialogSuccess: {
    tag: 'p',
    mobileSize: 16,
    desktopSize: 16,
    fontWeight: 400,
    margin: '10px 0 0 0',
  },

  loaderPage: {
    mobileSize: 16,
    desktopSize: 16,
    lineHeight: 1.2,
    fontWeight: 400,
    margin: 0,
  },
};

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
    const preset = VARIANTS[variant];
    const themePrefix = `--n23m-components-typography-colors-${variant}`;

    return (
      <TextBox
        {...preset}
        {...overrides}
        ref={ref}
        color={color ?? `var(${themePrefix}-color, inherit)`}
        colorHover={colorHover ?? `var(${themePrefix}-hover, inherit)`}
        style={{
          ...preset.style,
          ...style,
        }}
      />
    );
  },
);

Typography.displayName = 'Typography';
