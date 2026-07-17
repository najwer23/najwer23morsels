import * as React from 'react';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './TextBox.module.css';

type TextBoxOwnProps = {
  children?: React.ReactNode;
  mobileSize: number;
  desktopSize: number;
  lineHeight?: number | string;
  color?: React.CSSProperties['color'];
  colorHover?: React.CSSProperties['color'];
  margin?: React.CSSProperties['margin'];
  fontWeight?: React.CSSProperties['fontWeight'];
  fontWeightHover?: React.CSSProperties['fontWeight'];
  textAlign?: React.CSSProperties['textAlign'];
  textWrap?: React.CSSProperties['textWrap'];
  style?: React.CSSProperties;
};

type TextBoxProps<T extends React.ElementType = 'div'> = TextBoxOwnProps & {
  tag?: T;
} & Omit<React.ComponentPropsWithRef<T>, keyof TextBoxOwnProps | 'tag'>;

export const TextBox = <T extends React.ElementType = 'div'>({
  tag,
  children,
  className,
  mobileSize,
  desktopSize,
  lineHeight,
  color,
  colorHover,
  margin,
  fontWeight,
  fontWeightHover,
  textAlign,
  textWrap,
  style,
  ...props
}: TextBoxProps<T>) => {
  const Component = tag ?? 'div';
  const isLink = Component === 'a';

  return (
    <Component
      style={{
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
      }}
      className={[styles.n23mTextBox, 'n23mTextBox', isLink && `${styles.n23mTextBoxLink} n23mTextBoxLink`, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Component>
  );
};

TextBox.displayName = 'TextBox';
