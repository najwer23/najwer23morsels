import { ThemeTypographyVariant } from '../Theme/Theme.types';
import { Typography } from '../Typography';
import styles from './LoaderDots.module.css';

type LoaderDotsVariant = Extract<ThemeTypographyVariant, 'loaderForm' | 'loaderPage'>;

interface LoaderDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: LoaderDotsVariant;
  style?: React.CSSProperties;
  color?: React.CSSProperties['color'];
  fontWeight?: React.CSSProperties['fontWeight'];
  text?: string;
  mobileSize?: number;
  desktopSize?: number;
  margin?: React.CSSProperties['margin'];
}

export const LoaderDots: React.FC<LoaderDotsProps> = ({
  variant = 'loaderPage',
  className,
  style,
  color,
  fontWeight,
  text = 'Loading',
  mobileSize,
  desktopSize,
  margin,
  ...props
}) => {
  return (
    <div
      className={[styles.n23mLoaderDots, 'n23mLoaderDots', className].filter(Boolean).join(' ')}
      style={style}
      {...props}
    >
      <Typography
        variant={variant}
        {...(mobileSize !== undefined && { mobileSize })}
        {...(desktopSize !== undefined && { desktopSize })}
        {...(margin !== undefined && { margin })}
        {...(fontWeight !== undefined && { fontWeight })}
        {...(color !== undefined && { color })}
        role="status"
        aria-label={text}
      >
        {text}
        <span className={styles.dots} aria-hidden="true">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </Typography>
    </div>
  );
};

LoaderDots.displayName = 'LoaderDots';
