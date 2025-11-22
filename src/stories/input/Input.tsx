import { TextBox } from '../textbox';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Input.module.css';

interface InputProps extends React.HTMLAttributes<HTMLElement> {
  style?: React.CSSProperties;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  labelColor?: string;
  inputColorBorder?: string;
  inputColor?: string;
  defaultValue?: string;
  disabled?: boolean;
  kind?: 'input' | 'textarea';
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  className,
  style,
  name,
  label,
  inputRef,
  placeholder,
  type = 'text',
  labelColor = 'black',
  kind = 'input',
  inputColor,
  inputColorBorder,
  defaultValue,
  disabled,
  onBlur,
  ...props
}) => {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;

    if (typeof onBlur === 'function') {
      onBlur(e);
    }
  };

  return (
    <div
      className={[styles.n23mInput, 'n23mInput', className].filter(Boolean).join(' ')}
      {...props}
      style={
        {
          ...getCssVariableStyle({
            '--input-c': inputColor,
            '--input-cb': inputColorBorder,
          }),
          ...style,
        } as React.CSSProperties
      }
    >
      <TextBox mobileSize={14} desktopSize={14} tag="label" fontWeight={300} color={labelColor} htmlFor={name}>
        {label}
      </TextBox>

      <div className={styles.n23mInputInput}>
        {kind == 'input' && (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement | null>}
            id={name}
            name={name}
            type={type}
            onBlur={handleBlur}
            placeholder={placeholder}
            defaultValue={defaultValue}
            disabled={disabled}
          />
        )}
        {kind == 'textarea' && (
          <textarea
            id={name}
            name={name}
            onBlur={handleBlur}
            placeholder={placeholder}
            defaultValue={defaultValue}
            disabled={disabled}
            ref={inputRef as React.RefObject<HTMLTextAreaElement | null>}
          ></textarea>
        )}
      </div>
    </div>
  );
};

Input.displayName = 'Input';
