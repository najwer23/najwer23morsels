import { useEffect, useRef, useState, MouseEvent, TouchEvent } from 'react';
import { Button } from '../button';
import styles from './Carousel.module.css';
import { useWindowSize } from '../hooks';

export const Carousel: React.FC<{
  children: React.ReactNode;
  arrowLeftIcon?: React.ReactNode;
  arrowRightIcon?: React.ReactNode;
  gap?: string;
}> = ({ children, arrowLeftIcon, arrowRightIcon, gap = '5px' }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [showArrowLeft, setShowArrowLeft] = useState<boolean>(false);
  const [showArrowRight, setShowArrowRight] = useState<boolean>(false);
  const { width } = useWindowSize();

  // Ref to track if user is manually scrolling or dragging
  const isUserScrolling = useRef(false);
  const userScrollTimeout = useRef<number | null>(null);

  const getChildWidth = () => {
    if (!carouselRef.current || !carouselRef.current.childNodes[1]) return 0;
    const child = carouselRef.current.childNodes[1] as HTMLElement;
    const style = getComputedStyle(child);
    return (
      parseInt(style.marginLeft) +
      parseInt(style.marginRight) +
      child.offsetWidth +
      Number(gap.slice(0, -2))
    );
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      handleScroll();
    }, 1);

    return () => clearTimeout(timerId);
  }, [width]);

  // Mark user is scrolling and reset after 150ms inactivity
  const markUserScrolling = () => {
    isUserScrolling.current = true;
    if (userScrollTimeout.current) {
      clearTimeout(userScrollTimeout.current);
    }
    userScrollTimeout.current = window.setTimeout(() => {
      isUserScrolling.current = false;
    }, 150);
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;

    // Mark user scroll interaction
    markUserScrolling();

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
  };

  /**
   * Smooth scroll animation with optional forceAnimate flag.
   * If forceAnimate=true, animation runs even if user is scrolling.
   */
  const smoothScrollTo = (
    element: HTMLElement,
    target: number,
    duration: number = 400,
    forceAnimate: boolean = false
  ) => {
    if (isUserScrolling.current && !forceAnimate) {
      // User is scrolling manually, jump immediately
      element.scrollLeft = target;
      handleScroll();
      return;
    }

    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime: number) => {
      if (isUserScrolling.current && !forceAnimate) {
        // Cancel animation if user scrolls during animation
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

    const targetScrollLeft = Math.max(carouselRef.current.scrollLeft - scrollAmount, 0);

    // Force animation on arrow click
    smoothScrollTo(carouselRef.current, targetScrollLeft, 1000, true);
  };

  const slideRight = () => {
    if (!carouselRef.current) return;

    const childWidth = getChildWidth();
    if (childWidth === 0) return;

    const visibleCount = Math.floor(carouselRef.current.offsetWidth / childWidth);
    const scrollAmount = visibleCount * childWidth;

    const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    const targetScrollLeft = Math.min(carouselRef.current.scrollLeft + scrollAmount, maxScrollLeft);

    // Force animation on arrow click
    smoothScrollTo(carouselRef.current, targetScrollLeft, 1000, true);
  };

  const drag = useRef<{ isDown: boolean; startX: number; scrollLeft: number; isMove: boolean }>({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    isMove: false,
  });

  const getEventKind = (event: MouseEvent | TouchEvent) => {
    if ('pageX' in event) {
      return event.pageX;
    } else if ('touches' in event) {
      return event.touches[0].pageX;
    }
    return 0;
  };

  const onMouseDown = (e: MouseEvent) => {
    drag.current.isDown = true;
    drag.current.startX = e.pageX - (carouselRef.current?.offsetLeft || 0);
    drag.current.scrollLeft = carouselRef.current?.scrollLeft || 0;
  };

  const onClick = (e: MouseEvent) => {
    if (drag.current.isMove) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const onMouseUp = () => {
    drag.current.isDown = false;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!drag.current.isDown) {
      drag.current.isMove = false;
      return;
    }

    e.preventDefault();

    markUserScrolling();

    const x = getEventKind(e) - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - drag.current.startX) * 1;

    if (Math.abs(walk) > 5) {
      drag.current.isMove = true;
    }

    if (carouselRef.current) {
      carouselRef.current.scrollLeft = drag.current.scrollLeft - walk;
    }
  };

  // Mark user scrolling on touch move to cover touch drag
  const onTouchMove = (e: TouchEvent) => {
    markUserScrolling();
  };

  return (
    <div
      className={styles.carouselWrapper}
      style={
        {
          '--gap': gap,
        } as React.CSSProperties
      }
    >
      <div
        className={styles.carousel}
        ref={carouselRef}
        onClick={onClick}
        onScroll={handleScroll}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseUp}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
      >
        <div className={[styles.arrowLeft, showArrowLeft && styles.arrowShow].join(' ')}>
          <Button type={'button'} onClick={slideLeft} height={'40px'} width={'40px'}>
            {!arrowLeftIcon ? <div className={[styles.buttonArrowLeft].join(' ')}></div> : arrowLeftIcon}
          </Button>
        </div>
        {children}
        <div className={[styles.arrowRight, showArrowRight && styles.arrowShow].join(' ')}>
          <Button type={'button'} onClick={slideRight} height={'40px'} width={'40px'}>
            {!arrowRightIcon ? <div className={[styles.buttonArrowRight].join(' ')}></div> : arrowRightIcon}
          </Button>
        </div>
      </div>
    </div>
  );
};

Carousel.displayName = 'Carousel';
