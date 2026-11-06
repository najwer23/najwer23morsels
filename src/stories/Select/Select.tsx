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
  onSelect?: (option: SelectOption) => void;
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
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const id = useId();
  const listboxId = `${id}-listbox`;

  const filteredOptions = useMemo(() => {
    if (!isTyping) return options;

    return options.filter((option) => option.label.toLowerCase().includes(selectedOptionLabel.toLowerCase()));
  }, [options, selectedOptionLabel, isTyping]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const nextValue = e.currentTarget.value;

    setSelectedOptionLabel(nextValue);
    setSelectedOptionValue('');
    setActiveOptionIndex(0);
    setIsTyping(true);
    setIsOpen(true);
  };

  const handleOpen = () => {
    if (disabled) return;

    const selectedIndex = filteredOptions.findIndex((option) => option.value === selectedOptionValue);

    setActiveOptionIndex(selectedIndex >= 0 ? selectedIndex : 0);
    setIsTyping(false);
    setIsOpen(true);
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();

        if (!isOpen) {
          handleOpen();
          return;
        }

        setActiveOptionIndex((prev) => Math.min(prev + 1, filteredOptions.length - 1));
        break;
      }

      case 'ArrowUp': {
        e.preventDefault();

        if (!isOpen) {
          setIsTyping(false);
          setIsOpen(true);
          setActiveOptionIndex(filteredOptions.length - 1);
          return;
        }

        setActiveOptionIndex((prev) => Math.max(prev - 1, 0));
        break;
      }

      case 'Home': {
        if (!isOpen) return;

        e.preventDefault();
        setActiveOptionIndex(0);
        break;
      }

      case 'End': {
        if (!isOpen) return;

        e.preventDefault();
        setActiveOptionIndex(filteredOptions.length - 1);
        break;
      }

      case 'Enter': {
        if (!isOpen || !filteredOptions[activeOptionIndex]) return;

        e.preventDefault();
        handleSelect(filteredOptions[activeOptionIndex]);
        break;
      }

      case 'Escape': {
        if (!isOpen) return;

        e.preventDefault();
        setIsOpen(false);
        setIsTyping(false);
        break;
      }

      case 'Tab': {
        setIsOpen(false);
        setIsTyping(false);
        break;
      }
    }
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

          if (isOpen) {
            setIsOpen(false);
          } else {
            handleOpen();
          }
        }}
      />

      <Input
        name={name}
        type="hidden"
        kind="input"
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
          onFocus: handleOpen,
          onMouseDown: handleOpen,
          onKeyDown: handleKeyDown,
          role: 'combobox',
          'aria-autocomplete': 'list',
          'aria-expanded': isOpen,
          'aria-controls': listboxId,
          'aria-activedescendant':
            isOpen && filteredOptions[activeOptionIndex] ? `${id}-option-${activeOptionIndex}` : undefined,
        }}
      />

      <div className={[styles.dropdownWrapper, isOpen ? styles.open : ''].join(' ')}>
        <div id={listboxId} role="listbox" className={styles.dropdown}>
          {filteredOptions.map((option, index) => (
            <div
              id={`${id}-option-${index}`}
              className={[styles.dropdownItem, index === activeOptionIndex ? styles.active : '']
                .filter(Boolean)
                .join(' ')}
              key={option.value}
              role="option"
              aria-selected={option.value === selectedOptionValue}
              onMouseEnter={() => setActiveOptionIndex(index)}
              onMouseDown={(e) => {
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
