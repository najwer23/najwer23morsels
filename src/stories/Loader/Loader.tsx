import { LoaderDots } from '../LoaderDots';
import { TextBox } from '../TextBox';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Loader.module.css';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  loaderColor?: React.CSSProperties['color'];
  minHeight?: React.CSSProperties['minHeight'];
  loaderText?: string;
  style?: React.CSSProperties;
}

export const Loader: React.FC<LoaderProps> = ({ minHeight, className, loaderColor, loaderText = 'Loading', style }) => {
  return (
    <div
      className={[styles.n23mLoader, 'n23mLoader', className].filter(Boolean).join(' ')}
      style={{
        ...getCssVariableStyle({
          '--loader-lc': loaderColor,
          '--loader-mh': minHeight,
        }),
        ...style,
      }}
    >
      <LoaderDots color={loaderColor} />
    </div>
  );
};

Loader.displayName = 'Loader';
