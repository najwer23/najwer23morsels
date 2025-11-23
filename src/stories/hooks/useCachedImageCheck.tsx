import { useCallback, useEffect, useRef, useState } from 'react';

export const useCachedImageCheck = (src?: string, timeout = 25) => {
  const [isCached, setIsCached] = useState<boolean | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const promiseTimeout = useCallback((ms: number, promise: Promise<any>, timeoutMessage: any = null) => {
    let timerID: ReturnType<typeof setTimeout>;
    const timer = new Promise((_, reject) => {
      timerID = setTimeout(() => reject(timeoutMessage), ms);
    });
    return Promise.race([promise, timer]).finally(() => {
      clearTimeout(timerID);
    });
  }, []);

  useEffect(() => {
    if (!src) {
      setIsCached(null);
      return;
    }

    const image = new Image();
    imgRef.current = image;

    const imageComplete = new Promise<HTMLImageElement>((resolve, reject) => {
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('Image load error'));
      image.src = src;
    });

    promiseTimeout(timeout, imageComplete, 'Image not loaded from cache')
      .then(() => setIsCached(true))
      .catch(() => setIsCached(false))
      .finally(() => {
        imgRef.current = null;
      });

    return () => {
      if (imgRef.current) {
        imgRef.current.onload = null;
        imgRef.current.onerror = null;
        imgRef.current = null;
      }
    };
  }, [src, timeout, promiseTimeout]);

  return isCached;
};
