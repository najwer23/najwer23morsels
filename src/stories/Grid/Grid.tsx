import React from 'react';
import { Loader } from '../Loader';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Grid.module.css';

interface Gap {
  col?: string;
  row?: string;
}

interface Col {
  mobile: number;
  tablet: number;
  smallDesktop: number;
  desktop: number;
}

type GridBase = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & {
    as?: React.ElementType;
    widthMin?: React.CSSProperties['width'];
    widthMax?: React.CSSProperties['width'];
    padding?: React.CSSProperties['padding'];
    margin?: React.CSSProperties['margin'];
    minHeight?: React.CSSProperties['minHeight'];
    loading?: boolean;
    loaderTextPosition?: React.ComponentProps<typeof Loader>['textPosition'];
    style?: React.CSSProperties;
  }
>;

export type GridContainerProps = GridBase & {
  layout: 'container';
  gap?: Gap;
  justifyContent?: never;
  alignItems?: never;
  flexWrap?: never;
  col?: never;
  flexDirection?: never;
};

export type GridFlexProps = GridBase & {
  layout: 'flex';
  gap?: Gap;
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  flexWrap?: React.CSSProperties['flexWrap'];
  col?: never;
  flexDirection?: React.CSSProperties['flexDirection'];
};

export type GridColumnsProps = GridBase & {
  layout: 'columns';
  gap?: Gap;
  col: Partial<Col>;
  justifyContent?: never;
  alignItems?: never;
  flexWrap?: never;
  flexDirection?: never;
};

const LAYOUT_CLASS = {
  container: 'n23mGridContainer',
  flex: 'n23mGridFlex',
  columns: 'n23mGridColumns',
} as const;

export const Grid: React.FC<GridColumnsProps | GridFlexProps | GridContainerProps> = ({
  as: Tag = 'div',
  children,
  widthMin = '0px',
  widthMax = '1920px',
  padding = '0px',
  margin = 'auto',
  layout,
  gap,
  col,
  loading = false,
  loaderTextPosition = 'center',
  justifyContent,
  alignItems,
  minHeight,
  flexWrap,
  className,
  flexDirection,
  style,
  ...props
}) => {
  const layoutClass = LAYOUT_CLASS[layout];

  return (
    <Tag
      className={[
        styles[layoutClass],
        layoutClass,
        loading && styles.n23mGridLoading,
        loading && 'n23mGridLoading',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
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
          '--grid-fd': flexDirection,
          // columns: undefined values are skipped, CSS falls back to the smaller breakpoint
          '--grid-cm': col?.mobile?.toString(),
          '--grid-ct': col?.tablet?.toString(),
          '--grid-csd': col?.smallDesktop?.toString(),
          '--grid-cd': col?.desktop?.toString(),
        }),
        ...style,
      }}
      {...props}
    >
      {loading ? (
        <Loader minHeight={minHeight !== undefined ? `${minHeight}` : 'auto'} textPosition={loaderTextPosition} />
      ) : (
        children
      )}
    </Tag>
  );
};

Grid.displayName = 'Grid';
