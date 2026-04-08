import { useRef } from 'react';
import { TextBox } from '../textbox';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import { type ValidatorOptions, validator } from '../validator';
import styles from './Input.module.css';

interface InputBase extends React.HTMLAttributes<HTMLElement> {
  style?: React.CSSProperties;
  label?: string;
  type?: string;
  placeholder?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  labelColor?: string;
  inputColorBorder?: string;
  inputColor?: string;
  defaultValue?: string;
  disabled?: boolean;
  validatorOptions?: ValidatorOptions;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

type InputProps = InputBase & {
  kind?: 'input' | 'textarea';
  name: string;
};

type SelectProps = InputBase & {
  kind: 'select';
  name?: never;
};

export const Input: React.FC<InputProps | SelectProps> = ({
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
  validatorOptions,
  onBlur,
  onChange,
  ...props
}) => {
  const errorRef = useRef<HTMLDivElement | null>(null);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;

    if (document.activeElement !== target) {
      if (errorRef.current) errorRef.current.textContent = '';

      if (validatorOptions) {
        const validatorResult = validator(target.value, validatorOptions);
        if (validatorResult.length > 0) {
          errorRef.current!.textContent = validatorResult[0];
          target.classList.add('error');
        } else {
          target.classList.remove('error');
        }
      }
    }

    if (typeof onBlur === 'function') {
      onBlur(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (typeof onChange === 'function') {
      onChange(e);
    }
  };

  return (
    <div
      className={[styles.n23mInput, 'n23mInput', className].filter(Boolean).join(' ')}
      {...props}
      style={{
        ...getCssVariableStyle({
          '--input-c': inputColor,
          '--input-cb': inputColorBorder,
        }),
        ...style,
      }}
    >
      <TextBox mobileSize={14} desktopSize={14} tag="label" fontWeight={400} color={labelColor} htmlFor={name}>
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
            onChange={handleChange}
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
            onChange={handleChange}
            placeholder={placeholder}
            defaultValue={defaultValue}
            disabled={disabled}
            ref={inputRef as React.RefObject<HTMLTextAreaElement | null>}
          ></textarea>
        )}
        {kind == 'select' && (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement | null>}
            id={name}
            type={type}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={placeholder}
            defaultValue={defaultValue}
            disabled={disabled}
          />
        )}
      </div>

      <TextBox
        ref={errorRef}
        mobileSize={12}
        desktopSize={12}
        tag="p"
        fontWeight={400}
        color={'#ff3333'}
        lineHeight={'14px'}
        margin={'2px 0 2px'}
      ></TextBox>
    </div>
  );
};

Input.displayName = 'Input';
