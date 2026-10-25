import { useEffect, useRef } from 'react';
import { TextBox } from '../TextBox';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import { type ValidatorOptions, validator } from '../validator';
import styles from './Input.module.css';
import { FieldElement } from './Input.types';
import { isAutofillEvent, isAutofilled } from './Input.utils';

interface InputBase extends React.HTMLAttributes<HTMLElement> {
  style?: React.CSSProperties;
  label?: string;
  type?: string;
  placeholder?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  labelColor?: React.CSSProperties['color'];
  inputColorBorder?: React.CSSProperties['color'];
  inputColor?: React.CSSProperties['color'];
  defaultValue?: string;
  disabled?: boolean;
  validatorOptions?: ValidatorOptions;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value?: string;
  autoComplete?: string;
  step?: number | 'any';
}

export type InputProps = InputBase & {
  kind?: 'input' | 'textarea';
  name: string;
};

export type SelectProps = InputBase & {
  kind: 'select';
  name?: never;
  id: string;
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
  value,
  autoComplete,
  id,
  onBlur,
  onChange,
  step,
  ...props
}) => {
  const errorRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const validate = (target: FieldElement) => {
    if (errorRef.current) errorRef.current.textContent = '';

    if (!validatorOptions) return;

    const validatorResult = validator(target.value, validatorOptions);
    if (validatorResult.length > 0) {
      if (errorRef.current) errorRef.current.textContent = validatorResult[0];
      target.classList.add('error');
    } else {
      target.classList.remove('error');
    }
  };

  const handleBlur = (e: React.FocusEvent<FieldElement>) => {
    onBlur?.(e);

    const target = e.target;
    if (document.activeElement !== target) validate(target);
  };

  const handleChange = (e: React.ChangeEvent<FieldElement>) => {
    onChange?.(e);

    const target = e.target;

    if (isAutofillEvent(e) || target.classList.contains('error')) {
      validate(target);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = wrapperRef.current?.querySelector<FieldElement>('input, textarea');
      if (el && el.value && isAutofilled(el)) validate(el);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={wrapperRef}
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
      {type !== 'hidden' && (
        <TextBox
          mobileSize={14}
          desktopSize={14}
          tag="label"
          fontWeight={400}
          color={labelColor}
          htmlFor={kind === 'select' ? id : name}
        >
          {label}
        </TextBox>
      )}

      <div className={styles.n23mInputInput}>
        {kind === 'input' && (
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
            value={value}
            autoComplete={autoComplete}
            step={step}
          />
        )}

        {kind === 'textarea' && (
          <textarea
            autoComplete={autoComplete}
            id={name}
            name={name}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={placeholder}
            defaultValue={defaultValue}
            disabled={disabled}
            value={value}
            ref={inputRef as React.RefObject<HTMLTextAreaElement | null>}
          />
        )}

        {kind === 'select' && (
          <input
            id={id}
            autoComplete="off"
            ref={inputRef as React.RefObject<HTMLInputElement | null>}
            type={type}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={placeholder}
            defaultValue={defaultValue}
            disabled={disabled}
            value={value}
            step={step}
          />
        )}
      </div>

      {type !== 'hidden' && (
        <TextBox
          ref={errorRef}
          mobileSize={12}
          desktopSize={12}
          tag="p"
          fontWeight={400}
          color={'#ff3333'}
          lineHeight={'14px'}
          margin={'2px 0 2px'}
        />
      )}
    </div>
  );
};

Input.displayName = 'Input';
