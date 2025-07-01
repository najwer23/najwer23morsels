import styles from './TextBox.module.css';

export type TextBoxTag = 'h1' | 'h2' | 'h3' | 'p' | 'div';

interface TextBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
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
  ...props
}) => {
  const Tag = tag;

  return (
    <Tag
      style={
        {
          '--textbox-fw': fontWeight,
          '--textbox-fwh': fontWeightHover,
          '--textbox-ch': colorHover,
          '--textbox-c': color,
          '--textbox-ms': mobileSize,
          '--textbox-ds': desktopSize,
          '--textbox-lh': lineHeight,
          ...(margin !== undefined && margin !== null ? { '--textbox-m': margin } : {}),
        } as React.CSSProperties
      }
      className={[styles.n23mTextBox, 'MorselsTextBox', className].filter(Boolean).join(' ')}
      {...props}>
      {href && (
        <a className={'MorselsTextBoxLink'} href={href} target={target} rel={rel}>
          {children}
        </a>
      )}
      {!href && children}
    </Tag>
  );
};

TextBox.displayName = 'TextBox';
