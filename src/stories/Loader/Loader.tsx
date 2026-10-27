import { LoaderDots } from '../LoaderDots';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Loader.module.css';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  loaderColor?: React.CSSProperties['color'];
  minHeight?: React.CSSProperties['minHeight'];
  text?: string;
  style?: React.CSSProperties;
  mobileSize?: number;
  desktopSize?: number;
  textPosition?: 'center' | 'topLeft';
}

export const Loader: React.FC<LoaderProps> = ({
  minHeight,
  className,
  loaderColor,
  text = 'Loading',
  mobileSize = 16,
  desktopSize = 16,
  textPosition = 'center',
  style,
  ...props
}) => {
  const isTopLeft = textPosition === 'topLeft';

  return (
    <div
      className={[
        styles.n23mLoader,
        'n23mLoader',
        isTopLeft && styles.n23mLoaderTopLeft,
        isTopLeft && 'n23mLoaderTopLeft',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        ...getCssVariableStyle({
          '--loader-lc': loaderColor,
          '--loader-mh': minHeight,
        }),
        ...style,
      }}
      {...props}
    >
      <LoaderDots color={loaderColor} text={text} mobileSize={mobileSize} desktopSize={desktopSize} />
    </div>
  );
};

Loader.displayName = 'Loader';
