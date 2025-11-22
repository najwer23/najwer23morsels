import React from 'react';
import { Loader } from '../loader';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
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
  widthMin?: string;
  widthMax?: string;
  padding?: string | 0;
  margin?: string | 0;
  minHeight?: string;
  loading?: boolean;
  gap?: Gap;
  col?: Col;
  layout: 'columns' | 'container' | 'flex';
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  style?: React.CSSProperties;
}

export const Grid: React.FC<GridProps> = ({
  children,
  widthMin = '0px',
  widthMax = '1920px',
  padding = '0px',
  margin = 'auto',
  layout,
  gap,
  col,
  loading = false,
  justifyContent,
  alignItems,
  minHeight,
  flexWrap,
  className,
  style,
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
            ...getCssVariableStyle({
              '--grid-p': padding,
              '--grid-m': margin,
              '--grid-jc': justifyContent,
              '--grid-cg': gap?.col,
              '--grid-rg': gap?.row,
              '--grid-ai': alignItems,
              '--grid-fw': flexWrap,
              '--grid-mh': minHeight,
              '--grid-wn': widthMin,
              '--grid-wx': widthMax,
            }),
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        {!loading && children}
        {loading && <Loader minHeight={`${minHeight}`} />}
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
          '--grid-cm': col.mobile.toString(),
          '--grid-ct': col.tablet.toString(),
          '--grid-csd': col.smallDesktop.toString(),
          '--grid-cd': col.desktop.toString(),
          '--grid-cg': gap.col,
          '--grid-rg': gap.row,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
};

Grid.displayName = 'Grid';
