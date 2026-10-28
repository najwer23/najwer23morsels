import { TextBox } from '../TextBox';
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
                  <td key={col.cellName}>
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
