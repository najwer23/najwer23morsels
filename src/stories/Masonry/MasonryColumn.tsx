import { Children, ReactNode, useEffect, useRef } from 'react';
import { useResizeObserver } from '../hooks';
import styles from './Masonry.module.css';

export const MasonryColumn: React.FC<{
  arrWithChildren?: ReactNode[];
  onHeightChange: (height: number) => void;
  id: string;
}> = ({ arrWithChildren, onHeightChange, id }) => {
  const colRef = useRef<HTMLDivElement | null>(null);

  const { height = 0 } = useResizeObserver({
    ref: colRef,
  });

  useEffect(() => {
    onHeightChange(height);
  }, [height]);

  return (
    <div ref={colRef} key={id} className={styles.n23mMasonryColumn}>
      {Children.map(arrWithChildren, (child: ReactNode, key) => (
        <div className={styles.n23mMasonryColumnChild} key={id + key}>
          {child}
        </div>
      ))}
    </div>
  );
};

MasonryColumn.displayName = 'MasonryColumn';
