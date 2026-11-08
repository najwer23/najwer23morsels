import { SelectOption } from '../Select';
import { ValidatorOptions } from '../validator';

export type TableRow = Record<string, string | number | boolean> & {
  id: string | number;
};

type TableColumnBase = {
  cellText: string;
  cellName: string;
  disabledAdd?: boolean;
  disabledEdit?: boolean;
  validatorOptions?: ValidatorOptions;
  thAlign?: 'left' | 'right' | 'center';
  tdAlign?: 'left' | 'right' | 'center';
};

export type TableColumn =
  | (TableColumnBase & {
      cellType: 'select';
      options: SelectOption[];
      initialValue?: SelectOption;
    })
  | (TableColumnBase & {
      cellType: 'date';
      options?: never;
      initialValue?: '' | `${number}-${number}-${number}`;
    })
  | (TableColumnBase & {
      cellType: 'text' | 'number';
      options?: never;
      initialValue?: never;
    })
  | (TableColumnBase & {
      cellType: 'currency';
      localeCode?: 'pl-PL';
      currency?: 'PLN' | 'USD';
    });

export interface TableRowEdit {
  onRowEdit?: (row: Record<string, string>) => void;
  isRowEditError?: boolean;
  isRowEditPending?: boolean;
  isRowEditSuccess?: boolean;
  rowEditErrorMsg?: string;
  rowEditSuccessMsg?: string;
}

export interface TableRowDelete {
  onRowDelete?: (id: TableRow['id']) => void;
  isRowDeleteError?: boolean;
  isRowDeletePending?: boolean;
  isRowDeleteSuccess?: boolean;
  rowDeleteErrorMsg?: string;
  rowDeleteSuccessMsg?: string;
}
