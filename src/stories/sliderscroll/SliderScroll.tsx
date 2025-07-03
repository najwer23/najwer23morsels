import { useEffect, useRef, useState, MouseEvent, TouchEvent, ReactNode } from 'react';
import { Button } from '../button';
import styles from './SliderScroll.module.css';
import { useWindowSize } from '../hooks';
import { IconArrowLeft, IconArrowRight } from '../icons';

interface SliderScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  arrowLeftIcon?: ReactNode;
  arrowRightIcon?: ReactNode;
  gap?: string;
}

export const SliderScroll: React.FC<SliderScrollProps> = ({ children, className, gap = '5px' }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [showArrowLeft, setShowArrowLeft] = useState<boolean>(false);
  const [showArrowRight, setShowArrowRight] = useState<boolean>(false);
  const { width } = useWindowSize();

  const isUserScrolling = useRef(false);
  const userScrollTimeout = useRef<number | null>(null);

  const getChildWidth = () => {
    if (!carouselRef.current || !carouselRef.current.childNodes[1]) return 0;
    const child = carouselRef.current.childNodes[1] as HTMLElement;
    const style = getComputedStyle(child);
    return parseInt(style.marginLeft) + parseInt(style.marginRight) + child.offsetWidth + Number(gap.slice(0, -2));
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      handleScroll();
    }, 1);

    return () => clearTimeout(timerId);
  }, [width]);

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

  const smoothScrollTo = (
    element: HTMLElement,
    target: number,
    duration: number = 400,
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

    const targetScrollLeft = Math.max(carouselRef.current.scrollLeft - scrollAmount, 0);

    smoothScrollTo(carouselRef.current, targetScrollLeft, 900, true);
  };

  const slideRight = () => {
    if (!carouselRef.current) return;

    const childWidth = getChildWidth();
    if (childWidth === 0) return;

    const visibleCount = Math.floor(carouselRef.current.offsetWidth / childWidth);
    const scrollAmount = visibleCount * childWidth;

    const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    const targetScrollLeft = Math.min(carouselRef.current.scrollLeft + scrollAmount, maxScrollLeft);

    smoothScrollTo(carouselRef.current, targetScrollLeft, 900, true);
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

  const onTouchMove = (e: TouchEvent) => {
    markUserScrolling();
  };

  return (
    <div
      className={[styles.n23mSliderScroll, 'n23mSliderScroll', className].filter(Boolean).join(' ')}
      style={
        {
          '--sliderscroll-gap': gap,
        } as React.CSSProperties
      }>
      <div
        className={styles.n23mSliderScrollTrack}
        ref={carouselRef}
        onClick={onClick}
        onScroll={handleScroll}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseUp}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}>
        {children}
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
            disabled={!showArrowLeft}>
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
            disabled={!showArrowRight}>
            <IconArrowRight width={24} height={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

SliderScroll.displayName = 'SliderScroll';
