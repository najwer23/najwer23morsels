import { TextBox } from '../TextBox';
import styles from './LoaderDots.module.css';

interface LoaderDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
  color?: React.CSSProperties['color'];
  fontWeight?: React.CSSProperties['fontWeight'];
  text?: string;
  mobileSize?: number;
  desktopSize?: number;
  margin?: React.CSSProperties['margin'];
}

export const LoaderDots: React.FC<LoaderDotsProps> = ({
  className,
  style,
  color,
  mobileSize = 16,
  desktopSize = 16,
  fontWeight = 'var(--n23mTextBoxFontWeight)',
  text = 'Loading',
  margin,
  ...props
}) => {
  return (
    <div className={[styles.n23mLoaderDots, 'n23mLoaderDots', className].filter(Boolean).join(' ')} {...props}>
      <TextBox
        mobileSize={mobileSize}
        desktopSize={desktopSize}
        color={color}
        margin={margin}
        role="status"
        aria-label="Loading"
        fontWeight={fontWeight}
      >
        {text}
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
