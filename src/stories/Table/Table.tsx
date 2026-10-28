import { useState } from 'react';
import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { Form, FormType } from '../Form';
import { Grid } from '../Grid';
import { Input } from '../Input';
import { TextBox } from '../TextBox';
import { Typography } from '../Typography';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Table.module.css';

interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
  jsonSchema: {
    col: {
      cellText: string;
      cellName: string;
      thAlign?: 'left' | 'right';
      tdAlign?: 'left' | 'right';
    }[];
  };
  jsonData: {
    rows: ({ id: number } & Record<string, string | number | boolean>)[];
  };
  handleOnSumbitEdit: (form: Record<string, string>) => void;
}

export const Table: React.FC<TableProps> = ({
  className,
  jsonSchema,
  jsonData,
  handleOnSumbitEdit,
  style,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<({ id: number } & Record<string, string | number | boolean>) | null>(
    null,
  );

  const handleOnSubmit = (form: FormType) => {
    if (Object.values(form).some(({ error }) => error)) return;
    const dataForm = Object.fromEntries(Object.entries(form).map(([key, { value }]) => [key, value]));

    handleOnSumbitEdit(dataForm);
  };

  return (
    <div
      className={[styles.n23mTable, 'n23mTable', className].filter(Boolean).join(' ')}
      {...props}
      style={
        {
          ...getCssVariableStyle({}),
          ...style,
        } as React.CSSProperties
      }
    >
      <Dialog open={isOpen} onCancel={() => setIsOpen(false)} widthMax={'900px'}>
        <Grid layout="container" widthMin={'min(800px, calc(100vw - 25px))'} padding="0px 30px 30px 30px" margin="auto">
          <Typography appearance="light" variant="subheading" style={{ margin: '0 0 20px 0' }}>
            Edit Cell
          </Typography>

          <Form
            key={``}
            onSubmit={handleOnSubmit}
            isError={false}
            isPending={false}
            isSuccess={false}
            errorMsg={undefined}
            successMsg={undefined}
          >
            <Grid layout="columns" col={{ smallDesktop: 2 }} gap={{ col: '20px' }}>
              {jsonSchema.col.map((col) => {
                const value = selectedRow?.[col.cellName];

                return (
                  <Input
                    key={col.cellName}
                    label={col.cellText}
                    name={col.cellName}
                    type="text"
                    defaultValue={value === undefined ? '' : String(value)}
                    validatorOptions={[{ type: 'empty' }]}
                    placeholder={col.cellText}
                  />
                );
              })}
            </Grid>

            <Grid
              layout="flex"
              widthMax={'100%'}
              padding={'0'}
              justifyContent="flex-end"
              alignItems="right"
              margin={'20px 0 0 0'}
            >
              <Button
                type="submit"
                height={'40px'}
                width={'80px'}
                padding={0}
                backgroundColor="#4BB543"
                backgroundColorDisabled="grey"
              >
                <TextBox tag="span" desktopSize={16} mobileSize={16} fontWeight={400} color="white">
                  Save
                </TextBox>
              </Button>
            </Grid>
          </Form>
        </Grid>
      </Dialog>

      <table className={styles.table}>
        <thead>
          <tr>
            {jsonSchema.col.map((col) => (
              <th key={col.cellName} scope="col">
                <TextBox mobileSize={16} desktopSize={20} color="black" textAlign={col.thAlign ?? 'left'}>
                  {col.cellText}
                </TextBox>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {jsonData.rows.map((row) => (
            <tr key={row.id}>
              {jsonSchema.col.map((col) => {
                const value = row[col.cellName];
                return (
                  <td
                    key={col.cellName}
                    onClick={() => {
                      setIsOpen(true);
                      setSelectedRow(row);
                    }}
                  >
                    <TextBox
                      fontWeight={400}
                      mobileSize={16}
                      desktopSize={16}
                      color="black"
                      textAlign={col.tdAlign ?? 'left'}
                    >
                      {value === undefined ? '' : String(value)}
                    </TextBox>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.displayName = 'Table';
