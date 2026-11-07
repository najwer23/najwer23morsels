import { type RefObject, useEffect } from 'react';

export function useScrollShadows(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      el.dataset.shadowStart = String(el.scrollLeft > 0);
      // 1px tolerance for subpixel rounding
      el.dataset.shadowEnd = String(maxScroll - el.scrollLeft > 1);
    };

    update();
    el.addEventListener('scroll', update, { passive: true });

    // re-check when the wrapper or the table changes size (loading, new rows, resize)
    const observer = new ResizeObserver(update);
    observer.observe(el);
    const table = el.querySelector('table');
    if (table) observer.observe(table);

    return () => {
      el.removeEventListener('scroll', update);
      observer.disconnect();
    };
  }, [ref]);
}
