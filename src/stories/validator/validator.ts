import { isYYYYMMDD } from '../Calendar/Calendar.utils';

type ValidatorOption =
  | { type: 'empty' }
  | { type: 'email' }
  | { type: 'numberInRange'; options?: { min?: number; max?: number } }
  | { type: 'naturalNumber' }
  | { type: 'decimalDigits'; options?: { digits: number } }
  | { type: 'date' }
  | { type: 'json' }
  | { type: 'equal'; options: { ref: React.RefObject<HTMLInputElement> } }
  | {
      type: 'existsInOptions';
      options: {
        options: {
          value: string;
          label: string;
        }[];
        matchBy?: 'value' | 'label';
      };
    };

export type ValidatorOptions = ValidatorOption[];

type ValidatorFn = (value: string, options?: any) => string | null;

const validators: Record<string, ValidatorFn> = {
  empty: (value: string): string | null => {
    return value.trim() === '' || value.trim() === null ? 'The field cannot be empty.' : null;
  },

  equal: (value: string, options?: { ref: React.RefObject<HTMLInputElement> }): string | null => {
    const refValue = options?.ref?.current?.value;
    if (!value || !refValue) return null;
    return value !== refValue ? 'Values do not match.' : null;
  },

  email: (value) => {
    return !/^(?!.*\.{2})(?!.*\.$)(?!^\.)([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value)
      ? 'Incorrect email address.'
      : null;
  },

  numberInRange: (value: string, options?: { min?: number; max?: number }): string | null => {
    const number = Number(value);
    const min = options?.min ?? 0;
    const max = options?.max ?? 10000;

    if (isNaN(number) || number < min || number > max) {
      return `The number must be between ${min} and ${max}.`;
    }

    return null;
  },

  date: (value: string): string | null => {
    if (!isYYYYMMDD(value)) {
      return `The date is invalid.`;
    }
    return null;
  },

  existsInOptions: (
    value: string,
    options?: {
      options: {
        value: string;
        label: string;
      }[];
      matchBy?: 'value' | 'label';
    },
  ): string | null => {
    const list = options?.options ?? [];
    const matchBy = options?.matchBy ?? 'value';

    const exists = list.some((option) => (matchBy === 'value' ? option.value === value : option.label === value));

    return exists ? null : 'Please select a value from the list.';
  },

  json: (value: string): string | null => {
    try {
      const parsed = JSON.parse(value);

      if (parsed === null || (typeof parsed !== 'object' && !Array.isArray(parsed))) {
        return 'The value must be a valid JSON';
      }

      return null;
    } catch {
      return 'The value must be a valid JSON.';
    }
  },

  naturalNumber: (value: string): string | null => {
    if (!/^([1-9][0-9]*|0)$/.test(value)) {
      return 'The number must be a natural number (positive integer).';
    }

    const number = Number(value);

    if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
      return 'The number must be a natural number (positive integer).';
    }

    return null;
  },

  decimalDigits: (value: string, options?: { digits?: number }): string | null => {
    const number = Number(value);

    if (isNaN(number)) {
      return 'The value must be a valid number.';
    }

    if (options?.digits === undefined) {
      return null;
    }

    if (!value.includes('.')) {
      return `The number must have exactly ${options.digits} digit(s) after the decimal point.`;
    }

    const decimalPart = value.split('.')[1];
    const decimalDigitsCount = decimalPart.length;

    if (decimalDigitsCount !== options.digits) {
      return `The number must have exactly ${options.digits} digit(s) after the decimal point.`;
    }

    return null;
  },
};

export const validator = (value: string, validatorOptions: ValidatorOptions): string[] =>
  validatorOptions
    .map((option) => {
      if ('options' in option) {
        return validators[option.type](value, option.options);
      } else {
        return validators[option.type](value);
      }
    })
    .filter((msg): msg is string => msg != null);
