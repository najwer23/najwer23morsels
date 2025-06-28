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
          '--fw': fontWeight,
          '--fwh': fontWeightHover,
          '--ch': colorHover,
          '--c': color,
          '--ms': mobileSize,
          '--ds': desktopSize,
          '--lh': lineHeight,
          ...(margin !== undefined && margin !== null ? { '--m': margin } : {}),
        } as React.CSSProperties
      }
      className={[styles.najwer23morselsTextBox, 'MorselsTextBox', className].filter(Boolean).join(' ')}
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
