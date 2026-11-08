import { useRef, useState } from 'react';
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
import { TableColumn, TableRow, TableRowDelete, TableRowEdit } from './Table.types';
import { useScrollShadows } from './useScrollShadows';

interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
  jsonSchema: {
    cols: TableColumn[];
  };
  jsonData: {
    rows: TableRow[];
  };
  rowEdit?: TableRowEdit;
  rowDelete?: TableRowDelete;
  onRowReset?: () => void;
  isLoading?: boolean;
  tableLoadingHeight?: React.CSSProperties['height'];
}

export const Table: React.FC<TableProps> = ({
  className,
  jsonSchema,
  jsonData,
  rowEdit,
  rowDelete,
  onRowReset,
  isLoading = false,
  style,
  tableLoadingHeight,
  ...props
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useScrollShadows(wrapperRef);

  const [isOpenDialogEditRow, setIsOpenDialogEditRow] = useState(false);
  const [isOpenDialogDeleteRow, setIsOpenDialogDeleteRow] = useState(false);
  const [dialogEditRowKey, setDialogEditRowKey] = useState(0);
  const [selectedRow, setSelectedRow] = useState<TableRow | null>(null);

  const {
    onRowEdit,
    isRowEditError = false,
    isRowEditPending = false,
    isRowEditSuccess = false,
    rowEditErrorMsg,
    rowEditSuccessMsg,
  } = rowEdit ?? {};

  const {
    onRowDelete,
    isRowDeleteError = false,
    isRowDeletePending = false,
    isRowDeleteSuccess = false,
    rowDeleteErrorMsg,
    rowDeleteSuccessMsg,
  } = rowDelete ?? {};

  const isEditable = Boolean(onRowEdit);
  const isDeletable = Boolean(onRowDelete);
  const tableColumns = jsonSchema.cols.filter((col) => col.cellName !== 'id');

  const handleOnSubmit = (form: FormType) => {
    if (!onRowEdit) return;
    if (Object.values(form).some(({ error }) => error)) return;

    const dataForm = Object.fromEntries(Object.entries(form).map(([key, { value }]) => [key, value]));

    onRowEdit(dataForm);
  };

  // "Delete" in the edit dialog -> open the confirmation dialog
  const handleOnDel = () => {
    if (!isDeletable || !selectedRow) return;
    setIsOpenDialogDeleteRow(true);
  };

  // "Yes, delete": only fires the request; the dialog stays open to show the result
  const handleOnDelConfirm = () => {
    if (!onRowDelete || !selectedRow) return;
    onRowDelete(selectedRow.id);
  };

  const handleOnRowReset = () => {
    if (onRowReset) {
      setTimeout(() => onRowReset(), 300);
    }
  };

  // Cancel before deleting: close only the confirmation dialog
  const handleOnDelCancel = () => {
    setIsOpenDialogDeleteRow(false);
    handleOnRowReset();
  };

  // Close after a successful delete: close both dialogs
  const handleOnDelClose = () => {
    setIsOpenDialogDeleteRow(false);
    setIsOpenDialogEditRow(false);
    handleOnRowReset();
  };

  const handleOnClose = () => {
    setIsOpenDialogEditRow(false);
    handleOnRowReset();
  };

  // The click happens on a cell, but it opens the edit dialog for the whole row
  const handleOnCellClick = (row: TableRow) => {
    setSelectedRow(row);
    setIsOpenDialogEditRow(true);
    setDialogEditRowKey((prev) => prev + 1);
  };

  return (
    <div
      className={[styles.n23mTable, 'n23mTable', className].filter(Boolean).join(' ')}
      {...props}
      ref={wrapperRef}
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
        <Dialog open={isOpenDialogEditRow} onCancel={handleOnClose} widthMax="900px">
          <Grid layout="container" widthMin="min(800px, calc(100vw - 25px))" padding="0px 30px 30px 30px" margin="auto">
            <Typography variant="subheading" tag="h2" style={{ margin: '0 0 20px 0' }}>
              Edit Row
            </Typography>

            <Form
              key={dialogEditRowKey}
              onSubmit={handleOnSubmit}
              isError={isRowEditError}
              isPending={isRowEditPending}
              isSuccess={isRowEditSuccess}
              errorMsg={rowEditErrorMsg}
              successMsg={rowEditSuccessMsg}
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
                        type={col.cellType === 'currency' ? 'number' : col.cellType}
                        step={col.cellType === 'currency' ? 0.01 : undefined}
                        defaultValue={col.cellType === 'currency' ? Number(value ?? 0).toFixed(2) : String(value ?? '')}
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
                    disabled={isRowEditPending || isRowDeletePending}
                    onClick={handleOnDel}
                  >
                    <TextBox tag="span" desktopSize={16} mobileSize={16} fontWeight={400} color="inherit">
                      Delete
                    </TextBox>
                  </Button>
                )}

                <Button type="submit" variant="primary" disabled={isRowEditPending || isRowDeletePending}>
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
          open={isOpenDialogDeleteRow}
          onCancel={isRowDeleteSuccess ? handleOnDelClose : handleOnDelCancel}
          widthMax="900px"
        >
          <Grid layout="container" widthMin="min(500px, calc(100vw - 25px))" padding="0px 30px 30px 30px" margin="auto">
            <Typography variant="subheading" tag="h2" style={{ margin: '0 0 20px 0' }}>
              {isRowDeleteSuccess ? 'Deleted' : 'Are you sure?'}
            </Typography>

            {!isRowDeleteSuccess && (
              <Typography variant="body" tag="p" desktopSize={16} mobileSize={16} fontWeight={400}>
                This row will be permanently deleted. This action cannot be undone.
              </Typography>
            )}

            {isRowDeleteError && !isRowDeleteSuccess && (
              <Typography variant="validatorDialogError">{rowDeleteErrorMsg ?? 'Delete failed'}</Typography>
            )}

            {isRowDeleteSuccess && (
              <Typography variant="validatorDialogSuccess">{rowDeleteSuccessMsg ?? 'Row deleted'}</Typography>
            )}

            <Grid
              layout="flex"
              widthMax="100%"
              padding="0"
              justifyContent={isRowDeleteSuccess ? 'flex-end' : 'space-between'}
              margin="20px 0 0 0"
            >
              {isRowDeleteSuccess ? (
                <Button type="button" variant="success" onClick={handleOnDelClose}>
                  <TextBox tag="span" desktopSize={16} mobileSize={16} fontWeight={400} color="inherit">
                    Close
                  </TextBox>
                </Button>
              ) : (
                <>
                  <Button type="button" variant="secondary" disabled={isRowDeletePending} onClick={handleOnDelCancel}>
                    <TextBox tag="span" desktopSize={16} mobileSize={16} fontWeight={400} color="inherit">
                      Cancel
                    </TextBox>
                  </Button>

                  <Button type="button" variant="danger" disabled={isRowDeletePending} onClick={handleOnDelConfirm}>
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
                        {col.cellType === 'currency'
                          ? new Intl.NumberFormat(col.localeCode ?? 'pl-PL', {
                              style: 'currency',
                              currency: col.currency ?? 'PLN',
                            }).format(Number(value ?? 0))
                          : typeof value === 'number'
                            ? value.toFixed(2)
                            : String(value ?? '')}
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
