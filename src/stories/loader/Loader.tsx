import { TextBox } from '../textbox';
import styles from './Loader.module.css';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  loaderColor?: string;
  minHeight?: number;
}

export const Loader: React.FC<LoaderProps> = ({ minHeight, className, loaderColor }) => {
  return (
    <div
      className={[styles.n23mContainer, 'MorselsLoader', className].filter(Boolean).join(' ')}
      style={
        {
          '--loader-lc': loaderColor,
          ...(minHeight !== undefined && minHeight !== null ? { '--loader-mh': `${minHeight}px` } : {}),
        } as React.CSSProperties
      }>
      <TextBox mobileSize={16} desktopSize={16} color={loaderColor}>
        Loading...
      </TextBox>
    </div>
  );
};

Loader.displayName = 'Loader';
