import { TextBoxOwnProps } from '../TextBox/TextBox.types';

export type TypographyPreset = Omit<TextBoxOwnProps, 'children'> & {
  tag?: React.ElementType;
  letterSpacing?: React.CSSProperties['letterSpacing'];
};
