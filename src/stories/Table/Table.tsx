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

type TableRow = Record<string, string | number | boolean> & {
  id: string | number;
};

interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
  jsonSchema: {
    cols: {
      cellText: string;
      cellName: string;
      thAlign?: 'left' | 'right';
      tdAlign?: 'left' | 'right';
    }[];
  };
  jsonData: {
    rows: TableRow[];
  };
  handleCellEdit: (cell: Record<string, string>) => void;
  resetQueryCellEdit: () => void;
  handelCellDel: (cell: TableRow | null) => void;
  isErrorCellEdit: boolean;
  isPendingCellEdit: boolean;
  isSuccessCellEdit: boolean;
  errorMsgCellEdit: string | null | undefined;
  successMsgCellEdit: string | null | undefined;
}

export const Table: React.FC<TableProps> = ({
  className,
  jsonSchema,
  jsonData,
  handleCellEdit,
  handelCellDel,
  resetQueryCellEdit,
  isErrorCellEdit,
  isPendingCellEdit,
  isSuccessCellEdit,
  errorMsgCellEdit,
  successMsgCellEdit,
  style,
  ...props
}) => {
  const [isOpenDialogEditCell, setIsOpenDialogEditCell] = useState(false);
  const [dialogEditCellKey, setDialogEditCellKey] = useState(0);
  const [selectedRow, setSelectedRow] = useState<TableRow | null>(null);

  const tableColumns = jsonSchema.cols.filter((col) => col.cellName !== 'id');

  const handleOnSubmit = (form: FormType) => {
    if (Object.values(form).some(({ error }) => error)) return;
    const dataForm = Object.fromEntries(Object.entries(form).map(([key, { value }]) => [key, value]));

    handleCellEdit(dataForm);
  };

  const handleOnDel = () => {
    handelCellDel(selectedRow);
    setIsOpenDialogEditCell(false);
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
      <Dialog
        open={isOpenDialogEditCell}
        onCancel={() => {
          setIsOpenDialogEditCell(false);
          resetQueryCellEdit();
        }}
        widthMax="900px"
      >
        <Grid layout="container" widthMin="min(800px, calc(100vw - 25px))" padding="0px 30px 30px 30px" margin="auto">
          <Typography appearance="light" variant="subheading" style={{ margin: '0 0 20px 0' }}>
            Edit Cell
          </Typography>

          <Form
            key={dialogEditCellKey}
            onSubmit={handleOnSubmit}
            isError={isErrorCellEdit}
            isPending={isPendingCellEdit}
            isSuccess={isSuccessCellEdit}
            errorMsg={errorMsgCellEdit}
            successMsg={successMsgCellEdit}
          >
            <Grid layout="columns" col={{ smallDesktop: 2 }} gap={{ col: '20px' }}>
              {selectedRow &&
                jsonSchema.cols.map((col) => {
                  const isId = col.cellName === 'id';

                  return (
                    <Input
                      key={col.cellName}
                      label={col.cellText}
                      name={col.cellName}
                      type="text"
                      defaultValue={String(selectedRow[col.cellName] ?? '')}
                      disabled={isId}
                      placeholder={col.cellText}
                    />
                  );
                })}
            </Grid>

            <Grid
              layout="flex"
              widthMax="100%"
              padding="0"
              justifyContent="space-between"
              alignItems="right"
              margin="20px 0 0 0"
            >
              <Button
                type="button"
                height="40px"
                width="80px"
                padding={0}
                disabled={isPendingCellEdit}
                backgroundColor="red"
                backgroundColorDisabled="grey"
                onClick={handleOnDel}
              >
                <TextBox tag="span" desktopSize={16} mobileSize={16} fontWeight={400} color="white">
                  Delete
                </TextBox>
              </Button>

              <Button
                type="submit"
                height="40px"
                width="80px"
                padding={0}
                disabled={isPendingCellEdit}
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
            {tableColumns.map((col) => (
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
              {tableColumns.map((col) => {
                const value = row[col.cellName];

                return (
                  <td
                    key={col.cellName}
                    onClick={() => {
                      setSelectedRow(row);
                      setIsOpenDialogEditCell(true);
                      setDialogEditCellKey((prev) => prev + 1);
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
