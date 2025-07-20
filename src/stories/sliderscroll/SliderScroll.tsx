import { useEffect, useRef, useState, useMemo, MouseEvent, TouchEvent, ReactNode, Children, cloneElement } from 'react';
import { Button } from '../button';
import styles from './SliderScroll.module.css';
import { useWindowSize } from '../hooks';
import { IconArrowLeft, IconArrowRight } from '../icons';

interface SliderScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  arrowLeftIcon?: ReactNode;
  arrowRightIcon?: ReactNode;
  gap?: string;
  isCircular?: boolean;
}

export const SliderScroll: React.FC<SliderScrollProps> = ({ children, className, gap = '5px', isCircular = false }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const buttonLeftRef = useRef<HTMLButtonElement | null>(null);
  const buttonRightRef = useRef<HTMLButtonElement | null>(null);
  const showArrowLeftRef = useRef(false);
  const showArrowRightRef = useRef(false);
  const isSliding = useRef(false);
  const isDragging = useRef(false);

  const childrenArray = Children.toArray(children);
  const cloneCount = childrenArray.length;

  const clonesBefore = isCircular
    ? childrenArray.map((child, i) => cloneElement(child as React.ReactElement, { key: `clone-before-${i}` }))
    : [];
  const clonesAfter = isCircular
    ? childrenArray.map((child, i) => cloneElement(child as React.ReactElement, { key: `clone-after-${i}` }))
    : [];

  const childRefs = useRef<(HTMLDivElement | null)[]>([]);
  const allSlides = isCircular ? [...clonesBefore, ...childrenArray, ...clonesAfter] : childrenArray;
  const [childWidths, setChildWidths] = useState<number[]>([]);
  const { width } = useWindowSize();

  useEffect(() => {
    if (!carouselRef.current) return;
    const newWidths = childRefs.current.map((el) => {
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
    if (isCircular && carouselRef.current && cumulativeOffsets.length) {
      carouselRef.current.scrollLeft = (cumulativeOffsets[cloneCount] || 0) - Number(gap.slice(0, -2)) * 2;
    }
    updateControls();
  }, [width, cumulativeOffsets, cloneCount, isCircular]);

  const updateControls = () => {
    if (!carouselRef.current) return;
    if (isCircular) {
      showArrowLeftRef.current = true;
      showArrowRightRef.current = true;
    } else {
      const scrollLeft = carouselRef.current.scrollLeft;
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      showArrowLeftRef.current = scrollLeft > 0;
      showArrowRightRef.current = scrollLeft < maxScrollLeft - 1;
    }
    setButtonsDisabled(isSliding.current);
  };

  const setButtonsDisabled = (disabled: boolean) => {
    if (buttonLeftRef.current) {
      buttonLeftRef.current.disabled = disabled || !showArrowLeftRef.current;
    }
    if (buttonRightRef.current) {
      buttonRightRef.current.disabled = disabled || !showArrowRightRef.current;
    }
  };

  const onScroll = () => {
    if (!carouselRef.current) return;
    if (isCircular && cumulativeOffsets.length && childWidths.length) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const totalLength = cumulativeOffsets[cumulativeOffsets.length - 1] + (childWidths[childWidths.length - 1] || 0);

      const leftBoundary = cumulativeOffsets[cloneCount] || 0;
      const rightBoundary = cumulativeOffsets[cloneCount + childrenArray.length] || totalLength;

      if (scrollLeft < leftBoundary - childWidths[0] / 2) {
        carouselRef.current.scrollLeft =
          scrollLeft + (cumulativeOffsets[childrenArray.length + cloneCount] - leftBoundary);
      } else if (scrollLeft > rightBoundary + childWidths[0] / 2) {
        carouselRef.current.scrollLeft = scrollLeft - (rightBoundary - leftBoundary);
      }
    }
    updateControls();
  };

  const smoothScrollTo = (element: HTMLElement, target: number, duration: number = 300) => {
    if (isSliding.current) return;
    isSliding.current = true;
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
        isSliding.current = false;
        setButtonsDisabled(false);
        updateControls();
      }
    };
    requestAnimationFrame(animateScroll);
  };

  const slideRight = () => {
    if (!carouselRef.current) return;
    if (!cumulativeOffsets.length || !childWidths.length) return;

    const track = carouselRef.current;
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

    if (!isCircular) {
      nextFirstIndex = Math.min(childrenArray.length - visibleCount, nextFirstIndex);
    }

    let targetScrollLeft = cumulativeOffsets[nextFirstIndex] - Number(gap.slice(0, -2)) * 2;
    if (targetScrollLeft < 0) targetScrollLeft = 0;

    if (isCircular) {
      const offsetStart = cumulativeOffsets[cloneCount] || 0;
      targetScrollLeft = offsetStart + targetScrollLeft - (cumulativeOffsets[cloneCount] || 0);
    }

    smoothScrollTo(carouselRef.current, targetScrollLeft, 400);
  };

  const slideLeft = () => {
    if (!carouselRef.current) return;
    if (!cumulativeOffsets.length || !childWidths.length) return;

    const track = carouselRef.current;
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

    smoothScrollTo(carouselRef.current, targetScrollLeft, 400);
  };

  const drag = useRef<{
    isDown: boolean;
    startX: number;
    scrollLeft: number;
    isMove: boolean;
  }>({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    isMove: false,
  });

  const getEventX = (event: MouseEvent | TouchEvent) => {
    if ('pageX' in event) return event.pageX;
    if ('touches' in event) return event.touches[0].pageX;
    return 0;
  };

  const onMouseDown = (e: MouseEvent) => {
    drag.current.isDown = true;
    drag.current.startX = e.pageX - (carouselRef.current?.offsetLeft || 0);
    drag.current.scrollLeft = carouselRef.current?.scrollLeft || 0;
    isDragging.current = true;
    updateTrackDraggingClass();
  };

  const onMouseUp = () => {
    drag.current.isDown = false;
    isDragging.current = false;
    updateTrackDraggingClass();
  };

  const onMouseLeave = () => {
    if (drag.current.isDown) {
      drag.current.isDown = false;
      isDragging.current = false;
      updateTrackDraggingClass();
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!drag.current.isDown) {
      drag.current.isMove = false;
      return;
    }
    e.preventDefault();
    const x = getEventX(e) - (carouselRef.current?.offsetLeft || 0);
    const walk = x - drag.current.startX;
    if (Math.abs(walk) > 5) {
      drag.current.isMove = true;
    }
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = drag.current.scrollLeft - walk;
      updateControls();
    }
  };

  const onClick = (e: MouseEvent) => {
    if (drag.current.isMove) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const updateTrackDraggingClass = () => {
    if (!carouselRef.current) return;
    if (isDragging.current) {
      carouselRef.current.classList.add(styles.dragging);
    } else {
      carouselRef.current.classList.remove(styles.dragging);
    }
  };

  useEffect(() => {
    setButtonsDisabled(false);
  }, []);

  return (
    <div
      className={['n23mSliderScroll', className].filter(Boolean).join(' ')}
      style={
        {
          '--sliderscroll-gap': gap,
          height: 'calc(100% - 60px)',
        } as React.CSSProperties
      }>
      <div className={[styles.n23mSliderScrollWrapper, 'n23mSliderScrollWrapper'].join(' ')}>
        <div
          className={styles.n23mSliderScrollTrack}
          ref={carouselRef}
          onClick={onClick}
          onScroll={onScroll}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          style={{ whiteSpace: 'nowrap' }}>
          {allSlides.map((child, index) => (
            <div
              key={(child as React.ReactElement).key || index}
              ref={(el) => {
                childRefs.current[index] = el;
              }}
              style={{ display: 'inline-block' }}>
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className={[styles.n23mSliderScrollControls, 'n23mSliderScrollControls'].join(' ')}>
        <div className={[styles.n23mSliderScrollControlsButtons, 'n23mSliderScrollControlsButtons'].join(' ')}>
          <Button
            ref={buttonLeftRef}
            height={'50px'}
            width={'50px'}
            backgroundColor="#F2F0EF"
            padding={0}
            title="Prev"
            onClick={slideLeft}
            borderColor="black"
            backgroundColorDisabled="#F2F0EF">
            <IconArrowLeft width={24} height={24} />
          </Button>
          <Button
            ref={buttonRightRef}
            height={'50px'}
            width={'50px'}
            backgroundColor="#F2F0EF"
            padding={0}
            title="Next"
            onClick={slideRight}
            borderColor="black"
            backgroundColorDisabled="#F2F0EF">
            <IconArrowRight width={24} height={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

SliderScroll.displayName = 'SliderScroll';
