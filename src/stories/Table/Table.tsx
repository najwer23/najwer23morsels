import { useState } from 'react';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { Dialog } from '../Dialog';
import { Form, FormType } from '../Form';
import { Grid } from '../Grid';
import { Input } from '../Input';
import { LoaderDots } from '../LoaderDots';
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
  isLoading?: boolean;
  tableLoadingHeight?: React.CSSProperties['height'];
}

export const Table: React.FC<TableProps> = ({
  className,
  jsonSchema,
  jsonData,
  cellEdit,
  cellDelete,
  onCellReset,
  isLoading = false,
  style,
  tableLoadingHeight,
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
    cellDeleteSuccessMsg,
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

  // "Yes, delete": only fires the request; the dialog stays open to show the result
  const handleOnDelConfirm = () => {
    if (!onCellDelete || !selectedRow) return;
    onCellDelete(selectedRow.id);
  };

  const handleOnCellReset = () => {
    if (onCellReset) {
      setTimeout(() => onCellReset(), 300);
    }
  };

  // Cancel before deleting: close only the confirmation dialog
  const handleOnDelCancel = () => {
    setIsOpenDialogDeleteCell(false);
    handleOnCellReset();
  };

  // Close after a successful delete: close both dialogs
  const handleOnDelClose = () => {
    setIsOpenDialogDeleteCell(false);
    setIsOpenDialogEditCell(false);
    handleOnCellReset();
  };

  const handleOnClose = () => {
    setIsOpenDialogEditCell(false);
    handleOnCellReset();
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
          ...getCssVariableStyle({
            '--table-loading-height': tableLoadingHeight,
          }),
          ...style,
        } as React.CSSProperties
      }
    >
      {isEditable && (
        <Dialog open={isOpenDialogEditCell} onCancel={handleOnClose} widthMax="900px">
          <Grid layout="container" widthMin="min(800px, calc(100vw - 25px))" padding="0px 30px 30px 30px" margin="auto">
            <Typography variant="subheading" tag="h2" style={{ margin: '0 0 20px 0' }}>
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
                    const value = selectedRow[col.cellName];

                    if (col.cellType === 'date') {
                      const initialValue = (value as '' | `${number}-${number}-${number}`) || col.initialValue;

                      return (
                        <Calendar
                          key={col.cellName}
                          label={col.cellText}
                          name={col.cellName}
                          disabled={col.disabledEdit}
                          initialValue={initialValue}
                          placeholder={col.cellText}
                          validatorOptions={col.validatorOptions}
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
                          disabled={col.disabledEdit}
                          initialValue={selectedOption}
                          validatorOptions={col.validatorOptions}
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
                        disabled={col.disabledEdit}
                        placeholder={col.cellText}
                        validatorOptions={col.validatorOptions}
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
                    variant="danger"
                    disabled={isCellEditPending || isCellDeletePending}
                    onClick={handleOnDel}
                  >
                    <TextBox tag="span" desktopSize={16} mobileSize={16} fontWeight={400} color="inherit">
                      Delete
                    </TextBox>
                  </Button>
                )}

                <Button type="submit" variant="primary" disabled={isCellEditPending || isCellDeletePending}>
                  <TextBox tag="span" desktopSize={16} mobileSize={16} fontWeight={400} color="inherit">
                    Save changes
                  </TextBox>
                </Button>
              </Grid>
            </Form>
          </Grid>
        </Dialog>
      )}

      {isDeletable && (
        <Dialog
          open={isOpenDialogDeleteCell}
          onCancel={isCellDeleteSuccess ? handleOnDelClose : handleOnDelCancel}
          widthMax="900px"
        >
          <Grid layout="container" widthMin="min(500px, calc(100vw - 25px))" padding="0px 30px 30px 30px" margin="auto">
            <Typography variant="subheading" tag="h2" style={{ margin: '0 0 20px 0' }}>
              {isCellDeleteSuccess ? 'Deleted' : 'Are you sure?'}
            </Typography>

            {!isCellDeleteSuccess && (
              <Typography variant="body" tag="p" desktopSize={16} mobileSize={16} fontWeight={400}>
                This row will be permanently deleted. This action cannot be undone.
              </Typography>
            )}

            {isCellDeleteError && !isCellDeleteSuccess && (
              <Typography variant="validatorDialogError">{cellDeleteErrorMsg ?? 'Delete failed'}</Typography>
            )}

            {isCellDeleteSuccess && (
              <Typography variant="validatorDialogSuccess">{cellDeleteSuccessMsg ?? 'Row deleted'}</Typography>
            )}

            <Grid
              layout="flex"
              widthMax="100%"
              padding="0"
              justifyContent={isCellDeleteSuccess ? 'flex-end' : 'space-between'}
              margin="20px 0 0 0"
            >
              {isCellDeleteSuccess ? (
                <Button type="button" variant="success" onClick={handleOnDelClose}>
                  <TextBox tag="span" desktopSize={16} mobileSize={16} fontWeight={400} color="inherit">
                    Close
                  </TextBox>
                </Button>
              ) : (
                <>
                  <Button type="button" variant="secondary" disabled={isCellDeletePending} onClick={handleOnDelCancel}>
                    <TextBox tag="span" desktopSize={16} mobileSize={16} fontWeight={400} color="inherit">
                      Cancel
                    </TextBox>
                  </Button>

                  <Button type="button" variant="danger" disabled={isCellDeletePending} onClick={handleOnDelConfirm}>
                    <TextBox tag="span" desktopSize={16} mobileSize={16} fontWeight={400} color="inherit">
                      Yes, delete
                    </TextBox>
                  </Button>
                </>
              )}
            </Grid>
          </Grid>
        </Dialog>
      )}

      <table className={styles.table} aria-busy={isLoading}>
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
          {isLoading ? (
            <tr>
              <td className={styles.loadingCell} colSpan={Math.max(tableColumns.length, 1)}>
                <div className={styles.loadingInner}>
                  <LoaderDots />
                </div>
              </td>
            </tr>
          ) : (
            jsonData.rows.map((row) => (
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
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

Table.displayName = 'Table';
