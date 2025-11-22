import React, { forwardRef } from 'react';
import { Loader } from '../loader';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  backgroundColor?: string;
  padding?: string | 0;
  margin?: string | 0;
  height: string;
  width: string;
  loading?: boolean;
  backgroundColorDisabled?: string;
  borderColor?: string;
  style?: React.CSSProperties;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      margin,
      children,
      className,
      backgroundColor,
      padding,
      loading,
      height,
      width,
      borderColor,
      backgroundColorDisabled,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={['n23mButton', className].filter(Boolean).join(' ')}>
        {loading && (
          <div style={{ width: width, height: height }}>
            <Loader />
          </div>
        )}
        {!loading && (
          <button
            ref={ref}
            style={
              {
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
              } as React.CSSProperties
            }
            className={[styles.n23mButtonButton, 'n23mButtonButton'].filter(Boolean).join(' ')}
            {...props}
          >
            {children}
          </button>
        )}
      </div>
    );
  },
);

Button.displayName = 'Button';
