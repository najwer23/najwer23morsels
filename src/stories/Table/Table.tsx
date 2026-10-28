import { useState } from 'react';
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
    rows: ({ id: number } & Record<string, string | number | boolean>)[];
  };
}

export const Table: React.FC<TableProps> = ({ className, jsonSchema, style, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnSubmit = (form: FormType) => {};

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
            <Input
              label="Title"
              type="text"
              name="title"
              defaultValue={'0'}
              validatorOptions={[{ type: 'empty' }]}
              placeholder="Post Title"
            />
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
          {jsonSchema.rows.map((row) => (
            <tr key={row.id}>
              {jsonSchema.col.map((col) => {
                const value = row[col.cellName];
                return (
                  <td key={col.cellName} onClick={() => setIsOpen(true)}>
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
