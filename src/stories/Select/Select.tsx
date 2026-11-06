import React, { useId, useMemo, useRef, useState } from 'react';
import { Input } from '../Input';
import { ValidatorOptions } from '../validator';
import styles from './Select.module.css';
import { SelectOption } from './Select.types';

interface SelectProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onBlur' | 'onSelect'> {
  style?: React.CSSProperties;
  name: string;
  options: SelectOption[];
  inputRef?: React.RefObject<HTMLInputElement | null>;
  initialValue?: SelectOption;
  validatorOptions?: ValidatorOptions;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    data: { value: string; label: string },
  ) => void;
  onSelect?: (option: SelectOption) => void; // only for theme playground
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
  onSelect,
  label = 'Select',
  ...props
}) => {
  const [selectedOptionLabel, setSelectedOptionLabel] = useState<string>(initialValue?.label ?? '');
  const [selectedOptionValue, setSelectedOptionValue] = useState<string>(initialValue?.value ?? '');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const id = useId();
  const listboxId = `${name}-listbox`;

  const filteredOptions = useMemo(() => {
    if (!isTyping) return options;
    return options.filter((option) => option.label.toLowerCase().includes(selectedOptionLabel.toLowerCase()));
  }, [options, selectedOptionLabel, isTyping]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const nextValue = e.currentTarget.value;
    setSelectedOptionLabel(nextValue);
    setSelectedOptionValue('');
    setIsTyping(true);
    setIsOpen(true);
  };

  const handleOpen = () => {
    if (disabled) return;
    setIsTyping(false);
    setIsOpen(true);
  };

  const handleToggle = () => {
    if (disabled) return;
    setIsTyping(false);
    setIsOpen((prev) => !prev);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsOpen(false);
    setIsTyping(false);
    onBlur?.(e, {
      value: selectedOptionValue,
      label: selectedOptionLabel,
    });
  };

  const handleSelect = (option: SelectOption) => {
    setSelectedOptionValue(option.value);
    setSelectedOptionLabel(option.label);
    setIsTyping(false);
    setIsOpen(false);
    onSelect?.(option);
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
          handleToggle();
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
        inputProps={{
          onMouseDown: handleOpen,
          onKeyDown: (e) => {
            if (e.key === 'Escape') setIsOpen(false);
            if (e.key === 'ArrowDown') handleOpen();
          },
          role: 'combobox',
          'aria-autocomplete': 'list',
          'aria-expanded': isOpen,
          'aria-controls': listboxId,
        }}
      />

      <div className={[styles.dropdownWrapper, isOpen ? styles.open : ''].join(' ')}>
        <div id={listboxId} role="listbox" className={styles.dropdown}>
          {filteredOptions.map((option) => (
            <div
              className={styles.dropdownItem}
              key={option.value}
              role="option"
              aria-selected={option.value === selectedOptionValue}
              onMouseDown={() => {
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
