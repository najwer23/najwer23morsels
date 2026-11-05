import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { LoaderDots } from '../LoaderDots';
import { TextBox } from '../TextBox';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import { COPIED_RESET_MS, VISUALLY_HIDDEN } from './Button.const';
import styles from './Button.module.css';
import { ButtonVariant, CopyButtonProps, RegularButtonProps } from './Button.types';

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
    const activeVariant: ButtonVariant =
      currentVariant === 'disabled' || (disabled && !loading) ? 'disabled' : currentVariant;

    const defaultCopyLabel = (
      <TextBox mobileSize={10} desktopSize={10} fontWeight={600} color="inherit">
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
              <LoaderDots mobileSize={loaderMobileSize} desktopSize={loaderDesktopSize} color="var(--button-color)" />
            </span>
          )}
        </button>

        {isCopyVariant && (
          <span role="status" aria-live="polite" style={VISUALLY_HIDDEN}>
            {isCopied ? 'Copied' : ''}
          </span>
        )}
      </>
    );
  },
);

Button.displayName = 'Button';
