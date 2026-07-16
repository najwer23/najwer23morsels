import { TextBox } from '../TextBox';
import styles from './LoaderDots.module.css';

interface LoaderDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
  color?: React.CSSProperties['color'];
  fontWeight?: React.CSSProperties['fontWeight'];
  loaderText?: string;
  size?: number;
  margin?: React.CSSProperties['margin'];
}

export const LoaderDots: React.FC<LoaderDotsProps> = ({
  className,
  style,
  color,
  size = 16,
  fontWeight = 'var(--n23mTextBoxFontWeight)',
  loaderText = 'Loading',
  margin,
  ...props
}) => {
  return (
    <div className={[styles.n23mLoaderDots, 'n23mLoaderDots', className].filter(Boolean).join(' ')} {...props}>
      <TextBox
        mobileSize={size}
        desktopSize={size}
        color={color}
        margin={margin}
        role="status"
        aria-label="Loading"
        fontWeight={fontWeight}
      >
        {loaderText}
        <span className={styles.dots} aria-hidden="true">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </TextBox>
    </div>
  );
};

LoaderDots.displayName = 'LoaderDots';
