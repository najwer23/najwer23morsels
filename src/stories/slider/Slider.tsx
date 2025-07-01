import React, { useRef, useEffect, useState, useCallback, ReactElement, ReactNode, useLayoutEffect } from 'react';
import styles from './Slider.module.css';
import { TextBox } from '../textbox';
import { Loader } from '../loader';
import { IconArrowLeft, IconArrowRight } from '../icons';
import { Button } from '../button';

type SlideElement = ReactElement<{ className?: string }>;

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  isCircular?: boolean;
  children: ReactNode;
  showControls?: boolean;
  loading?: boolean;
  loaderColor?: string;
}

const cloneSlides = (slides: SlideElement[], count: number, fromStart = false): SlideElement[] =>
  (fromStart ? slides.slice(0, count) : slides.slice(-count)).map((el, i) =>
    React.cloneElement(el, {
      key: `${fromStart ? 'clone-first' : 'clone-last'}-${i}`,
      className: el.props.className,
    }),
  );

export const Slider: React.FC<SliderProps> = ({
  isCircular = false,
  children,
  className,
  showControls = true,
  loading = false,
  loaderColor = 'black',
}) => {
  const childSlides = React.Children.toArray(children).filter(React.isValidElement) as SlideElement[];

  const [currSlide, setCurrSlide] = useState(isCircular && childSlides.length >= 2 ? 2 : 0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const slideWrapperRef = useRef<HTMLDivElement>(null);
  const slideWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resizeTimeout = useRef<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setTouchStartX(e.touches[0].clientX);
      setTouchDeltaX(0);
    }
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      setTouchDeltaX(e.touches[0].clientX - touchStartX);
    }
  };
  const handleTouchEnd = () => {
    const SWIPE_THRESHOLD = 50;
    if (touchDeltaX > SWIPE_THRESHOLD) {
      prevSlide();
    } else if (touchDeltaX < -SWIPE_THRESHOLD) {
      nextSlide();
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
  };

  const slides =
    isCircular && childSlides.length >= 2
      ? [
          ...cloneSlides(childSlides, 2, false),
          ...childSlides.map((el, i) =>
            React.cloneElement(el, {
              key: el.key ?? i,
              className: el.props.className,
            }),
          ),
          ...cloneSlides(childSlides, 2, true),
        ]
      : childSlides.map((el, i) =>
          React.cloneElement(el, {
            key: el.key ?? i,
            className: el.props.className,
          }),
        );

  if (slideWrapperRefs.current.length !== slides.length) {
    slideWrapperRefs.current = Array(slides.length).fill(null);
  }

  useEffect(() => {
    setCurrSlide(isCircular && childSlides.length >= 2 ? 2 : 0);
  }, [isCircular, childSlides.length, loading]);

  const updateDimensions = useCallback(() => {
    const wrapper = slideWrapperRef.current;
    if (!wrapper) return;
    const firstSlideWrapper = slideWrapperRefs.current[0];
    if (!firstSlideWrapper) return;
    const style = window.getComputedStyle(firstSlideWrapper);
    setSlideWidth(firstSlideWrapper.offsetWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight));
    setWrapperWidth(wrapper.offsetWidth);
  }, []);

  useLayoutEffect(() => {
    updateDimensions();

    const handleResize = () => {
      if (resizeTimeout.current !== null) {
        clearTimeout(resizeTimeout.current);
      }
      resizeTimeout.current = window.setTimeout(() => {
        updateDimensions();
        setIsAnimating(true);
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout.current !== null) {
        clearTimeout(resizeTimeout.current);
      }
    };
  }, [updateDimensions, loading]);

  useEffect(() => {
    const SPACING = 10;
    const slideFullWidth = slideWidth + SPACING;

    slideWrapperRefs.current.forEach((slideWrapper, idx) => {
      if (!slideWrapper) return;
      const offset = (idx - currSlide) * slideFullWidth + (wrapperWidth - slideWidth) / 2;
      slideWrapper.style.transition = isAnimating ? 'transform 0.4s cubic-bezier(.4,0,.2,1)' : 'none';
      slideWrapper.style.transform = `translateX(${offset}px)`;
      slideWrapper.style.left = '';
    });
  }, [currSlide, slideWidth, wrapperWidth, isAnimating, slides.length, isCircular, loading]);

  useEffect(() => {
    if (!isAnimating || !isCircular) return;

    const totalSlides = slideWrapperRefs.current.length;
    const lastSlideWrapper = slideWrapperRefs.current[totalSlides - 1];
    if (!lastSlideWrapper) return;

    let timeoutId: number;

    const handleTransitionEnd = () => {
      let newIndex = currSlide;
      if (currSlide === 1) newIndex = totalSlides - 3;
      else if (currSlide === totalSlides - 2) newIndex = 2;

      if (newIndex !== currSlide) {
        setCurrSlide(newIndex);
      }
      setIsAnimating(false);
      lastSlideWrapper.removeEventListener('transitionend', handleTransitionEnd);
      clearTimeout(timeoutId);
    };

    lastSlideWrapper.addEventListener('transitionend', handleTransitionEnd);

    timeoutId = window.setTimeout(() => {
      setIsAnimating(false);
      lastSlideWrapper.removeEventListener('transitionend', handleTransitionEnd);
    }, 500);

    return () => {
      lastSlideWrapper.removeEventListener('transitionend', handleTransitionEnd);
      clearTimeout(timeoutId);
    };
  }, [currSlide, isCircular, isAnimating, loading]);

  useEffect(() => {
    if (!isAnimating) return;

    const firstSlide = slideWrapperRefs.current[0];
    if (!firstSlide) return;

    let timeoutId: number;

    const onTransitionEnd = () => {
      setIsAnimating(false);
      firstSlide.removeEventListener('transitionend', onTransitionEnd);
      clearTimeout(timeoutId);
    };

    firstSlide.addEventListener('transitionend', onTransitionEnd);

    timeoutId = window.setTimeout(() => {
      setIsAnimating(false);
      firstSlide.removeEventListener('transitionend', onTransitionEnd);
    }, 500);

    return () => {
      firstSlide.removeEventListener('transitionend', onTransitionEnd);
      clearTimeout(timeoutId);
    };
  }, [isAnimating, loading]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (!isCircular) setCurrSlide((prev) => Math.min(prev + 1, slides.length - 1));
    else setCurrSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (!isCircular) setCurrSlide((prev) => Math.max(prev - 1, 0));
    else setCurrSlide((prev) => prev - 1);
  };

  const getVisualIndex = () => {
    if (!isCircular) return currSlide;
    const total = childSlides.length;
    if (total < 1) return 0;
    return (currSlide - 2 + total) % total;
  };

  {
    showControls;
  }

  return (
    <div
      className={[styles.n23mSlider, 'n23mSlider', className].filter(Boolean).join(' ')}
      style={{
        height: loading ? 'calc(100% - 2px)' : showControls && childSlides.length > 1 ? 'calc(100% - 60px)' : '100%',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      {loading && <Loader loaderColor={loaderColor} />}
      {!loading && (
        <>
          <div className={[styles.n23mSliderContainerSlider, 'n23mSliderContainerSlider'].filter(Boolean).join(' ')}>
            <div className={[styles.n23mSliderSlideWrapper, 'n23mSliderSlideWrapper'].join(' ')} ref={slideWrapperRef}>
              {slides.map((slide, i) => (
                <div
                  key={slide.key ?? i}
                  ref={(el) => {
                    slideWrapperRefs.current[i] = el;
                  }}
                  className={`${styles.n23mSliderSlide}`}
                  style={{
                    width: childSlides.length > 1 ? 'calc(100% - 40px)' : '100%',
                  }}
                  aria-hidden={currSlide !== i}>
                  {slide}
                </div>
              ))}
            </div>
          </div>
          {showControls && childSlides.length > 1 && (
            <div className={[styles.n23mSliderControls, 'n23mSliderControls'].join(' ')}>
              <div className={[styles.n23mSliderCounter, 'n23mSliderCounter'].join(' ')}>
                <TextBox mobileSize={16} desktopSize={16} color="black">
                  {!isCircular
                    ? `${currSlide + 1} / ${childSlides.length}`
                    : `${getVisualIndex() + 1} / ${childSlides.length}`}
                </TextBox>
              </div>

              <div className={[styles.n23mSliderControlsButtons, 'n23mSliderControlsButtons'].join(' ')}>
                <Button
                  height={'50px'}
                  width={'50px'}
                  backgroundColor="#F2F0EF"
                  padding={0}
                  title="Prev"
                  onClick={prevSlide}
                  borderColor="black"
                  backgroundColorDisabled="#F2F0EF"
                  disabled={isAnimating || (!isCircular && currSlide === 0)}>
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
                  onClick={nextSlide}
                  disabled={isAnimating || (!isCircular && currSlide == childSlides.length - 1)}>
                  <IconArrowRight width={24} height={24} />
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

Slider.displayName = 'Slider';
