export type TextBoxOwnProps = {
  children?: React.ReactNode;
  mobileSize: number | 'inherit';
  desktopSize: number | 'inherit';
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
