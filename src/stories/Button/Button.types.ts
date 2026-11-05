import { ThemeButtonVariant } from '../Theme/Theme.types';

export type ButtonVariant = ThemeButtonVariant;

export interface ButtonOwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  padding?: React.CSSProperties['padding'];
  margin?: React.CSSProperties['margin'];
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
  loading?: boolean;
  loaderMobileSize?: number;
  loaderDesktopSize?: number;
}

export type RegularButtonProps = ButtonOwnProps & {
  variant?: Exclude<ButtonVariant, 'copy'>;
  textToCopy?: never;
};

export type CopyButtonProps = ButtonOwnProps & {
  variant: 'copy';
  textToCopy: string;
};
