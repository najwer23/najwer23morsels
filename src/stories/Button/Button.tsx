import React, { forwardRef } from 'react';
import { LoaderDots } from '../LoaderDots';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import { BUTTON_VARIANTS } from './Button.const';
import styles from './Button.module.css';
import { ButtonVariant } from './Button.types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  backgroundColor?: React.CSSProperties['color'];
  backgroundColorDisabled?: React.CSSProperties['color'];
  borderColor?: React.CSSProperties['color'];
  textColor?: React.CSSProperties['color'];
  padding?: React.CSSProperties['padding'];
  margin?: React.CSSProperties['margin'];
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
  loading?: boolean;
  loaderMobileSize?: number;
  loaderDesktopSize?: number;
  style?: React.CSSProperties;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      loaderMobileSize = 16,
      loaderDesktopSize = 16,
      margin,
      children,
      className,
      backgroundColor,
      backgroundColorDisabled,
      borderColor,
      textColor,
      padding = '0 12px',
      loading = false,
      height = '42px',
      width,
      style,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabledVariant = variant === 'disabled' || (disabled && !loading);
    const activeVariant: ButtonVariant = isDisabledVariant ? 'disabled' : variant;
    const palette = BUTTON_VARIANTS[activeVariant];
    const disabledPalette = BUTTON_VARIANTS.disabled;

    return (
      <button
        ref={ref}
        disabled={disabled || loading || variant === 'disabled'}
        aria-busy={loading || undefined}
        data-variant={activeVariant}
        style={{
          ...getCssVariableStyle({
            '--button-bg': backgroundColor ?? palette.background,
            '--button-bc': borderColor ?? palette.border,
            '--button-color': textColor ?? palette.text,
            '--button-focus': palette.focus,
            '--button-bgd': backgroundColorDisabled ?? disabledPalette.background,
            '--button-colord': disabledPalette.text,
            '--button-h': height,
            '--button-w': width,
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
            <LoaderDots
              mobileSize={loaderMobileSize}
              desktopSize={loaderDesktopSize}
              color={textColor ?? palette.text}
            />
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
