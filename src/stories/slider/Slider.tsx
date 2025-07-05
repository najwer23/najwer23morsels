import React, { useRef, useEffect, useState, ReactElement, ReactNode, useLayoutEffect } from 'react';
import styles from './Slider.module.css';
import { Loader } from '../loader';
import { IconArrowLeft, IconArrowRight } from '../icons';
import { Button } from '../button';
import { useWindowSize } from '../hooks';
import { TextBox } from '../textbox';

type SlideElement = ReactElement<{ className?: string }>;

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  isCircular?: boolean;
  children: ReactNode;
  loading?: boolean;
  loaderColor?: string;
  slidesConfig?: {
    mobile: {
      items: number;
      slidesToScroll: number;
    };
    tablet: {
      items: number;
      slidesToScroll: number;
    };
    desktop: {
      items: number;
      slidesToScroll: number;
    };
  };
  slideSpacingPx?: number;
}

const cloneSlides = (slides: SlideElement[], count: number, fromStart = false, id: number): SlideElement[] =>
  (fromStart ? slides.slice(0, count) : slides.slice(-count)).map((el, i) =>
    React.cloneElement(el, {
      key: `${fromStart ? 'clone-first' : 'clone-last'}-${i} ${id}`,
      className: el.props.className,
    }),
  );

