import { useEffect, useMemo, useRef, useState } from 'react';
import { useWindowSize } from '../hooks';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Masonry.module.css';
import { MasonryColumn } from './MasonryColumn';

interface ChildrenMasonry {
  name: string;
  arrWithElm: React.ReactNode[];
  height: number;
}

interface MasonryProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
  children: React.ReactNode[];
  gap: {
    col: string;
    row: string;
  };
  col: {
    mobile: number;
    smallDesktop: number;
    desktop: number;
    tablet: number;
  };
  delay?: number;
  onGridMasonryLoadEnd?: (isGridMasonryLoadEnd: boolean) => void;
}

export const Masonry: React.FC<MasonryProps> = ({
  children,
  gap,
  col,
  onGridMasonryLoadEnd,
  delay = 10,
  className,
  style,
  ...props
}) => {
  const [itemCnt, setItemCnt] = useState<number>(0);
  const { width } = useWindowSize();

  const isFirstMount = useRef(true);

  const getInitDelay = () => (isFirstMount.current ? 0 : delay);

  const getNumberOfColumns = (width: number) => {
    if (width < 767.98) {
      return col.mobile;
    }

    if (width >= 768.98 && width < 1199.98) {
      return col.tablet;
    }

    if (width >= 1199.98 && width < 1599.98) {
      return col.smallDesktop;
    }

    if (width >= 1599.98) {
      return col.desktop;
    }

    return 3 as never;
  };

  const [numberOfColumns, setNumberOfColumns] = useState<number>(() => {
    return getNumberOfColumns(width);
  });

  const initChildrenMasonry = (numberOfColumns: number) => {
    return Array.from({ length: numberOfColumns }).map((_, i) => {
      return {
        name: `col${i}`,
        arrWithElm: [],
        height: 0,
      };
    });
  };

  const [childrenMasonry, setChildrenMasonry] = useState<ChildrenMasonry[]>(() => {
    return initChildrenMasonry(numberOfColumns);
  });

  const getChildNameWithMinHeight = (childrenMasonry: ChildrenMasonry[]) => {
    return [...childrenMasonry].sort((a, b) => a.height - b.height)[0].name;
  };

  const onHeightChange = (height: number, name: string) => {
    setChildrenMasonry(
      childrenMasonry.map((value) => {
        return value.name === name
          ? {
              ...value,
              height,
            }
          : value;
      }),
    );
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const cols = getNumberOfColumns(width);

      if (cols !== numberOfColumns) {
        setItemCnt(0);
        setNumberOfColumns(cols);
        setChildrenMasonry(initChildrenMasonry(cols));
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [width]);

  const heightsKey = useMemo(() => {
    return childrenMasonry.map(({ height }) => height).join(',');
  }, [childrenMasonry]);

  useEffect(() => {
    const delayMs = getInitDelay();

    const timeoutId = setTimeout(() => {
      if (itemCnt < children.length) {
        const childNameWithMinHeight = getChildNameWithMinHeight(childrenMasonry);
        setChildrenMasonry(
          childrenMasonry.map((value) => {
            return value.name === childNameWithMinHeight
              ? {
                  ...value,
                  arrWithElm: [...value.arrWithElm, children[itemCnt]],
                }
              : value;
          }),
        );
        setItemCnt((cnt) => cnt + 1);

        if (itemCnt === children.length - 1) {
          if (onGridMasonryLoadEnd) {
            onGridMasonryLoadEnd(true);
          }
        }
      }
    }, delayMs);

    return () => clearTimeout(timeoutId);
  }, [heightsKey]);

  useEffect(() => {
    isFirstMount.current = false;
  }, []);

  return (
    <div
      className={[styles.n23mMasonry, 'n23mMasonry', className].filter(Boolean).join(' ')}
      {...props}
      style={
        {
          ...getCssVariableStyle({
            '--masonry-cm': col.mobile,
            '--masonry-ct': col.tablet,
            '--masonry-csd': col.smallDesktop,
            '--masonry-cd': col.desktop,
            '--masonry-cg': gap.col,
            '--masonry-rg': gap.row,
          }),
          ...style,
        } as React.CSSProperties
      }
    >
      {childrenMasonry.map(({ arrWithElm, name }) => (
        <MasonryColumn
          key={'masonry-parent' + name}
          arrWithChildren={arrWithElm}
          onHeightChange={(height) => onHeightChange(height, name)}
          id={name}
        />
      ))}
    </div>
  );
};

Masonry.displayName = 'Masonry';
