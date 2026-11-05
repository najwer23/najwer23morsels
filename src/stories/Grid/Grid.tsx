import React from 'react';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Grid.module.css';
import { GridColumnsProps, GridContainerProps, GridFlexProps, GridSplitProps } from './Grid.types';
import { toTemplate } from './Grid.utils';

export const Grid: React.FC<GridColumnsProps | GridFlexProps | GridContainerProps | GridSplitProps> = ({
  as: Tag = 'div',
  children,
  widthMin = '0px',
  widthMax = '1920px',
  padding = '0px',
  margin = 'auto',
  layout,
  gap,
  col,
  split,
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
  const layoutClass = {
    container: 'n23mGridContainer',
    flex: 'n23mGridFlex',
    columns: 'n23mGridColumns',
    split: 'n23mGridSplit',
  }[layout];

  return (
    <Tag
      className={[styles[layoutClass], layoutClass, className].filter(Boolean).join(' ')}
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
          // split: same fallback behaviour
          '--grid-sm': toTemplate(split?.mobile),
          '--grid-st': toTemplate(split?.tablet),
          '--grid-ssd': toTemplate(split?.smallDesktop),
          '--grid-sdk': toTemplate(split?.desktop),
        }),
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

Grid.displayName = 'Grid';
