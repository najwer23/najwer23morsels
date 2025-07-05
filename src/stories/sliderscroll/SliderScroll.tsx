import { useEffect, useRef, MouseEvent, TouchEvent, ReactNode, Children, cloneElement, useLayoutEffect } from 'react';
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

  const getChildWidth = () => {
    if (!carouselRef.current || !carouselRef.current.firstElementChild) return 0;
    const child = carouselRef.current.firstElementChild as HTMLElement;
    const style = getComputedStyle(child);
    return (
      child.offsetWidth +
      parseInt(style.marginLeft || '0') +
      parseInt(style.marginRight || '0') +
      Number(gap.slice(0, -2))
    );
  };

  const updateControls = () => {
    if (!carouselRef.current) return;

    if (isCircular) {
      showArrowLeftRef.current = true;
      showArrowRightRef.current = true;
    } else {
      const scrollLeft = carouselRef.current.scrollLeft;
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      showArrowLeftRef.current = scrollLeft > 0;
      showArrowRightRef.current = scrollLeft < maxScrollLeft;
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

  const { width } = useWindowSize();

  useLayoutEffect(() => {
    if (isCircular) {
      const childWidth = getChildWidth();
      if (carouselRef.current && childWidth) {
        carouselRef.current.scrollLeft = childWidth * cloneCount - 20;
      }
    }
    updateControls();
  }, [width, cloneCount, gap, children, isCircular]);

  const onScroll = () => {
    if (!carouselRef.current) return;

    if (isCircular) {
      const childWidth = getChildWidth();
      if (!childWidth) return;

      const maxScrollLeft = childWidth * (cloneCount + childrenArray.length);
      const minScrollLeft = childWidth * cloneCount;
      const scrollLeft = carouselRef.current.scrollLeft;

      if (scrollLeft < minScrollLeft - childWidth / 2) {
        carouselRef.current.scrollLeft = scrollLeft + childWidth * childrenArray.length;
      } else if (scrollLeft > maxScrollLeft + childWidth / 2) {
        carouselRef.current.scrollLeft = scrollLeft - childWidth * childrenArray.length;
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

  const slideLeft = () => {
    if (!carouselRef.current) return;

    const childWidth = getChildWidth();
    if (childWidth === 0) return;

    const visibleCount = Math.floor(carouselRef.current.offsetWidth / childWidth);
    const scrollAmount = visibleCount * childWidth;

    let targetScrollLeft = carouselRef.current.scrollLeft - scrollAmount;

    if (!isCircular) {
      targetScrollLeft = Math.max(targetScrollLeft, 0);
    }

    smoothScrollTo(carouselRef.current, targetScrollLeft, 600);
  };

  const slideRight = () => {
    if (!carouselRef.current) return;

    const childWidth = getChildWidth();
    if (childWidth === 0) return;

    const visibleCount = Math.floor(carouselRef.current.offsetWidth / childWidth);
    const scrollAmount = visibleCount * childWidth;

    let targetScrollLeft = carouselRef.current.scrollLeft + scrollAmount;

    if (!isCircular) {
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      targetScrollLeft = Math.min(targetScrollLeft, maxScrollLeft);
    }

    smoothScrollTo(carouselRef.current, targetScrollLeft, 600);
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

  console.log(222)

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
          onMouseMove={onMouseMove}>
          {isCircular && clonesBefore}
          {childrenArray}
          {isCircular && clonesAfter}
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
