import { BUTTON_VARIANTS } from '../Button/Button.const';

export interface FormType {
  [k: string]: {
    error: boolean;
    value: string;
  };
}
