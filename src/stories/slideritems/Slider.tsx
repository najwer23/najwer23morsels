import React, { useRef, useEffect, useState, useCallback, ReactElement, ReactNode } from 'react';
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

const SLIDE_WIDTH = 325; // px
const SLIDE_SPACING = 10; // px
const SLIDES_TO_SCROLL = 2;

const cloneSlides = (slides: SlideElement[], count: number, fromStart = false): SlideElement[] =>
  (fromStart ? slides.slice(0, count) : slides.slice(-count)).map((el, i) =>
    React.cloneElement(el, {
      key: `${fromStart ? 'clone-first' : 'clone-last'}-${i}`,
      className: el.props.className,
    }),
  );

export const Slider: React.FC<SliderProps> = ({
  isCircular = true,
  children,
  className,
  showControls = true,
  loading = false,
  loaderColor = 'black',
}) => {
  const childSlides = React.Children.toArray(children).filter(React.isValidElement) as SlideElement[];

  // State for current slide, animation, and dimensions
  const [currSlide, setCurrSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const slideWrapperRef = useRef<HTMLDivElement>(null);
  const slideWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resizeTimeout = useRef<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState<number>(0);

  // Calculate slides per view on mount and resize
  const updateDimensions = useCallback(() => {
    const wrapper = slideWrapperRef.current;
    if (!wrapper) return;
    setWrapperWidth(wrapper.offsetWidth);
    setSlidesPerView(Math.max(1, Math.floor(wrapper.offsetWidth / (SLIDE_WIDTH + SLIDE_SPACING))));
  }, []);

  useEffect(() => {
    updateDimensions();
    const handleResize = () => {
      if (resizeTimeout.current !== null) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = window.setTimeout(() => {
        updateDimensions();
        setIsAnimating(true);
      }, 150);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout.current !== null) clearTimeout(resizeTimeout.current);
    };
  }, [updateDimensions, loading]);

  // Clone slides for infinite/circular mode
  const slides =
    isCircular && childSlides.length > 1
      ? [
          ...cloneSlides(childSlides, slidesPerView + 2, false),
          ...childSlides.map((el, i) =>
            React.cloneElement(el, {
              key: el.key ?? i,
              className: el.props.className,
            }),
          ),
          ...cloneSlides(childSlides, slidesPerView + 2, true),
        ]
      : childSlides.map((el, i) =>
          React.cloneElement(el, {
            key: el.key ?? i,
            className: el.props.className,
          }),
        );

  // Set initial slide index to first real slide (after clones)
  useEffect(() => {
    setCurrSlide(isCircular && childSlides.length > 1 ? slidesPerView : 0);
  }, [isCircular, childSlides.length, slidesPerView, loading]);

  // Touch handlers
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

  // Move slides with transform
  useEffect(() => {
    const slideFullWidth = SLIDE_WIDTH + SLIDE_SPACING;
    slideWrapperRefs.current.forEach((slideWrapper, idx) => {
      if (!slideWrapper) return;
      const offset = (idx - currSlide) * slideFullWidth + (wrapperWidth - SLIDE_WIDTH * slidesPerView - SLIDE_SPACING * (slidesPerView - 1)) / 2;
      slideWrapper.style.transition = isAnimating ? 'transform 0.4s cubic-bezier(.4,0,.2,1)' : 'none';
      slideWrapper.style.transform = `translateX(${offset}px)`;
      slideWrapper.style.left = '';
    });
  }, [currSlide, wrapperWidth, isAnimating, slides.length, slidesPerView, loading]);

  // Infinite/circular transition reset
  useEffect(() => {
    if (!isAnimating || !isCircular) return;

    const totalSlides = slides.length;
    let timeoutId: number;

    // Listen for transition end on any slide
    const handleTransitionEnd = () => {
      let newIndex = currSlide;
      if (currSlide < slidesPerView) {
        // If moved to clones at the start, jump to real slides at the end
        newIndex = currSlide + childSlides.length;
      } else if (currSlide >= childSlides.length + slidesPerView) {
        // If moved to clones at the end, jump to real slides at the start
        newIndex = currSlide - childSlides.length;
      }
      if (newIndex !== currSlide) {
        setCurrSlide(newIndex);
      }
      setIsAnimating(false);
      slideWrapperRefs.current.forEach((slide) => {
        if (slide) slide.removeEventListener('transitionend', handleTransitionEnd);
      });
      clearTimeout(timeoutId);
    };

    slideWrapperRefs.current.forEach((slide) => {
      if (slide) slide.addEventListener('transitionend', handleTransitionEnd);
    });

    timeoutId = window.setTimeout(() => {
      setIsAnimating(false);
      slideWrapperRefs.current.forEach((slide) => {
        if (slide) slide.removeEventListener('transitionend', handleTransitionEnd);
      });
    }, 500);

    return () => {
      slideWrapperRefs.current.forEach((slide) => {
        if (slide) slide.removeEventListener('transitionend', handleTransitionEnd);
      });
      clearTimeout(timeoutId);
    };
  }, [currSlide, isCircular, isAnimating, childSlides.length, slidesPerView, slides.length, loading]);

  // Navigation: move by 2 slides
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrSlide((prev) => prev + SLIDES_TO_SCROLL);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrSlide((prev) => prev - SLIDES_TO_SCROLL);
  };

  // Calculate visible slide index for display
  const getVisualIndex = () => {
    if (!isCircular) return currSlide;
    const total = childSlides.length;
    if (total < 1) return 0;
    let idx = (currSlide - slidesPerView + total) % total;
    if (idx < 0) idx += total;
    return idx;
  };

  // Ensure refs array matches slides
  if (slideWrapperRefs.current.length !== slides.length) {
    slideWrapperRefs.current = Array(slides.length).fill(null);
  }

  return (
    <div
      className={[styles.najwer23morselsSliderContainer, 'MorselsSlider', className].filter(Boolean).join(' ')}
      style={{
        height: loading
          ? 'calc(100% - 2px)'
          : showControls && childSlides.length > 1
          ? 'calc(100% - 60px)'
          : '100%',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {loading && <Loader loaderColor={loaderColor} />}
      {!loading && (
        <>
          <div className={[styles.najwer23morselsSliderContainerSlider].filter(Boolean).join(' ')}>
            <div
              className={[styles.najwer23morselsSlideWrapper, 'MorselsSliderWrapper'].join(' ')}
              ref={slideWrapperRef}
              style={{
                display: 'flex',
                gap: `${SLIDE_SPACING}px`,
                overflow: 'hidden',
                width: '100%',
              }}
            >
              {slides.map((slide, i) => (
                <div
                  key={slide.key ?? i}
                  ref={(el) => {
                    slideWrapperRefs.current[i] = el;
                  }}
                  className={styles.najwer23morselsSlide}
                  style={{
                    width: `${SLIDE_WIDTH}px`,
                    flex: `0 0 ${SLIDE_WIDTH}px`,
                  }}
                  aria-hidden={i < currSlide || i >= currSlide + slidesPerView}
                >
                  {slide}
                </div>
              ))}
            </div>
          </div>
          {showControls && childSlides.length > slidesPerView && (
            <div className={[styles.najwer23morselsSliderControls, 'MorselsSliderControls'].join(' ')}>
              <div className={[styles.najwer23morselsSliderCounter, 'MorselsSliderCounter'].join(' ')}>
                <TextBox mobileSize={16} desktopSize={16} color="black">
                  {!isCircular
                    ? `${currSlide + 1}–${Math.min(currSlide + slidesPerView, childSlides.length)} / ${childSlides.length}`
                    : `${getVisualIndex() + 1}–${Math.min(getVisualIndex() + slidesPerView, childSlides.length)} / ${childSlides.length}`}
                </TextBox>
              </div>
              <div className={[styles.najwer23morselsSliderControlsButtons, 'MorselsSliderControlsButtons'].join(' ')}>
                <Button
                  height={'50px'}
                  width={'50px'}
                  backgroundColor="#F2F0EF"
                  padding={0}
                  title="Prev"
                  onClick={prevSlide}
                  borderColor="black"
                  backgroundColorDisabled="#F2F0EF"
                  disabled={isAnimating}
                >
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
                  disabled={isAnimating}
                >
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