export const Slider: React.FC<SliderProps> = ({
  isCircular = false,
  children,
  className,
  loading = false,
  loaderColor = 'black',
  slidesConfig = {
    mobile: {
      items: 1,
      slidesToScroll: 1,
    },
    tablet: {
      items: 2,
      slidesToScroll: 2,
    },
    desktop: {
      items: 3,
      slidesToScroll: 3,
    },
  },
  slideSpacingPx = 10,
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

  let slidePerViewDynamic;
  let slidesToScrollDynamic;
  let slideAnimation;
  let slideAnimationDelay;

  if (width < 767.98) {
    slidePerViewDynamic = slidesConfig.mobile.items;
    slidesToScrollDynamic = slidesConfig.mobile.slidesToScroll;
    slideAnimation = 'transform 0.4s cubic-bezier(.4,0,.2,1)';
    slideAnimationDelay = 450;
  } else if (width < 1199.98) {
    slidePerViewDynamic = slidesConfig.tablet.items;
    slidesToScrollDynamic = slidesConfig.tablet.slidesToScroll;
    slideAnimation = 'transform 0.85s cubic-bezier(0.645, 0.045, 0.355, 1)';
    slideAnimationDelay = 900;
  } else {
    slidePerViewDynamic = slidesConfig.desktop.items;
    slidesToScrollDynamic = slidesConfig.desktop.slidesToScroll;
    slideAnimation = 'transform 0.85s cubic-bezier(0.645, 0.045, 0.355, 1)';
    slideAnimationDelay = 900;
  }

  useLayoutEffect(() => {
    let timeoutId: number;
    const update = () => {
      if (slideWrapperRef.current) setWrapperWidth(slideWrapperRef.current.offsetWidth);
      setCurrSlide(isCircular ? childSlides.length * 2 : 0);
    };
    const onResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(update, 150);
      setIsAnimating(false);
    };
    update();
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', onResize);
    };
  }, [loading, isCircular, slidePerViewDynamic, childSlides.length]);

  const slideWidth =
    slidePerViewDynamic > 0 ? (wrapperWidth - slideSpacingPx * (slidePerViewDynamic - 1)) / slidePerViewDynamic : 0;

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
    if (touchDeltaX > SWIPE_THRESHOLD && !(isAnimating || (!isCircular && currSlide === 0))) prevSlide();
    else if (
      touchDeltaX < -SWIPE_THRESHOLD &&
      !(isAnimating || (!isCircular && currSlide + slidePerViewDynamic >= childSlides.length))
    )
      nextSlide();
    setTouchStartX(null);
    setTouchDeltaX(0);
  };

  useLayoutEffect(() => {
    slideWrapperRefs.current.forEach((slideWrapper, idx) => {
      if (!slideWrapper) return;

      let leftPad = 0;
      let rightPad = 0;

      if (slidePerViewDynamic == 1 && childSlides.length != 1) {
        leftPad = 35;
        rightPad = 35;
      } else if (slidePerViewDynamic == 2) {
        leftPad = 20;
        rightPad = 20;
      } else if (slidePerViewDynamic == 4) {
        leftPad = 10;
        rightPad = 10;
      } else if (slidePerViewDynamic == 3) {
        leftPad = 15;
        rightPad = 15;
      }

      const offset =
        (idx - currSlide) * (slideWidth + slideSpacingPx - rightPad) +
        (wrapperWidth - (slideWidth - leftPad) * slidePerViewDynamic - slideSpacingPx * (slidePerViewDynamic - 1)) / 2;

      slideWrapper.style.transition = isAnimating ? slideAnimation : 'none';
      slideWrapper.style.transform = `translateX(${offset}px)`;
    });
  }, [currSlide, wrapperWidth, isAnimating, slides.length, slidePerViewDynamic, slideWidth, slideSpacingPx, loading]);

  useLayoutEffect(() => {
    if (!isAnimating) return;

    let timeoutId: number;

    const handleTransitionEnd = () => {
      let newIndex = currSlide;

      if (currSlide < slidePerViewDynamic * 2 && isCircular) {
        newIndex = currSlide + childSlides.length * 2;
      } else if (currSlide >= childSlides.length * 2 + slidePerViewDynamic && isCircular) {
        newIndex = currSlide - childSlides.length * 2;
      }

      if (newIndex !== currSlide && isCircular) {
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

  const getVisualIndex = () => {
    if (!isCircular) return currSlide;
    const total = childSlides.length;
    if (total < 1) return 0;
    return (currSlide + total) % total;
  };

  return (
    <div
      className={[styles.n23mSlider, 'n23mSlider', className].filter(Boolean).join(' ')}
      style={{
        height: loading ? 'calc(100% - 2px)' : 'calc(100% - 60px)',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      {loading && <Loader loaderColor={loaderColor} />}
      {!loading && (
        <>
          <div className={[styles.n23mSliderContainerSlider].filter(Boolean).join(' ')}>
            <div
              className={[styles.n23mSliderSlideWrapper, 'n23mSliderSlideWrapper'].join(' ')}
              ref={slideWrapperRef}
              style={{
                display: 'flex',
                gap: `${slideSpacingPx}px`,
                overflow: 'hidden',
                width: '100%',
                boxSizing: 'border-box',
              }}>
              {slides.map((slide, i) => (
                <div
                  key={slide.key ?? i}
                  ref={(el) => {
                    slideWrapperRefs.current[i] = el;
                  }}
                  className={styles.n23mSliderSlide}
                  style={{
                    width:
                      slidePerViewDynamic == 1 && childSlides.length == 1
                        ? '100%'
                        : slidePerViewDynamic == 1
                          ? `calc(${slideWidth}px - 35px)`
                          : slidePerViewDynamic == 2
                            ? `calc(${slideWidth}px - 20px)`
                            : slidePerViewDynamic == 3
                              ? `calc(${slideWidth}px - 15px)`
                              : slidePerViewDynamic == 4
                                ? `calc(${slideWidth}px - 10px)`
                                : `${slideWidth}px`,
                  }}
                  aria-hidden={i < currSlide || i >= currSlide + slidePerViewDynamic}>
                  {slide}
                </div>
              ))}
            </div>
          </div>

          <div
            className={[styles.n23mSliderControls, 'n23mSliderControls'].join(' ')}
            style={{ justifyContent: slidePerViewDynamic == 1 ? 'space-between' : 'flex-end' }}>
            {slidePerViewDynamic == 1 && (
              <div className={[styles.n23mSliderCounter, 'n23mSliderCounter'].join(' ')}>
                <TextBox mobileSize={16} desktopSize={16} color="black">
                  {!isCircular
                    ? `${currSlide + 1} / ${childSlides.length}`
                    : `${getVisualIndex() + 1} / ${childSlides.length}`}
                </TextBox>
              </div>
            )}

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
                disabled={isAnimating || (!isCircular && currSlide + slidePerViewDynamic >= childSlides.length)}>
                <IconArrowRight width={24} height={24} />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Slider.displayName = 'Slider';
