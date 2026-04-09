import React, { forwardRef } from 'react';
import { Loader } from '../loader';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  backgroundColor?: React.CSSProperties['color'];
  padding?: React.CSSProperties['padding'];
  margin?: React.CSSProperties['margin'];
  height: React.CSSProperties['height'];
  width: React.CSSProperties['width'];
  loading?: boolean;
  backgroundColorDisabled?: React.CSSProperties['color'];
  borderColor?: React.CSSProperties['color'];
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
