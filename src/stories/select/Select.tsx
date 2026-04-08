import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Select.module.css';

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Select: React.FC<SelectProps> = ({ children, className, style, ...props }) => {
  return (
    <div
      className={[styles.n23mSelect, 'n23mSelect', className].filter(Boolean).join(' ')}
      {...props}
      style={
        {
          ...getCssVariableStyle({
            '--select': 'test',
          }),
          ...style,
        } as React.CSSProperties
      }
    >
      {children ?? 'Hello!'}
    </div>
  );
};

Select.displayName = 'Select';
