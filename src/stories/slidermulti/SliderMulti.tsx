import React, { useRef, useEffect, useState, ReactElement, ReactNode } from 'react';
import styles from './SliderMulti.module.css';
import { Loader } from '../loader';
import { IconArrowLeft, IconArrowRight } from '../icons';
import { Button } from '../button';
import { useWindowSize } from '../hooks';
import { Slider } from '../slider/Slider';

type SlideElement = ReactElement<{ className?: string }>;

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  isCircular?: boolean;
  children: ReactNode;
  showControls?: boolean;
  loading?: boolean;
  loaderColor?: string;
  slidesPerView?: number;
  slideSpacingPx?: number;
  slidesToScroll?: number;
}

const DEFAULT_SLIDES_PER_VIEW = 4;
const DEFAULT_SLIDE_SPACING = 10;
const DEFAULT_SLIDES_TO_SCROLL = 4;

const cloneSlides = (slides: SlideElement[], count: number, fromStart = false, id: number): SlideElement[] =>
  (fromStart ? slides.slice(0, count) : slides.slice(-count)).map((el, i) =>
    React.cloneElement(el, {
      key: `${fromStart ? 'clone-first' : 'clone-last'}-${i} ${id}`,
      className: el.props.className,
    }),
  );

export const SliderMulti: React.FC<SliderProps> = ({
  isCircular = false,
  children,
  className,
  showControls = true,
  loading = false,
  loaderColor = 'black',
  slidesPerView = DEFAULT_SLIDES_PER_VIEW,
  slideSpacingPx = DEFAULT_SLIDE_SPACING,
  slidesToScroll = DEFAULT_SLIDES_TO_SCROLL,
}) => {
  const childSlides = React.Children.toArray(children).filter(React.isValidElement) as SlideElement[];
  const { width } = useWindowSize();

  const [wrapperWidth, setWrapperWidth] = useState(0);
  const slideWrapperRef = useRef<HTMLDivElement>(null);
  const [currSlide, setCurrSlide] = useState(isCircular ? childSlides.length * 2 : 0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState<number>(0);

  useEffect(() => {
    const update = () => {
      if (slideWrapperRef.current) setWrapperWidth(slideWrapperRef.current.offsetWidth);
      setCurrSlide(0)
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [loading]);

  useEffect(() => {
    setCurrSlide(isCircular ? childSlides.length * 2 : 0);
  }, [isCircular, slidesPerView, childSlides.length, loading]);

  let slidePerViewDynamic = slidesPerView;
  let slidesToScrollDynamic = slidesToScroll;
  let slideAnimation = 'transform 1.05s cubic-bezier(0.645, 0.045, 0.355, 1)';
  let slideAnimationDelay = 1150;

  if (width < 767.98) {
    slidePerViewDynamic = 1;
    slidesToScrollDynamic = 1;
    slideAnimation = 'transform 0.4s cubic-bezier(.4,0,.2,1)';
    slideAnimationDelay = 500;
  } else if (width < 1199.98) {
    slidePerViewDynamic = 2;
    slidesToScrollDynamic = 2;
    slideAnimation = 'transform 0.95s cubic-bezier(0.645, 0.045, 0.355, 1)';
    slideAnimationDelay = 1050;
  }

  // Peek 10px on both sides only if one slide per view
  const PEEK_WIDTH = slidePerViewDynamic === 1 ? 10 : 0;
  const totalPeek = PEEK_WIDTH * 2;

  const slideWidth =
    slidePerViewDynamic > 0
      ? (wrapperWidth - totalPeek - slideSpacingPx * (slidePerViewDynamic - 1)) / slidePerViewDynamic
      : 0;

  let slides = isCircular
    ? [
        ...cloneSlides(childSlides, childSlides.length, false, 1),
        ...cloneSlides(childSlides, childSlides.length, false, 2),
        ...childSlides,
        ...cloneSlides(childSlides, childSlides.length, true, 3),
        ...cloneSlides(childSlides, childSlides.length, true, 4),
      ]
    : childSlides;

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
    if (touchDeltaX > SWIPE_THRESHOLD) prevSlide();
    else if (touchDeltaX < -SWIPE_THRESHOLD) nextSlide();
    setTouchStartX(null);
    setTouchDeltaX(0);
  };

  useEffect(() => {
    slideWrapperRefs.current.forEach((slideWrapper, idx) => {
      if (!slideWrapper) return;
      const offset =
        (idx - currSlide) * (slideWidth + slideSpacingPx) +
        (wrapperWidth - slideWidth * slidePerViewDynamic - slideSpacingPx * (slidePerViewDynamic - 1)) / 2;

      const peekOffset = slidePerViewDynamic === 1 ? PEEK_WIDTH : 0;

      slideWrapper.style.transition = isAnimating ? slideAnimation : 'none';
      slideWrapper.style.transform = `translateX(${offset + peekOffset}px)`;
      slideWrapper.style.left = '';
    });
  }, [currSlide, wrapperWidth, isAnimating, slides.length, slidePerViewDynamic, slideWidth, slideSpacingPx, loading]);

  useEffect(() => {
    if (!isAnimating) return;
    let timeoutId: number;
    const handleTransitionEnd = () => {
      let newIndex = currSlide;
      if (currSlide < slidePerViewDynamic && isCircular) newIndex = currSlide + childSlides.length;
      else if (currSlide >= childSlides.length + slidePerViewDynamic && isCircular)
        newIndex = currSlide - childSlides.length;
      if (newIndex !== currSlide && isCircular) setCurrSlide(newIndex);
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
    }, slideAnimationDelay);
    return () => {
      slideWrapperRefs.current.forEach((slide) => {
        if (slide) slide.removeEventListener('transitionend', handleTransitionEnd);
      });
      clearTimeout(timeoutId);
    };
  }, [currSlide, isCircular, isAnimating, childSlides.length, slidePerViewDynamic, slides.length, loading]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrSlide((prev) => prev + slidesToScrollDynamic);
  };
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrSlide((prev) => prev - slidesToScrollDynamic);
  };

  if (slideWrapperRefs.current.length !== slides.length) {
    slideWrapperRefs.current = Array(slides.length).fill(null);
  }

  if (width < 767.98) {
    return <Slider children={children} isCircular={isCircular} loading={loading}/>;
  }

  return (
    <div
      className={[styles.n23mSliderMulti, 'n23mSliderMulti', className].filter(Boolean).join(' ')}
      style={{
        height: loading ? 'calc(100% - 2px)' : showControls ? 'calc(100% - 60px)' : '100%',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      {loading && <Loader loaderColor={loaderColor} />}
      {!loading && (
        <>
          <div className={[styles.n23mSliderMultiContainerSlider].filter(Boolean).join(' ')}>
            <div
              className={[styles.n23mSliderMultiSlideWrapper, 'n23mSliderMultiSlideWrapper'].join(' ')}
              ref={slideWrapperRef}
              style={{
                display: 'flex',
                gap: `${slideSpacingPx}px`,
                overflow: 'hidden',
                width: '100%',
                padding: slidePerViewDynamic === 1 ? `0 ${PEEK_WIDTH}px` : undefined,
                boxSizing: 'border-box',
              }}>
              {slides.map((slide, i) => (
                <div
                  key={slide.key ?? i}
                  ref={(el) => {
                    slideWrapperRefs.current[i] = el;
                  }}
                  className={styles.n23mSliderMultiSlide}
                  style={{
                    width: `${slideWidth}px`,
                    flex: `0 0 ${slideWidth}px`,
                  }}
                  aria-hidden={i < currSlide || i >= currSlide + slidePerViewDynamic}>
                  {slide}
                </div>
              ))}
            </div>
          </div>
          {showControls && (
            <div className={[styles.n23mSliderMultiControls, 'n23mSliderMultiControls'].join(' ')}>
              <div className={[styles.n23mSliderMultiControlsButtons, 'n23mSliderMultiControlsButtons'].join(' ')}>
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
                  disabled={isAnimating || (!isCircular && currSlide + slidePerViewDynamic >= childSlides.length)}>
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

SliderMulti.displayName = 'Slider';
