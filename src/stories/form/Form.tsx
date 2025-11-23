import { FormEvent } from 'react';
import { TextBox } from '../textbox';

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
  isError: boolean;
  isPending: boolean;
  isSuccess: boolean;
  errorMsg: string | null | undefined;
  successMsg: string | null | undefined;
}

export const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  className,
  isError,
  isPending,
  isSuccess,
  errorMsg,
  successMsg,
  style,
  ...props
}) => {
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
          ...style,
        } as React.CSSProperties
      }
      onSubmit={handleSubmit}
    >
      {children}

      {isError && (
        <TextBox tag="p" color="#ff3333" mobileSize={12} desktopSize={12} margin={'15px 0 10px 0'} fontWeight={400}>
          {errorMsg}
        </TextBox>
      )}
      {isPending && (
        <TextBox tag="p" color="grey" mobileSize={12} desktopSize={12} margin={'15px 0 10px 0'} fontWeight={400}>
          Loading..
        </TextBox>
      )}
      {isSuccess && (
        <TextBox tag="p" color="#4BB543" mobileSize={12} desktopSize={12} margin={'15px 0 10px 0'} fontWeight={400}>
          {successMsg}
        </TextBox>
      )}
    </form>
  );
};

Form.displayName = 'Form';
