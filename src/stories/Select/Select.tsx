import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
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

// visually hidden, but still read by screen readers
const srOnly: React.CSSProperties = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
};

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
  // true only right after a keyboard navigation, so mouse hover never scrolls the list
  const scrollOnKeyboardRef = useRef(false);
  const id = useId();
  const listboxId = `${id}-listbox`;

  const filteredOptions = useMemo(() => {
    if (!isTyping) return options;

    return options.filter((option) => option.label.toLowerCase().includes(selectedOptionLabel.toLowerCase()));
  }, [options, selectedOptionLabel, isTyping]);

  const lastIndex = Math.max(filteredOptions.length - 1, 0);

  // keep the active option visible when navigating with the keyboard (not the mouse)
  useEffect(() => {
    if (!scrollOnKeyboardRef.current) return;

    scrollOnKeyboardRef.current = false;

    if (!isOpen) return;

    document.getElementById(`${id}-option-${activeOptionIndex}`)?.scrollIntoView({ block: 'nearest' });
  }, [id, isOpen, activeOptionIndex]);

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

    setTimeout(() => {
      inputRef.current?.blur();
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Home' || e.key === 'End') {
      scrollOnKeyboardRef.current = true;
    }

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();

        if (!isOpen) {
          handleOpen();
          return;
        }

        setActiveOptionIndex((prev) => Math.min(prev + 1, lastIndex));
        break;
      }

      case 'ArrowUp': {
        e.preventDefault();

        if (!isOpen) {
          setIsTyping(false);
          setIsOpen(true);
          setActiveOptionIndex(lastIndex);
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
        setActiveOptionIndex(lastIndex);
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

  // announced to screen readers while the user types and the list is filtered
  const statusMessage =
    isOpen && isTyping
      ? filteredOptions.length === 0
        ? 'No results'
        : `${filteredOptions.length} ${filteredOptions.length === 1 ? 'result' : 'results'} available`
      : '';

  return (
    <div
      className={[styles.n23mSelect, 'n23mSelect', className].filter(Boolean).join(' ')}
      {...props}
      style={{ ...style }}
    >
      {/* decorative, mouse-only: keyboard and screen reader users use the input */}
      <div
        className={[styles.icon, isOpen ? styles.iconRotate : ''].join(' ')}
        aria-hidden="true"
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
          'aria-haspopup': 'listbox',
          'aria-expanded': isOpen,
          'aria-controls': listboxId,
          'aria-activedescendant':
            isOpen && filteredOptions[activeOptionIndex] ? `${id}-option-${activeOptionIndex}` : undefined,
        }}
      />

      <div role="status" aria-live="polite" style={srOnly}>
        {statusMessage}
      </div>

      <div className={[styles.dropdownWrapper, isOpen ? styles.open : ''].join(' ')}>
        <div id={listboxId} role="listbox" aria-label={label} className={styles.dropdown}>
          {filteredOptions.map((option, index) => (
            <div
              id={`${id}-option-${index}`}
              className={[styles.dropdownItem, index === activeOptionIndex ? styles.active : '']
                .filter(Boolean)
                .join(' ')}
              key={option.value}
              role="option"
              aria-selected={option.value === selectedOptionValue}
              onMouseEnter={() => {
                scrollOnKeyboardRef.current = false;
                setActiveOptionIndex(index);
              }}
              onMouseDown={(e) => {
                e.preventDefault();
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
