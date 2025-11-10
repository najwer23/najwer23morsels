import React from 'react';
import { Loader } from '../loader';
import styles from './Grid.module.css';

interface Gap {
  col: string;
  row: string;
}

interface Col {
  mobile: number;
  tablet: number;
  smallDesktop: number;
  desktop: number;
}

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  widthMin?: number;
  widthMax?: number;
  padding?: string | 0;
  margin?: string | 0;
  minHeight?: number;
  loading?: boolean;
  gap?: Gap;
  col?: Col;
  layout: 'columns' | 'container' | 'flex';
  justifyContent?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  widthMin = 0,
  widthMax = 1920,
  padding = '0',
  margin = 'auto',
  layout,
  gap,
  col,
  loading = false,
  justifyContent,
  minHeight,
  className,
  ...props
}) => {
  if (layout === 'container' || layout === 'flex') {
    return (
      <div
        className={[
          styles['n23mGrid' + layout.charAt(0).toUpperCase() + layout.slice(1)],
          'n23mGrid' + layout.charAt(0).toUpperCase() + layout.slice(1),
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={
          {
            '--grid-mh': `${minHeight}px`,
            '--grid-wMin': `${widthMin}px`,
            '--grid-wMax': `${widthMax}px`,
            '--grid-p': padding,
            '--grid-m': margin,
            '--grid-jc': justifyContent,
            '--grid-col-gap': gap?.col || '0px',
            '--grid-row-gap': gap?.row || '0px',
          } as React.CSSProperties
        }
        {...props}
      >
        {!loading && children}
        {loading && <Loader minHeight={minHeight} />}
      </div>
    );
  }

  // layout === 'columns'
  if (!gap || !col) {
    throw new Error('When layout="columns", gap and col props are required');
  }

  return (
    <div
      className={[styles.n23mGridColumns, 'n23mGridColumns', className].filter(Boolean).join(' ')}
      style={
        {
          '--grid-col-mobile': col.mobile.toString(),
          '--grid-col-tablet': col.tablet.toString(),
          '--grid-col-small-desktop': col.smallDesktop.toString(),
          '--grid-col-desktop': col.desktop.toString(),
          '--grid-col-gap': gap.col,
          '--grid-row-gap': gap.row,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
};

Grid.displayName = 'Grid';
