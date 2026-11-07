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

export interface TableCellEdit {
  onCellEdit?: (cell: Record<string, string>) => void;
  isCellEditError?: boolean;
  isCellEditPending?: boolean;
  isCellEditSuccess?: boolean;
  cellEditErrorMsg?: string;
  cellEditSuccessMsg?: string;
}

export interface TableCellDelete {
  onCellDelete?: (id: TableRow['id']) => void;
  isCellDeleteError?: boolean;
  isCellDeletePending?: boolean;
  isCellDeleteSuccess?: boolean;
  cellDeleteErrorMsg?: string;
  cellDeleteSuccessMsg?: string;
}
