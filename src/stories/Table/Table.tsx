import { useState } from 'react';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { Dialog } from '../Dialog';
import { Form, FormType } from '../Form';
import { Grid } from '../Grid';
import { Input } from '../Input';
import { Select, SelectOption } from '../Select';
import { TextBox } from '../TextBox';
import { Typography } from '../Typography';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Table.module.css';
import { TableColumn, TableRow } from './Table.types';

interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
  jsonSchema: {
    cols: TableColumn[];
  };
  jsonData: {
    rows: TableRow[];
  };
  handleCellEdit?: (cell: Record<string, string>) => void;
  resetQueryCellEdit?: () => void;
  handelCellDel?: (cell: string | number) => void;
  isErrorCellEdit?: boolean;
  isPendingCellEdit?: boolean;
  isSuccessCellEdit?: boolean;
  errorMsgCellEdit?: string | null;
  successMsgCellEdit?: string | null;
}

export const Table: React.FC<TableProps> = ({
  className,
  jsonSchema,
  jsonData,
  handleCellEdit,
  handelCellDel,
  resetQueryCellEdit,
  isErrorCellEdit = false,
  isPendingCellEdit = false,
  isSuccessCellEdit = false,
  errorMsgCellEdit,
  successMsgCellEdit,
  style,
  ...props
}) => {
  const [isOpenDialogEditCell, setIsOpenDialogEditCell] = useState(false);
  const [dialogEditCellKey, setDialogEditCellKey] = useState(0);
  const [selectedRow, setSelectedRow] = useState<TableRow | null>(null);

  const isEditable = Boolean(handleCellEdit);
  const tableColumns = jsonSchema.cols.filter((col) => col.cellName !== 'id');

  const handleOnSubmit = (form: FormType) => {
    if (!handleCellEdit) return;
    if (Object.values(form).some(({ error }) => error)) return;

    const dataForm = Object.fromEntries(Object.entries(form).map(([key, { value }]) => [key, value]));

    handleCellEdit(dataForm);
  };

  const handleOnDel = () => {
    if (!handelCellDel || !selectedRow) return;

    handelCellDel(selectedRow.id);
    setIsOpenDialogEditCell(false);
  };

  const handleOnClose = () => {
    setIsOpenDialogEditCell(false);
    resetQueryCellEdit?.();
  };

  const handleOnCellClick = (row: TableRow) => {
    setSelectedRow(row);
    setIsOpenDialogEditCell(true);
    setDialogEditCellKey((prev) => prev + 1);
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
      {isEditable && (
        <Dialog open={isOpenDialogEditCell} onCancel={handleOnClose} widthMax="900px">
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
                    const value = selectedRow[col.cellName];

                    if (col.cellType === 'date') {
                      const initialValue = (value as '' | `${number}-${number}-${number}`) || col.initialValue;

                      return (
                        <Calendar
                          key={col.cellName}
                          label={col.cellText}
                          name={col.cellName}
                          initialValue={initialValue}
                          placeholder={col.cellText}
                        />
                      );
                    }

                    if (col.cellType === 'select') {
                      const selectedOption =
                        col.options.find((option) => option.value === String(value ?? '')) ?? col.initialValue;

                      return (
                        <Select
                          key={col.cellName}
                          name={col.cellName}
                          options={col.options}
                          initialValue={selectedOption}
                        />
                      );
                    }

                    return (
                      <Input
                        key={col.cellName}
                        label={col.cellText}
                        name={col.cellName}
                        type="text"
                        defaultValue={String(value ?? '')}
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
                justifyContent={handelCellDel ? 'space-between' : 'flex-end'}
                alignItems="right"
                margin="20px 0 0 0"
              >
                {handelCellDel && (
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
                )}

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
      )}

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
                    data-clickable={isEditable}
                    onClick={isEditable ? () => handleOnCellClick(row) : undefined}
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
