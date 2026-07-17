import { TextBox, type TextBoxOwnProps } from '../TextBox';

export type TypographyVariant = 'display' | 'heading' | 'subheading' | 'body' | 'caption' | 'link';

export type TypographyAppearance = 'light' | 'dark';

type TypographyPreset = Omit<TextBoxOwnProps, 'children'> & {
  tag?: React.ElementType;
  letterSpacing?: React.CSSProperties['letterSpacing'];
};

const VARIANTS: Record<TypographyVariant, TypographyPreset> = {
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
};

type TypographyColor = {
  color: React.CSSProperties['color'];
  hover?: React.CSSProperties['color'];
};

const APPEARANCES: Record<TypographyAppearance, Record<TypographyVariant, TypographyColor>> = {
  light: {
    display: {
      color: '#0F1014',
    },

    heading: {
      color: '#14151A',
    },

    subheading: {
      color: '#3f4043',
    },

    body: {
      color: '#26272E',
    },

    caption: {
      color: '#6B6D76',
    },

    link: {
      color: 'orangered',
      hover: 'orangered',
    },
  },

  dark: {
    display: {
      color: '#FFFFFF',
    },

    heading: {
      color: '#F7F8FA',
    },

    subheading: {
      color: '#9A9DAA',
    },

    body: {
      color: '#F7F7F8',
    },

    caption: {
      color: '#9A9DAA',
    },

    link: {
      color: 'orangered',
      hover: 'orangered',
    },
  },
};

type TypographyProps = Partial<TypographyPreset> & {
  variant: TypographyVariant;
  appearance?: TypographyAppearance;

  children?: React.ReactNode;
  className?: string;

  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export const Typography = ({
  variant,
  appearance = 'light',
  style,
  color,
  colorHover,
  ...overrides
}: TypographyProps) => {
  const preset = VARIANTS[variant];
  const colors = APPEARANCES[appearance][variant];

  return (
    <TextBox
      {...preset}
      {...overrides}
      color={color ?? colors.color}
      colorHover={colorHover ?? colors.hover}
      style={{
        ...preset.style,
        ...style,
      }}
    />
  );
};

Typography.displayName = 'Typography';
