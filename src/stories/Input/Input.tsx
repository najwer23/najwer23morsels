import { useEffect, useRef } from 'react';
import { TextBox } from '../TextBox';
import { Typography } from '../Typography';
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
  /** Props forwarded to the underlying <input> (not the wrapper div). */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

type InputKindProps = InputBase & {
  kind?: 'input';
  name: string;
  minHeight?: never;
  maxHeight?: never;
};

type TextareaProps = InputBase & {
  kind: 'textarea';
  name: string;
  minHeight?: React.CSSProperties['minHeight'];
  maxHeight?: React.CSSProperties['maxHeight'];
};

type CalendarProps = InputBase & {
  kind: 'calendar';
  name: string;
  minHeight?: never;
  maxHeight?: never;
};

export type InputProps = InputKindProps | TextareaProps | CalendarProps;

export type SelectProps = InputBase & {
  kind: 'select';
  name?: never;
  id: string;
  minHeight?: never;
  maxHeight?: never;
};

const toCssSize = (value: React.CSSProperties['minHeight']) => (typeof value === 'number' ? `${value}px` : value);

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
  minHeight,
  maxHeight,
  inputProps,
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

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    inputProps?.onFocus?.(e);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const rect = input.getBoundingClientRect();
    const style = window.getComputedStyle(input);

    const paddingLeft = parseFloat(style.paddingLeft);
    const paddingRight = parseFloat(style.paddingRight);
    const borderLeft = parseFloat(style.borderLeftWidth);
    const borderRight = parseFloat(style.borderRightWidth);

    const clickX = e.clientX - rect.left;
    const textStart = borderLeft + paddingLeft;
    const textEnd =
      input.scrollWidth > input.clientWidth
        ? rect.width - borderRight - paddingRight
        : textStart + input.value.length * parseFloat(style.fontSize) * 0.6;

    if (clickX < textStart || clickX > textEnd) {
      requestAnimationFrame(() => {
        const position = input.value.length;
        input.setSelectionRange(position, position);
      });
    }

    inputProps?.onMouseDown?.(e);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = wrapperRef.current?.querySelector<FieldElement>('input, textarea');
      if (el && el.value && isAutofilled(el)) validate(el);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const isTextarea = kind === 'textarea';

  return (
    <div
      ref={wrapperRef}
      className={[styles.n23mInput, 'n23mInput', className].filter(Boolean).join(' ')}
      {...props}
      style={{
        ...getCssVariableStyle({
          '--input-c': inputColor,
          '--input-cb': inputColorBorder,
          '--input-minh': isTextarea ? toCssSize(minHeight) : undefined,
          '--input-maxh': isTextarea ? toCssSize(maxHeight) : undefined,
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
          htmlFor={kind === 'select' || kind === 'calendar' ? undefined : name}
        >
          {label}
        </TextBox>
      )}

      <div className={styles.n23mInputInput}>
        {(kind === 'input' || kind === 'calendar') && (
          <input
            {...inputProps}
            onFocus={handleFocus}
            onMouseDown={handleMouseDown}
            ref={inputRef as React.RefObject<HTMLInputElement | null>}
            id={name}
            name={name}
            type={type}
            aria-label={label}
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
            aria-label={label}
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
            {...inputProps}
            onFocus={handleFocus}
            onMouseDown={handleMouseDown}
            id={id}
            aria-label={label}
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

      {type !== 'hidden' && <Typography ref={errorRef} variant={'validatorInputError'} />}
    </div>
  );
};

Input.displayName = 'Input';
