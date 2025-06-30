import React, { useRef, useEffect, useState, ReactElement, ReactNode } from 'react';
import styles from './SliderMulti.module.css';
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
  slidesPerView?: number;
  slideSpacingPx?: number;
  slidesToScroll?: number;
}

const DEFAULT_SLIDES_PER_VIEW = 4;
const DEFAULT_SLIDE_SPACING = 10;
const DEFAULT_SLIDES_TO_SCROLL = 4;

const cloneSlides = (slides: SlideElement[], count: number, fromStart = false, id:number): SlideElement[] =>
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

  const [wrapperWidth, setWrapperWidth] = useState(0);
  const slideWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (slideWrapperRef.current) setWrapperWidth(slideWrapperRef.current.offsetWidth);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [loading]);

  const slideWidth =
    slidesPerView > 0
      ? (wrapperWidth - slideSpacingPx * (slidesPerView - 1)) / slidesPerView
      : 0;

  let slides = isCircular
    ? [
        ...cloneSlides(childSlides, React.Children.toArray(children).length, false,1),
        ...cloneSlides(childSlides, React.Children.toArray(children).length, false,2),
        ...childSlides,
        ...cloneSlides(childSlides, React.Children.toArray(children).length, true,3),
        ...cloneSlides(childSlides, React.Children.toArray(children).length, true,4),
      ]
    : childSlides;    

  const [currSlide, setCurrSlide] = useState(isCircular ? React.Children.toArray(children).length * 2 : 0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState<number>(0);

  useEffect(() => {
    setCurrSlide(isCircular ? React.Children.toArray(children).length * 2 : 0);
  }, [isCircular, slidesPerView, childSlides.length, loading]);

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
        (wrapperWidth - slideWidth * slidesPerView - slideSpacingPx * (slidesPerView - 1)) / 2;
      slideWrapper.style.transition = isAnimating ? 'transform 0.4s cubic-bezier(.4,0,.2,1)' : 'none';
      slideWrapper.style.transform = `translateX(${offset}px)`;
      slideWrapper.style.left = '';
    });
  }, [currSlide, wrapperWidth, isAnimating, slides.length, slidesPerView, slideWidth, slideSpacingPx, loading]);

  useEffect(() => {
    if (!isAnimating) return;
    let timeoutId: number;
    const handleTransitionEnd = () => {
      let newIndex = currSlide;
      if (currSlide < slidesPerView && isCircular) newIndex = currSlide + childSlides.length;
      else if (currSlide >= childSlides.length + slidesPerView && isCircular) newIndex = currSlide - childSlides.length;
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
    }, 500);
    return () => {
      slideWrapperRefs.current.forEach((slide) => {
        if (slide) slide.removeEventListener('transitionend', handleTransitionEnd);
      });
      clearTimeout(timeoutId);
    };
  }, [currSlide, isCircular, isAnimating, childSlides.length, slidesPerView, slides.length, loading]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrSlide((prev) => prev + slidesToScroll);
  };
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrSlide((prev) => prev - slidesToScroll);
  };

  if (slideWrapperRefs.current.length !== slides.length) {
    slideWrapperRefs.current = Array(slides.length).fill(null);
  }

  return (
    <div
      className={[styles.najwer23morselsSliderContainer, 'MorselsSlider', className].filter(Boolean).join(' ')}
      style={{
        height: loading
          ? 'calc(100% - 2px)'
          : showControls
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
                gap: `${slideSpacingPx}px`,
                overflow: 'hidden',
                width: '100%',
              }}
            >
              {slides.map((slide, i) => (
                <div
                  key={slide.key ?? i}
                  ref={el => { slideWrapperRefs.current[i] = el; }}
                  className={styles.najwer23morselsSlide}
                  style={{
                    width: `${slideWidth}px`,
                    flex: `0 0 ${slideWidth}px`,
                  }}
                  aria-hidden={i < currSlide || i >= currSlide + slidesPerView}
                >
                  {slide}
                </div>
              ))}
            </div>
          </div>
          {showControls && (
            <div className={[styles.najwer23morselsSliderControls, 'MorselsSliderControls'].join(' ')}>
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
                  disabled={isAnimating || (!isCircular && currSlide === 0)}
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
                  disabled={isAnimating || (!isCircular && currSlide + slidesPerView >= childSlides.length)}
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

SliderMulti.displayName = 'Slider';
