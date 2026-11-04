import React, { forwardRef } from 'react';
import { Loader } from '../Loader';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  backgroundColor?: React.CSSProperties['color'];
  padding?: React.CSSProperties['padding'];
  margin?: React.CSSProperties['margin'];
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
  loading?: boolean;
  loaderMobileSize?: number;
  loaderDesktopSize?: number;
  backgroundColorDisabled?: React.CSSProperties['color'];
  borderColor?: React.CSSProperties['color'];
  style?: React.CSSProperties;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      loaderMobileSize = 16,
      loaderDesktopSize = 16,
      margin,
      children,
      className,
      backgroundColor,
      padding = '0 12px',
      loading = false,
      height = '42px',
      width,
      borderColor,
      backgroundColorDisabled,
      style,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        style={{
          ...getCssVariableStyle({
            '--button-bg': backgroundColor,
            '--button-h': height,
            '--button-w': width,
            '--button-bgd': backgroundColorDisabled,
            '--button-bc': borderColor,
            '--button-p': padding,
            '--button-m': margin,
          }),
          ...style,
        }}
        className={[styles.n23mButtonButton, 'n23mButtonButton', loading && styles.n23mButtonButtonLoading, className]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        <span className={styles.n23mButtonContent} aria-hidden={loading || undefined}>
          {children}
        </span>

        {loading && (
          <span className={styles.n23mButtonLoader}>
            <Loader mobileSize={loaderMobileSize} desktopSize={loaderDesktopSize} />
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
