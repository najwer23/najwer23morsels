import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Input } from '../input';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import { ValidatorOptions } from '../validator';
import styles from './Select.module.css';

type Option = {
  value: string;
  label: string;
};

interface SelectProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onBlur'> {
  style?: React.CSSProperties;
  name: string;
  options: Option[];
  inputRef?: React.RefObject<HTMLInputElement | null>;
  initialValue?: Option;
  validatorOptions?: ValidatorOptions;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    data: { value: string; label: string },
  ) => void;
}

export const Select: React.FC<SelectProps> = ({
  className,
  name,
  disabled,
  style,
  options,
  initialValue,
  validatorOptions,
  placeholder,
  onBlur,
  label = 'Select',
  ...props
}) => {
  const [selectedOptionLabel, setSelectedOptionLabel] = useState<string>(initialValue?.label ?? '');
  const [selectedOptionValue, setSelectedOptionValue] = useState<string>(initialValue?.value ?? '');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const id = useId();

  const filteredOptions = useMemo(() => {
    return options.filter((option) => option.label.toLowerCase().includes(selectedOptionLabel.toLowerCase()));
  }, [options, selectedOptionLabel]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const nextValue = e.currentTarget.value;
    setSelectedOptionLabel(nextValue);
    setSelectedOptionValue('');
    setIsOpen(true);
  };

  const handleFocus = () => {
    setIsOpen((prev) => !prev);
    setSelectedOptionLabel('');
    setSelectedOptionValue('');
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsOpen(false);
    onBlur?.(e, {
      value: selectedOptionValue,
      label: selectedOptionLabel,
    });
  };

  const handleSelect = (option: Option) => {
    setSelectedOptionValue(option.value);
    setSelectedOptionLabel(option.label);
    setIsOpen(false);
  };

  return (
    <div
      className={[styles.n23mSelect, 'n23mSelect', className].filter(Boolean).join(' ')}
      {...props}
      style={{ ...style }}
    >
      <div
        className={[styles.icon, isOpen ? styles.iconRotate : ''].join(' ')}
        onMouseDown={(e) => {
          e.preventDefault();
          inputRef.current?.focus();
          setIsOpen((prev) => !prev);
        }}
      ></div>

      <Input
        name={name}
        type="hidden"
        kind={'input'}
        validatorOptions={[
          ...(validatorOptions ?? []),
          {
            type: 'existsInOptions',
            options: {
              options,
              matchBy: 'value',
            },
          },
        ]}
        value={selectedOptionValue}
      />

      <Input
        id={id}
        inputRef={inputRef}
        label={label}
        type="text"
        kind="select"
        disabled={disabled}
        placeholder={placeholder}
        value={selectedOptionLabel}
        onChange={handleChange}
        onClick={handleFocus}
        onBlur={handleBlur}
        validatorOptions={[
          ...(validatorOptions ?? []),
          {
            type: 'existsInOptions',
            options: {
              options,
              matchBy: 'label',
            },
          },
        ]}
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls={`${name}-listbox`}
        role="combobox"
      />

      <div className={[styles.dropdownWrapper, isOpen ? styles.open : ''].join(' ')}>
        <div className={[styles.dropdown].join(' ')}>
          {filteredOptions.map((option) => (
            <div
              className={styles.dropdownItem}
              key={option.value}
              onMouseDown={(e) => {
                // keep focus when selected
                // e.preventDefault();
                handleSelect(option);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
