import { TextBox } from '../textbox';
import styles from './Loader.module.css';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  loaderColor?: string;
}

export const Loader: React.FC<LoaderProps> = ({ children, className, loaderColor }) => {
  return (
    <div
      className={[styles.najwer23morselsContainer, 'MorselsLoader', className].filter(Boolean).join(' ')}
      style={
        {
          '--lc': loaderColor,
        } as React.CSSProperties
      }>
      <TextBox mobileSize={16} desktopSize={16} color={loaderColor}>
        Loading...
      </TextBox>
    </div>
  );
};

Loader.displayName = 'Loader';
