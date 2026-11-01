import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { Dialog } from '../Dialog';
import { Form, FormType } from '../Form';
import { Grid } from '../Grid';
import { Input } from '../Input';
import { Select } from '../Select';
import { TextBox } from '../TextBox';
import { Typography } from '../Typography';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Table.module.css';
import { TableCellDelete, TableCellEdit, TableColumn, TableRow } from './Table.types';

interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
  jsonSchema: {
    cols: TableColumn[];
  };
  jsonData: {
    rows: TableRow[];
  };
  cellEdit?: TableCellEdit;
  cellDelete?: TableCellDelete;
  onCellReset?: () => void;
}

export const Table: React.FC<TableProps> = ({
  className,
  jsonSchema,
  jsonData,
  cellEdit,
  cellDelete,
  onCellReset,
  style,
  ...props
}) => {
  const [isOpenDialogEditCell, setIsOpenDialogEditCell] = useState(false);
  const [isOpenDialogDeleteCell, setIsOpenDialogDeleteCell] = useState(false);
  const [dialogEditCellKey, setDialogEditCellKey] = useState(0);
  const [selectedRow, setSelectedRow] = useState<TableRow | null>(null);

  const {
    onCellEdit,
    isCellEditError = false,
    isCellEditPending = false,
    isCellEditSuccess = false,
    cellEditErrorMsg,
    cellEditSuccessMsg,
  } = cellEdit ?? {};

  const {
    onCellDelete,
    isCellDeleteError = false,
    isCellDeletePending = false,
    isCellDeleteSuccess = false,
    cellDeleteErrorMsg,
  } = cellDelete ?? {};

  const isEditable = Boolean(onCellEdit);
  const isDeletable = Boolean(onCellDelete);
  const tableColumns = jsonSchema.cols.filter((col) => col.cellName !== 'id');

  const handleOnSubmit = (form: FormType) => {
    if (!onCellEdit) return;
    if (Object.values(form).some(({ error }) => error)) return;

    const dataForm = Object.fromEntries(Object.entries(form).map(([key, { value }]) => [key, value]));

    onCellEdit(dataForm);
  };

  // "Delete" in the edit dialog -> open the confirmation dialog
  const handleOnDel = () => {
    if (!isDeletable || !selectedRow) return;
    setIsOpenDialogDeleteCell(true);
  };

  // "Yes, delete" in the confirmation dialog
  const handleOnDelConfirm = () => {
    if (!onCellDelete || !selectedRow) return;
    onCellDelete(selectedRow.id);
    setIsOpenDialogDeleteCell(false);
    setIsOpenDialogEditCell(false);
    onCellReset?.();
  };

  const handleOnDelCancel = () => {
    setIsOpenDialogDeleteCell(false);
    onCellReset?.();
  };

  const handleOnClose = () => {
    setIsOpenDialogEditCell(false);
    onCellReset?.();
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
              isError={isCellEditError}
              isPending={isCellEditPending}
              isSuccess={isCellEditSuccess}
              errorMsg={cellEditErrorMsg}
              successMsg={cellEditSuccessMsg}
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
                        type={col.cellType}
                        step={col.cellType === 'number' ? 0.01 : undefined}
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
                justifyContent={isDeletable ? 'space-between' : 'flex-end'}
                alignItems="right"
                margin="20px 0 0 0"
              >
                {isDeletable && (
                  <Button
                    type="button"
                    height="40px"
                    width="auto"
                    padding="0 10px"
                    disabled={isCellEditPending || isCellDeletePending}
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
                  width="auto"
                  padding="0 10px"
                  disabled={isCellEditPending || isCellDeletePending}
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

      {isDeletable && (
        <Dialog open={isOpenDialogDeleteCell} onCancel={handleOnDelCancel} widthMax="450px">
          <Grid layout="container" widthMin="min(400px, calc(100vw - 25px))" padding="0px 30px 30px 30px" margin="auto">
            <Typography appearance="light" variant="subheading" style={{ margin: '0 0 10px 0' }}>
              Are you sure?
            </Typography>

            <TextBox tag="p" desktopSize={16} mobileSize={16} fontWeight={400} color="black">
              This row will be permanently deleted. This action cannot be undone.
            </TextBox>

            {isCellDeleteError && (
              <TextBox
                tag="p"
                desktopSize={16}
                mobileSize={16}
                fontWeight={400}
                color="red"
                style={{ margin: '10px 0 0 0' }}
              >
                {cellDeleteErrorMsg ?? 'Delete failed'}
              </TextBox>
            )}

            <Grid layout="flex" widthMax="100%" padding="0" justifyContent="space-between" margin="20px 0 0 0">
              <Button
                type="button"
                height="40px"
                width="auto"
                padding="0 10px"
                disabled={isCellDeletePending}
                backgroundColor="grey"
                backgroundColorDisabled="grey"
                onClick={handleOnDelCancel}
              >
                <TextBox tag="span" desktopSize={16} mobileSize={16} fontWeight={400} color="white">
                  Cancel
                </TextBox>
              </Button>

              <Button
                type="button"
                height="40px"
                width="auto"
                padding="0 10px"
                disabled={isCellDeletePending}
                backgroundColor="red"
                backgroundColorDisabled="grey"
                onClick={handleOnDelConfirm}
              >
                <TextBox tag="span" desktopSize={16} mobileSize={16} fontWeight={400} color="white">
                  Yes, delete
                </TextBox>
              </Button>
            </Grid>
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
