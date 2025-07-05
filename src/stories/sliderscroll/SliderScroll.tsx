import { useEffect, useRef, useState, MouseEvent, TouchEvent, ReactNode, Children, cloneElement } from 'react';
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
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(false);
  const { width } = useWindowSize();
  const [isDragging, setIsDragging] = useState(false);

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

  const handleScroll = () => {
    if (!carouselRef.current) return;

    if (isCircular) {
      setShowArrowLeft(true);
      setShowArrowRight(true);
    } else {
      const scrollLeft = carouselRef.current.scrollLeft;
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      if (scrollLeft <= 0) {
        setShowArrowLeft(false);
        setShowArrowRight(maxScrollLeft !== 0);
      } else if (scrollLeft >= maxScrollLeft) {
        setShowArrowLeft(true);
        setShowArrowRight(false);
      } else {
        setShowArrowLeft(true);
        setShowArrowRight(true);
      }
    }
  };

  useEffect(() => {
    if (isCircular) {
      const childWidth = getChildWidth();
      if (carouselRef.current && childWidth) {
        carouselRef.current.scrollLeft = childWidth * cloneCount;
      }
    }
    handleScroll();
  }, [width, cloneCount, gap, children, isCircular]);

  const isUserScrolling = useRef(false);
  const userScrollTimeout = useRef<number | null>(null);

  const markUserScrolling = () => {
    isUserScrolling.current = true;
    if (userScrollTimeout.current) clearTimeout(userScrollTimeout.current);
    userScrollTimeout.current = window.setTimeout(() => {
      isUserScrolling.current = false;
    }, 150);
  };

  const onScroll = () => {
    if (!carouselRef.current) return;
    markUserScrolling();

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

      setShowArrowLeft(true);
      setShowArrowRight(true);
    } else {
      handleScroll();
    }
  };

  const smoothScrollTo = (
    element: HTMLElement,
    target: number,
    duration: number = 300,
    forceAnimate: boolean = false,
  ) => {
    if (isUserScrolling.current && !forceAnimate) {
      element.scrollLeft = target;
      handleScroll();
      return;
    }

    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const animateScroll = (currentTime: number) => {
      if (isUserScrolling.current && !forceAnimate) {
        element.scrollLeft = target;
        handleScroll();
        return;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      element.scrollLeft = start + change * easeInOutCubic(progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        handleScroll();
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

    smoothScrollTo(carouselRef.current, targetScrollLeft, 600, true);
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

    smoothScrollTo(carouselRef.current, targetScrollLeft, 600, true);
  };

  const drag = useRef<{ isDown: boolean; startX: number; scrollLeft: number; isMove: boolean }>({
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
    setIsDragging(true);
  };

  const onMouseUp = () => {
    drag.current.isDown = false;
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    if (drag.current.isDown) {
      drag.current.isDown = false;
      setIsDragging(false);
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!drag.current.isDown) {
      drag.current.isMove = false;
      return;
    }

    e.preventDefault();

    markUserScrolling();

    const x = getEventX(e) - (carouselRef.current?.offsetLeft || 0);
    const walk = x - drag.current.startX;

    if (Math.abs(walk) > 5) {
      drag.current.isMove = true;
    }

    if (carouselRef.current) {
      carouselRef.current.scrollLeft = drag.current.scrollLeft - walk;
    }
  };

  const onClick = (e: MouseEvent) => {
    if (drag.current.isMove) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const onTouchMove = (e: TouchEvent) => {
    markUserScrolling();
  };

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
          className={[styles.n23mSliderScrollTrack, isDragging ? styles.dragging : ''].join(' ')}
          ref={carouselRef}
          onClick={onClick}
          onScroll={onScroll}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}>
          {isCircular && clonesBefore}
          {childrenArray}
          {isCircular && clonesAfter}
        </div>
      </div>
      <div className={[styles.n23mSliderScrollControls, 'n23mSliderScrollControls'].join(' ')}>
        <div className={[styles.n23mSliderScrollControlsButtons, 'n23mSliderScrollControlsButtons'].join(' ')}>
          <Button
            height={'50px'}
            width={'50px'}
            backgroundColor="#F2F0EF"
            padding={0}
            title="Prev"
            onClick={slideLeft}
            borderColor="black"
            backgroundColorDisabled="#F2F0EF"
            disabled={!showArrowLeft && !isCircular}>
            <IconArrowLeft width={24} height={24} />
          </Button>
          <Button
            height={'50px'}
            width={'50px'}
            backgroundColor="#F2F0EF"
            padding={0}
            title="Next"
            borderColor="black"
            backgroundColorDisabled="#F2F0EF"
            onClick={slideRight}
            disabled={!showArrowRight && !isCircular}>
            <IconArrowRight width={24} height={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

SliderScroll.displayName = 'SliderScroll';
