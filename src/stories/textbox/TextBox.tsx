import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './TextBox.module.css';

export type TextBoxTag = 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span' | 'a' | 'label';

interface TextBoxProps extends React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement | HTMLLabelElement> {
  children?: React.ReactNode;
  tag?: TextBoxTag;
  mobileSize: number;
  desktopSize: number;
  lineHeight?: number | string;
  target?: string;
  rel?: string;
  href?: string;
  color?: string;
  colorHover?: string;
  margin?: string | 0;
  fontWeight?: number;
  fontWeightHover?: number;
  textAlign?: string;
  textWrap?: string;
  style?: React.CSSProperties;
  htmlFor?: string;
}

export const TextBox: React.FC<TextBoxProps> = ({
  tag = 'div',
  children,
  className,
  target,
  rel,
  mobileSize,
  desktopSize,
  lineHeight,
  color,
  href,
  colorHover,
  margin,
  fontWeight,
  fontWeightHover,
  textAlign,
  textWrap,
  style,
  htmlFor,
  ...props
}) => {
  let Tag = tag;

  if (href) {
    Tag = 'a';
  }

  return (
    <Tag
      style={
        {
          ...getCssVariableStyle({
            '--textbox-fw': fontWeight,
            '--textbox-fwh': fontWeightHover,
            '--textbox-ch': colorHover,
            '--textbox-c': color,
            '--textbox-ms': mobileSize,
            '--textbox-ds': desktopSize,
            '--textbox-lh': lineHeight,
            '--textbox-a': textAlign,
            '--textbox-w': textWrap,
            '--textbox-m': margin,
          }),
          ...style,
        } as React.CSSProperties
      }
      className={[
        styles.n23mTextBox,
        'n23mTextBox',
        `${href ? `${styles.n23mTextBoxLink} n23mTextBoxLink` : ''}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...(href ? { href, target, rel } : {})}
      {...(htmlFor ? { htmlFor } : {})}
      {...props}
    >
      {children}
    </Tag>
  );
};

TextBox.displayName = 'TextBox';
