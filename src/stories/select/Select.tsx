import { useState } from 'react';
import { Input } from '../input';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import { ValidatorOptions } from '../validator';
import styles from './Select.module.css';

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  name: string;
  defaultValue?: string;
  validatorOptions?: ValidatorOptions;
  label?: string;
}

export const Select: React.FC<SelectProps> = ({
  children,
  className,
  name,
  style,
  defaultValue,
  validatorOptions,
  label,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  return (
    <div
      className={[styles.n23mSelect, 'n23mSelect', className].filter(Boolean).join(' ')}
      {...props}
      style={{
        ...getCssVariableStyle({
          '--select': 'test',
        }),
        ...style,
      }}
    >
      <input name={name} type="hidden" value={value} />
      <Input
        label={label}
        type="text"
        kind="select"
        defaultValue={value}
        onChange={handleChange}
        validatorOptions={validatorOptions}
      />
    </div>
  );
};
