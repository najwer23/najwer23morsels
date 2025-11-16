import { TextBox } from '../textbox';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Loader.module.css';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  loaderColor?: string;
  minHeight?: string;
  style?: React.CSSProperties;
}

export const Loader: React.FC<LoaderProps> = ({ minHeight, className, loaderColor, style }) => {
  return (
    <div
      className={[styles.n23mLoader, 'n23mLoader', className].filter(Boolean).join(' ')}
      style={
        {
          ...getCssVariableStyle({
            '--loader-lc': loaderColor,
            '--loader-mh': minHeight,
          }),
          ...style,
        } as React.CSSProperties
      }
    >
      <TextBox mobileSize={16} desktopSize={16} color={loaderColor}>
        Loading...
      </TextBox>
    </div>
  );
};

Loader.displayName = 'Loader';
