import { SelectOption } from '../Select';

export type TableRow = Record<string, string | number | boolean> & {
  id: string | number;
};

export type TableColumn =
  | {
      cellText: string;
      cellName: string;
      cellType: 'select';
      options: SelectOption[];
      initialValue?: SelectOption;
      thAlign?: 'left' | 'right';
      tdAlign?: 'left' | 'right';
    }
  | {
      cellText: string;
      cellName: string;
      cellType: 'date';
      options?: never;
      initialValue?: '' | `${number}-${number}-${number}`;
      thAlign?: 'left' | 'right';
      tdAlign?: 'left' | 'right';
    }
  | {
      cellText: string;
      cellName: string;
      cellType: 'text' | 'number';
      initialValue?: never;
      options?: never;
      thAlign?: 'left' | 'right';
      tdAlign?: 'left' | 'right';
    };

export interface TableCellEdit {
  onCellEdit?: (data: Record<string, unknown>) => void;
  isCellError?: boolean;
  isCellPending?: boolean;
  isCellSuccess?: boolean;
  cellErrorMsg?: string;
  cellSuccessMsg?: string;
}

export interface TableCellDelete {
  onCellDelete?: (id: TableRow['id']) => void;
  isCellDeleteError?: boolean;
  isCellDeletePending?: boolean;
  isCellDeleteSuccess?: boolean;
  cellDeleteErrorMsg?: string;
}
