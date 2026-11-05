// Button/Button.tsx
import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { LoaderDots } from '../LoaderDots';
import { TextBox } from '../TextBox';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import { BUTTON_VARIANTS, COPIED_RESET_MS } from './Button.const';
import styles from './Button.module.css';
import { ButtonVariant } from './Button.types';

const visuallyHidden: React.CSSProperties = {
  position: 'absolute',
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
};

interface ButtonOwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
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

type RegularButtonProps = ButtonOwnProps & {
  variant?: Exclude<ButtonVariant, 'copy'>;
  textToCopy?: never;
};

type CopyButtonProps = ButtonOwnProps & {
  variant: 'copy';
  textToCopy: string;
};

export type ButtonProps = RegularButtonProps | CopyButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      textToCopy,
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
      type,
      onClick,
      ...props
    },
    ref,
  ) => {
    const isCopyVariant = variant === 'copy';
    const [isCopied, setIsCopied] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearCopyTimeout = useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }, []);

    const handleClick = useCallback(
      async (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);

        if (!isCopyVariant || textToCopy === undefined) return;

        clearCopyTimeout();

        try {
          await navigator.clipboard.writeText(textToCopy);
        } catch {
          setIsCopied(false);
          return;
        }

        setIsCopied(true);
        timeoutRef.current = setTimeout(() => {
          setIsCopied(false);
          timeoutRef.current = null;
        }, COPIED_RESET_MS);
      },
      [onClick, isCopyVariant, textToCopy, clearCopyTimeout],
    );

    useEffect(() => clearCopyTimeout, [clearCopyTimeout]);

    const currentVariant: ButtonVariant = isCopyVariant && isCopied ? 'success' : variant;
    const isDisabledVariant = currentVariant === 'disabled' || (disabled && !loading);
    const activeVariant: ButtonVariant = isDisabledVariant ? 'disabled' : currentVariant;
    const palette = BUTTON_VARIANTS[activeVariant];
    const disabledPalette = BUTTON_VARIANTS.disabled;

    const defaultCopyLabel = (
      <TextBox mobileSize={10} desktopSize={10} fontWeight={600} lineHeight="17px" color="inherit">
        Copy
      </TextBox>
    );

    return (
      <>
        <button
          ref={ref}
          type={type ?? (isCopyVariant ? 'button' : undefined)}
          disabled={disabled || loading || variant === 'disabled'}
          aria-busy={loading || undefined}
          data-variant={activeVariant}
          onClick={handleClick}
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
            {children ?? (isCopyVariant ? defaultCopyLabel : null)}
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

        {isCopyVariant && (
          <span role="status" aria-live="polite" style={visuallyHidden}>
            {isCopied ? 'Copied' : ''}
          </span>
        )}
      </>
    );
  },
);

Button.displayName = 'Button';
