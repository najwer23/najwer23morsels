import { useLayoutEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export const useWindowSize = (delay: number = 0): WindowSize => {
  const [size, setSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useLayoutEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const updateSize = () => {
      if (delay === 0) {
        if (size.width !== window.innerWidth) {
          setSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      }

      if (delay !== 0) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
          if (size.width !== window.innerWidth) {
            setSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }
        }, delay);
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => {
      window.removeEventListener('resize', updateSize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [size, delay]);

  return size;
};
