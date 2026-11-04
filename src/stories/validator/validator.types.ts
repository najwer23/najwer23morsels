export type ValidatorOption =
  | { type: 'empty' }
  | { type: 'email' }
  | { type: 'numberInRange'; options?: { min?: number; max?: number } }
  | { type: 'naturalNumber' }
  | { type: 'decimalDigits'; options?: { digits: number } }
  | { type: 'date' }
  | { type: 'json' }
  | { type: 'equal'; options: { ref: React.RefObject<HTMLInputElement | null> } }
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

export type ValidatorFn = (value: string, options?: any) => string | null;
