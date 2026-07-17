import { TextBox } from '../TextBox';

export type TypographyVariant = 'display' | 'heading' | 'subheading' | 'body' | 'caption';

export type TypographyAppearance = 'light' | 'dark';

type TextBoxLikeProps = {
  tag?: React.ElementType;
  mobileSize: number;
  desktopSize: number;
  lineHeight?: number | string;
  letterSpacing?: React.CSSProperties['letterSpacing'];
  color?: React.CSSProperties['color'];
  colorHover?: React.CSSProperties['color'];
  margin?: React.CSSProperties['margin'];
  fontWeight?: React.CSSProperties['fontWeight'];
  fontWeightHover?: React.CSSProperties['fontWeight'];
  textAlign?: React.CSSProperties['textAlign'];
  textWrap?: React.CSSProperties['textWrap'];
  style?: React.CSSProperties;
};

const VARIANTS: Record<TypographyVariant, Omit<TextBoxLikeProps, 'color'>> = {
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
    letterSpacing: '0',
    fontWeight: 400,
    margin: '10px 0 0',
  },

  caption: {
    tag: 'span',
    mobileSize: 11,
    desktopSize: 12,
    lineHeight: 1,
    letterSpacing: '0.08em',
    fontWeight: 600,
    margin: 0,
    style: {
      textTransform: 'uppercase',
    },
  },
};

const APPEARANCES: Record<TypographyAppearance, Record<TypographyVariant, React.CSSProperties['color']>> = {
  light: {
    display: '#0F1014',
    heading: '#14151A',
    subheading: '#3f4043',
    body: '#26272E',
    caption: '#6B6D76',
  },

  dark: {
    display: '#FFFFFF',
    heading: '#F7F8FA',
    subheading: '#9A9DAA',
    body: '#f7f7f8',
    caption: '#9A9DAA',
  },
};

type TypographyProps = Partial<TextBoxLikeProps> & {
  variant: TypographyVariant;
  appearance?: TypographyAppearance;
  children?: React.ReactNode;
  className?: string;
};

export const Typography = ({ variant, appearance = 'light', style, color, ...overrides }: TypographyProps) => {
  const preset = VARIANTS[variant];

  return (
    <TextBox
      {...preset}
      {...overrides}
      color={color ?? APPEARANCES[appearance][variant]}
      style={{
        ...preset.style,
        ...style,
      }}
    />
  );
};

Typography.displayName = 'Typography';
