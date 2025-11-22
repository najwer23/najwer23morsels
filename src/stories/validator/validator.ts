type ValidatorOption =
  | { type: 'empty' }
  | { type: 'email' }
  | { type: 'numberInRange'; options?: { min?: number; max?: number } }
  | { type: 'date' };

export type ValidatorOptions = ValidatorOption[];

type ValidatorFn = (value: string, options?: any) => string | null;

const validators: Record<string, ValidatorFn> = {
  empty: (value: string): string | null => {
    return value.trim() === '' || value.trim() === null ? 'The field cannot be empty.' : null;
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
    const checkIfDateIsCorrect = (inputDate: string) => {
      const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

      return day > 0 && day <= monthLength[month];
    };

    if (!checkIfDateIsCorrect(value)) {
      return `The date is invalid.`;
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
