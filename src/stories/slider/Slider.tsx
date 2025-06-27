import React, { useRef, useEffect, useState, useCallback, ReactElement, ReactNode } from 'react';
import styles from './Slider.module.css';

type SlideElement = ReactElement<{ className?: string }>;

type SliderProps = {
  isCircular?: boolean;
  children: ReactNode;
};

function mergeClassNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

function cloneSlides(slides: SlideElement[], count: number, fromStart = false): SlideElement[] {
  return (fromStart ? slides.slice(0, count) : slides.slice(-count)).map((el, i) =>
    React.cloneElement(el, {
      key: `${fromStart ? 'clone-first' : 'clone-last'}-${i}`,
      ...{ ['data-clone']: 'true' },
      className: mergeClassNames(el.props.className, styles.slide),
    }),
  );
}

export const Slider: React.FC<SliderProps> = ({ isCircular = false, children }) => {
  const childSlides = React.Children.toArray(children).filter(React.isValidElement) as SlideElement[];
  const [currSlide, setCurrSlide] = useState(isCircular && childSlides.length >= 2 ? 2 : 0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const slideWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrSlide(isCircular && childSlides.length >= 2 ? 2 : 0);
  }, [isCircular, childSlides.length]);

  const slides =
    isCircular && childSlides.length >= 2
      ? [
          ...cloneSlides(childSlides, 2, false),
          ...childSlides.map((el, i) =>
            React.cloneElement(el, {
              key: el.key ?? i,
              className: mergeClassNames(el.props.className, styles.slide),
            }),
          ),
          ...cloneSlides(childSlides, 2, true),
        ]
      : childSlides.map((el, i) =>
          React.cloneElement(el, {
            key: el.key ?? i,
            className: mergeClassNames(el.props.className, styles.slide),
          }),
        );

  const updateDimensions = useCallback(() => {
    const wrapper = slideWrapperRef.current;
    if (!wrapper) return;
    const firstSlide = wrapper.querySelector(`.${styles.slide}`) as HTMLElement | null;
    if (!firstSlide) return;
    const style = window.getComputedStyle(firstSlide);
    setSlideWidth(firstSlide.offsetWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight));
    setWrapperWidth(wrapper.offsetWidth);
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  useEffect(() => {
    const wrapper = slideWrapperRef.current;
    if (!wrapper) return;
    const slideEls = Array.from(wrapper.querySelectorAll(`.${styles.slide}`)) as HTMLElement[];
    const SPACING = 10;
    const slideFullWidth = slideWidth + SPACING;

    if (isCircular) {
      slideEls.forEach((slide, idx) => {
        const offset = (idx - currSlide) * slideFullWidth + (wrapperWidth - slideWidth) / 2;
        slide.style.transition = isAnimating ? 'transform 0.4s cubic-bezier(.4,0,.2,1)' : 'none';
        slide.style.transform = `translateX(${offset}px)`;
        slide.style.left = '';
      });
    } else {
      slideEls.forEach((slide, idx) => {
        const left = slideFullWidth * (idx - currSlide) + (wrapperWidth - slideWidth) / 2;
        if (isAnimating) {
          const prevLeft = parseFloat(slide.style.left || '0');
          slide
            .animate([{ left: `${prevLeft}px` }, { left: `${left}px` }], {
              duration: 400,
              easing: 'ease-out',
              fill: 'forwards',
            })
            .finished.then(() => {
              slide.style.left = `${left}px`;
              setIsAnimating(false);
            });
        } else {
          slide.style.left = `${left}px`;
        }
        slide.style.transition = 'none';
        slide.style.transform = '';
      });
    }
  }, [currSlide, slideWidth, wrapperWidth, isAnimating, slides.length, isCircular]);

  useEffect(() => {
    if (!isCircular || !isAnimating) return;
    const wrapper = slideWrapperRef.current;
    if (!wrapper) return;
    const slideEls = Array.from(wrapper.querySelectorAll(`.${styles.slide}`)) as HTMLElement[];
    const totalSlides = slideEls.length;

    const handleTransitionEnd = () => {
      let newIndex = currSlide;
      if (currSlide === 1) newIndex = totalSlides - 3;
      else if (currSlide === totalSlides - 2) newIndex = 2;
      if (newIndex !== currSlide) {
        setIsAnimating(false);
        setCurrSlide(newIndex);
      } else {
        setIsAnimating(false);
      }
      slideEls[slideEls.length - 1].removeEventListener('transitionend', handleTransitionEnd);
    };

    slideEls[slideEls.length - 1].addEventListener('transitionend', handleTransitionEnd);

    return () => slideEls[slideEls.length - 1].removeEventListener('transitionend', handleTransitionEnd);
  }, [currSlide, isCircular, isAnimating]);

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

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderBtnControl}>
        <button className={styles.btn} onClick={prevSlide}>
          Prev
        </button>
        <button className={styles.btn} onClick={nextSlide}>
          Next
        </button>
      </div>
      <div className={styles.slideWrapper} ref={slideWrapperRef}>
        {slides}
      </div>
    </div>
  );
};

Slider.displayName = 'Slider';
