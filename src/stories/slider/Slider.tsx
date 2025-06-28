import React, { useRef, useEffect, useState, useCallback, ReactElement, ReactNode } from 'react';
import styles from './Slider.module.css';
import { TextBox } from '../textbox';
import { Loader } from '../loader';

type SlideElement = ReactElement<{ className?: string }>;

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  isCircular?: boolean;
  children: ReactNode;
  arrowsColor?: string;
  arrowsColorBackground?: string;
  arrowsColorBorder?: string;
  showCounter?: boolean;
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
  arrowsColor,
  arrowsColorBackground,
  arrowsColorBorder,
  showCounter = true,
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

  useEffect(() => {
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

  return (
    <div
      className={[styles.najwer23morselsSliderContainer, 'MorselsSlider', className].filter(Boolean).join(' ')}
      style={{ height: loading ? 'calc(100% - 2px)' : showCounter ? 'calc(100% - 35px)' : '100%' }}>
      {loading && <Loader loaderColor={loaderColor} />}
      {!loading && (
        <>
          <div
            className={[styles.najwer23morselsSliderContainerSlider].filter(Boolean).join(' ')}
            style={
              {
                '--ac': arrowsColor,
                '--abgc': arrowsColorBackground,
                '--abc': arrowsColorBorder,
              } as React.CSSProperties
            }>
            <div
              className={[styles.najwer23morselsBtnControl, 'MorselsSliderControl', className].join(' ')}
              style={{
                justifyContent: !isCircular
                  ? currSlide === 0
                    ? 'flex-end'
                    : currSlide === childSlides.length - 1
                      ? 'flex-start'
                      : 'space-between'
                  : 'space-between',
              }}>
              {((isCircular && childSlides.length > 1) || currSlide !== 0) && (
                <button title="Prev" className={styles.najwer23morselsBtn} onClick={prevSlide} disabled={isAnimating}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    width="24"
                    height="24"
                    fill="currentColor">
                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                  </svg>
                </button>
              )}
              {((isCircular && childSlides.length > 1) || currSlide !== childSlides.length - 1) && (
                <button title="Next" className={styles.najwer23morselsBtn} onClick={nextSlide} disabled={isAnimating}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    width="24"
                    height="24"
                    fill="currentColor">
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                </button>
              )}
            </div>
            <div
              className={[styles.najwer23morselsSlideWrapper, 'MorselsSliderWrapper', className].join(' ')}
              ref={slideWrapperRef}>
              {slides.map((slide, i) => (
                <div
                  key={slide.key ?? i}
                  ref={(el) => {
                    slideWrapperRefs.current[i] = el;
                  }}
                  className={`${styles.najwer23morselsSlide}`}
                  style={{
                    width: childSlides.length > 1 ? 'calc(100% - 40px)' : '100%',
                  }}
                  aria-hidden={currSlide !== i}>
                  {slide}
                </div>
              ))}
            </div>
          </div>
          {showCounter && (
            <div className={[styles.najwer23morselsSliderCounter, 'MorselsSliderCounter', className].join(' ')}>
              <TextBox mobileSize={16} desktopSize={16} color="black">
                {!isCircular
                  ? `${currSlide + 1} / ${childSlides.length}`
                  : `${getVisualIndex() + 1} / ${childSlides.length}`}
              </TextBox>
            </div>
          )}
        </>
      )}
    </div>
  );
};

Slider.displayName = 'Slider';
