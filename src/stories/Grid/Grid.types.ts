import { Loader } from '../Loader';

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

/** A single track (e.g. '1fr' = stacked) or a [first, second] pair of tracks. */
export type SplitTrack = string | [string, string];

export interface SplitCols {
  mobile: SplitTrack;
  tablet: SplitTrack;
  smallDesktop: SplitTrack;
  desktop: SplitTrack;
}

export type GridBase = React.PropsWithChildren<
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
  split?: never;
};

export type GridFlexProps = GridBase & {
  layout: 'flex';
  gap?: Gap;
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  flexWrap?: React.CSSProperties['flexWrap'];
  col?: never;
  flexDirection?: React.CSSProperties['flexDirection'];
  split?: never;
};

export type GridColumnsProps = GridBase & {
  layout: 'columns';
  gap?: Gap;
  col: Partial<Col>;
  justifyContent?: never;
  alignItems?: never;
  flexWrap?: never;
  flexDirection?: never;
  split?: never;
};

export type GridSplitProps = GridBase & {
  layout: 'split';
  gap?: Gap;
  /** Track sizes per breakpoint. Missing breakpoints inherit from the smaller one. */
  split: Partial<SplitCols>;
  alignItems?: React.CSSProperties['alignItems'];
  justifyContent?: never;
  flexWrap?: never;
  flexDirection?: never;
  col?: never;
};
