import { Loader } from '../loader';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  backgroundColor?: string;
  padding?: string | 0;
  height: string;
  width: string;
  loading?: boolean;
  backgroundColorDisabled?: string;
  borderColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  backgroundColor,
  padding,
  loading,
  height,
  width,
  borderColor,
  backgroundColorDisabled,
  ...props
}) => {
  return (
    <div className={['MorselsButtonWrapper', className].filter(Boolean).join(' ')}>
      {loading && (
        <div style={{ width: width, height: height }}>
          <Loader />
        </div>
      )}
      {!loading && (
        <button
          style={
            {
              ...(padding !== undefined && padding !== null ? { '--button-padding': padding } : {}),
              '--button-bg': backgroundColor,
              '--button-height': height,
              '--button-width': width,
              '--button-bgDisabled': backgroundColorDisabled,
              '--button-borderColor': borderColor,
            } as React.CSSProperties
          }
          className={[styles.n23mButtonContainer, 'MorselsButton'].filter(Boolean).join(' ')}
          {...props}>
          <span>{children}</span>
        </button>
      )}
    </div>
  );
};

Button.displayName = 'Button';
