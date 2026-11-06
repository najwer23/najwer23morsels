import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './TextBox.module.css';
import { TextBoxOwnProps } from './TextBox.types';

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
