import { FormEvent } from 'react';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';

export interface FormType {
  [k: string]: {
    error: boolean;
    value: string;
  };
}

interface FormProps {
  className?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
  onSubmit: (formData: FormType) => void;
  style?: React.CSSProperties;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit, className, style, ...props }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Assert that e.currentTarget is an HTMLFormElement
    const form = e.currentTarget as HTMLFormElement;

    if (form) {
      // Trigger change and blur events on all form elements
      Array.from(form.elements).forEach((element) => {
        if (
          element instanceof HTMLInputElement ||
          element instanceof HTMLTextAreaElement ||
          element instanceof HTMLSelectElement
        ) {
          element.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
        }
      });
    }

    const formData = Object.fromEntries(
      Array.from(form.elements)
        .filter((element): element is HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement => {
          return (
            element instanceof HTMLInputElement ||
            element instanceof HTMLTextAreaElement ||
            (element instanceof HTMLSelectElement && element.name !== '')
          );
        })
        .map((element) => [element.name, { error: element.className.includes('error'), value: element.value }]),
    );

    onSubmit(formData);
  };

  return (
    <form
      className={['n23mForm', className].filter(Boolean).join(' ')}
      {...props}
      style={
        {
          ...getCssVariableStyle({
            '--form': 'test',
          }),
          ...style,
        } as React.CSSProperties
      }
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

Form.displayName = 'Form';
