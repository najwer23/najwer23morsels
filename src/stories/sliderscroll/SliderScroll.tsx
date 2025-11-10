import {
  Children,
  cloneElement,
  MouseEvent,
  ReactNode,
  TouchEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Button } from '../button';
import { useWindowSize } from '../hooks';
import { IconArrowLeft, IconArrowRight } from '../icons';
import styles from './SliderScroll.module.css';

interface SliderScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  arrowLeftIcon?: ReactNode;
  arrowRightIcon?: ReactNode;
  gap?: string;
  isCircular?: boolean;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
}

export const SliderScroll: React.FC<SliderScrollProps> = ({
  children,
  className,
  gap = '5px',
  isCircular = false,
  autoPlay = false,
  autoPlaySpeed = 0.5,
}) => {
  const refs = {
    carousel: useRef<HTMLDivElement | null>(null),
    buttonLeft: useRef<HTMLButtonElement | null>(null),
    buttonRight: useRef<HTMLButtonElement | null>(null),

    showArrowLeft: useRef(false),
    showArrowRight: useRef(false),
    isSliding: useRef(false),
    animationFrameId: useRef<number | null>(null),
    isHovered: useRef(false),

    drag: useRef<{
      isDown: boolean;
      startX: number;
      scrollLeft: number;
      isMove: boolean;
      isDragging: boolean;
    }>({
      isDown: false,
      startX: 0,
      scrollLeft: 0,
      isMove: false,
      isDragging: false,
    }),

    childRefs: useRef<(HTMLDivElement | null)[]>([]),
  };

  const childrenArray = Children.toArray(children);
  const cloneCount = childrenArray.length;

  const clonesBefore = isCircular
    ? childrenArray.map((child, i) => cloneElement(child as React.ReactElement, { key: `cb-${i}` }))
    : [];
  const clonesAfter = isCircular
    ? childrenArray.map((child, i) => cloneElement(child as React.ReactElement, { key: `ca-${i}` }))
    : [];

  const allSlides = isCircular ? [...clonesBefore, ...childrenArray, ...clonesAfter] : childrenArray;

  const [childWidths, setChildWidths] = useState<number[]>([]);

  const { width } = useWindowSize();

  useEffect(() => {
    if (!refs.carousel.current) return;
    const newWidths = refs.childRefs.current.map((el) => {
      if (!el) return 0;
      const style = getComputedStyle(el);
      const marginLeft = parseFloat(style.marginLeft) || 0;
      const marginRight = parseFloat(style.marginRight) || 0;
      return el.offsetWidth + marginLeft + marginRight + Number(gap.slice(0, -2));
    });
    setChildWidths(newWidths);
  }, [children, width, gap]);

  const cumulativeOffsets = useMemo(() => {
    const offsets: number[] = [];
    let sum = 0;
    for (const w of childWidths) {
      offsets.push(sum);
      sum += w;
    }
    return offsets;
  }, [childWidths]);

  useEffect(() => {
    if (isCircular && refs.carousel.current && cumulativeOffsets.length) {
      refs.carousel.current.scrollLeft = (cumulativeOffsets[cloneCount] || 0) - Number(gap.slice(0, -2)) * 2;
    }
    updateControls();
  }, [width, cumulativeOffsets, cloneCount, isCircular]);

  useEffect(() => {
    setButtonsDisabled(false);
  }, []);

  useEffect(() => {
    if (!isCircular) return;

    if (!autoPlay) {
      if (refs.animationFrameId.current) {
        cancelAnimationFrame(refs.animationFrameId.current);
        refs.animationFrameId.current = null;
      }
      return;
    }

    let timeoutId: NodeJS.Timeout;

    const step = () => {
      if (!refs.carousel.current) return;

      if (refs.isSliding.current || refs.isHovered.current) {
        refs.animationFrameId.current = requestAnimationFrame(step);
        return;
      }

      const track = refs.carousel.current;
      let newScrollLeft = track.scrollLeft + autoPlaySpeed;

      if (isCircular && cumulativeOffsets.length && childWidths.length) {
        const totalLength =
          cumulativeOffsets[cumulativeOffsets.length - 1] + (childWidths[childWidths.length - 1] || 0);
        const leftBoundary = cumulativeOffsets[cloneCount] || 0;
        const rightBoundary = cumulativeOffsets[cloneCount + childrenArray.length] || totalLength;

        if (newScrollLeft > rightBoundary + childWidths[0] / 2) {
          newScrollLeft = newScrollLeft - (rightBoundary - leftBoundary);
        }
      }

      track.scrollLeft = newScrollLeft;
      updateControls();
      refs.animationFrameId.current = requestAnimationFrame(step);
    };

    timeoutId = setTimeout(() => {
      refs.animationFrameId.current = requestAnimationFrame(step);
    }, 500);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (refs.animationFrameId.current) {
        cancelAnimationFrame(refs.animationFrameId.current);
        refs.animationFrameId.current = null;
      }
    };
  }, [autoPlay, autoPlaySpeed, isCircular, cumulativeOffsets, childWidths, cloneCount, childrenArray.length]);

  const updateControls = () => {
    if (!refs.carousel.current) return;

    if (isCircular) {
      refs.showArrowLeft.current = true;
      refs.showArrowRight.current = true;
    } else {
      const scrollLeft = refs.carousel.current.scrollLeft;
      const maxScrollLeft = refs.carousel.current.scrollWidth - refs.carousel.current.clientWidth;
      refs.showArrowLeft.current = scrollLeft > 0;
      refs.showArrowRight.current = scrollLeft < maxScrollLeft - 1;
    }

    setButtonsDisabled(refs.isSliding.current);
  };

  const setButtonsDisabled = (disabled: boolean) => {
    if (refs.buttonLeft.current) {
      refs.buttonLeft.current.disabled = disabled || !refs.showArrowLeft.current;
    }
    if (refs.buttonRight.current) {
      refs.buttonRight.current.disabled = disabled || !refs.showArrowRight.current;
    }
  };

  const onScroll = () => {
    if (!refs.carousel.current) return;
    if (isCircular && cumulativeOffsets.length && childWidths.length) {
      const scrollLeft = refs.carousel.current.scrollLeft;
      const totalLength = cumulativeOffsets[cumulativeOffsets.length - 1] + (childWidths[childWidths.length - 1] || 0);

      const leftBoundary = cumulativeOffsets[cloneCount] || 0;
      const rightBoundary = cumulativeOffsets[cloneCount + childrenArray.length] || totalLength;

      if (scrollLeft < leftBoundary - childWidths[0] / 2) {
        refs.carousel.current.scrollLeft =
          scrollLeft + (cumulativeOffsets[childrenArray.length + cloneCount] - leftBoundary);
      } else if (scrollLeft > rightBoundary + childWidths[0] / 2) {
        refs.carousel.current.scrollLeft = scrollLeft - (rightBoundary - leftBoundary);
      }
    }
    updateControls();
  };

  const smoothScrollTo = (element: HTMLElement, target: number, duration: number = 300) => {
    if (refs.isSliding.current) return;
    refs.isSliding.current = true;
    setButtonsDisabled(true);
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();
    const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      element.scrollLeft = start + change * easeInOutCubic(progress);
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        refs.isSliding.current = false;
        setButtonsDisabled(false);
        updateControls();
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // Slide right logic: calculate next scroll position
  const slideRight = useCallback(() => {
    if (!refs.carousel.current) return;
    if (!cumulativeOffsets.length || !childWidths.length) return;

    const track = refs.carousel.current;
    const viewportWidth = track.offsetWidth;
    const currentScroll = track.scrollLeft;

    let firstVisibleIndex = cumulativeOffsets.findIndex((offset, i) => offset > currentScroll);
    if (firstVisibleIndex === -1) {
      firstVisibleIndex = cumulativeOffsets.length - 1;
    } else if (firstVisibleIndex > 0) {
      firstVisibleIndex--;
    }

    let visibleWidth = 0;
    let visibleCount = 0;
    for (let i = firstVisibleIndex; i < cumulativeOffsets.length; i++) {
      visibleWidth += childWidths[i];
      visibleCount++;
      if (visibleWidth >= viewportWidth) {
        break;
      }
    }

    let nextFirstIndex;
    const lastFullyVisibleIndex = firstVisibleIndex + visibleCount - 1;

    const lastRightEdge = cumulativeOffsets[lastFullyVisibleIndex] + childWidths[lastFullyVisibleIndex];
    const viewportRightEdge = currentScroll + viewportWidth;

    if (lastRightEdge > viewportRightEdge + 1) {
      nextFirstIndex = lastFullyVisibleIndex;
    } else {
      nextFirstIndex = firstVisibleIndex + visibleCount;
    }

    let targetScrollLeft = cumulativeOffsets[nextFirstIndex] - Number(gap.slice(0, -2)) * 2;
    if (targetScrollLeft < 0) targetScrollLeft = 0;

    if (isCircular) {
      const offsetStart = cumulativeOffsets[cloneCount] || 0;
      targetScrollLeft = offsetStart + targetScrollLeft - (cumulativeOffsets[cloneCount] || 0);
    }

    smoothScrollTo(refs.carousel.current, targetScrollLeft, 400);
  }, [cumulativeOffsets, childWidths, gap, cloneCount, isCircular, childrenArray.length]);

  const slideLeft = useCallback(() => {
    if (!refs.carousel.current) return;
    if (!cumulativeOffsets.length || !childWidths.length) return;

    const track = refs.carousel.current;
    const viewportWidth = track.offsetWidth;
    const currentScroll = track.scrollLeft;

    let approxFirstVisibleIndex = 0;
    for (let i = 0; i < cumulativeOffsets.length; i++) {
      if (cumulativeOffsets[i] > currentScroll) {
        approxFirstVisibleIndex = i - 1;
        break;
      }
    }
    if (approxFirstVisibleIndex < 0) approxFirstVisibleIndex = 0;

    let visibleWidth = 0;
    let visibleCount = 0;
    for (let i = approxFirstVisibleIndex; i >= 0; i--) {
      visibleWidth += childWidths[i];
      if (visibleWidth <= viewportWidth) visibleCount++;
      else break;
    }

    let newLastIndex = approxFirstVisibleIndex;
    if (!isCircular) {
      newLastIndex = Math.max(visibleCount - 1, newLastIndex);
    }

    let targetScrollLeft = cumulativeOffsets[newLastIndex] + childWidths[newLastIndex] - viewportWidth;
    if (targetScrollLeft < 0) targetScrollLeft = 0;

    if (isCircular) {
      const offsetStart = cumulativeOffsets[cloneCount] || 0;
      targetScrollLeft =
        offsetStart + targetScrollLeft - (cumulativeOffsets[cloneCount] || 0) + Number(gap.slice(0, -2));
    }

    smoothScrollTo(refs.carousel.current, targetScrollLeft, 400);
  }, [cumulativeOffsets, childWidths, gap, cloneCount, isCircular]);

  const getEventX = (event: MouseEvent | TouchEvent) => {
    if ('pageX' in event) return event.pageX;
    if ('touches' in event) return event.touches[0].pageX;
    return 0;
  };

  const onMouseDown = (e: MouseEvent) => {
    refs.drag.current.isDown = true;
    refs.drag.current.startX = e.pageX - (refs.carousel.current?.offsetLeft || 0);
    refs.drag.current.scrollLeft = refs.carousel.current?.scrollLeft || 0;
    refs.drag.current.isDragging = true;
    updateTrackDraggingClass();
  };

  const onMouseUp = () => {
    refs.drag.current.isDown = false;
    refs.drag.current.isDragging = false;
    updateTrackDraggingClass();
  };

  const onMouseLeave = () => {
    if (refs.drag.current.isDown) {
      refs.drag.current.isDown = false;
      refs.drag.current.isDragging = false;
      updateTrackDraggingClass();
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!refs.drag.current.isDown) {
      refs.drag.current.isMove = false;
      return;
    }
    e.preventDefault();
    const x = getEventX(e) - (refs.carousel.current?.offsetLeft || 0);
    const walk = x - refs.drag.current.startX;
    if (Math.abs(walk) > 5) {
      refs.drag.current.isMove = true;
    }
    if (refs.carousel.current) {
      refs.carousel.current.scrollLeft = refs.drag.current.scrollLeft - walk;
      updateControls();
    }
  };

  const onClick = (e: MouseEvent) => {
    if (refs.drag.current.isMove) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const updateTrackDraggingClass = () => {
    if (!refs.carousel.current) return;
    if (refs.drag.current.isDragging) {
      refs.carousel.current.classList.add(styles.dragging);
    } else {
      refs.carousel.current.classList.remove(styles.dragging);
    }
  };

  const onMouseEnter = () => {
    refs.isHovered.current = true;
  };

  const onMouseLeaveHandler = () => {
    refs.isHovered.current = false;
  };

  return (
    <div
      className={['n23mSliderScroll', className].filter(Boolean).join(' ')}
      style={
        {
          '--sliderscroll-gap': gap,
          height: 'calc(100% - 60px)',
        } as React.CSSProperties
      }
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className={[styles.n23mSliderScrollWrapper, 'n23mSliderScrollWrapper'].join(' ')}>
        <div
          className={styles.n23mSliderScrollTrack}
          ref={refs.carousel}
          onClick={onClick}
          onScroll={onScroll}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {allSlides.map((child, index) => (
            <div
              key={(child as React.ReactElement).key || index}
              ref={(el) => {
                refs.childRefs.current[index] = el;
              }}
              style={{ display: 'inline-block' }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className={[styles.n23mSliderScrollControls, 'n23mSliderScrollControls'].join(' ')}>
        <div className={[styles.n23mSliderScrollControlsButtons, 'n23mSliderScrollControlsButtons'].join(' ')}>
          <Button
            ref={refs.buttonLeft}
            height={'50px'}
            width={'50px'}
            backgroundColor="#F2F0EF"
            padding={0}
            title="Prev"
            onClick={slideLeft}
            borderColor="black"
            backgroundColorDisabled="#F2F0EF"
          >
            <IconArrowLeft width={24} height={24} />
          </Button>
          <Button
            ref={refs.buttonRight}
            height={'50px'}
            width={'50px'}
            backgroundColor="#F2F0EF"
            padding={0}
            title="Next"
            onClick={slideRight}
            borderColor="black"
            backgroundColorDisabled="#F2F0EF"
          >
            <IconArrowRight width={24} height={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

SliderScroll.displayName = 'SliderScroll';
