import { useInsertionEffect, useLayoutEffect, useRef, useState } from 'react';
import { useWindowSize } from '../hooks';
import { TextBox } from '../textbox';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Picture.module.css';

interface PictureProps extends React.HTMLAttributes<HTMLPictureElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  src?: string;
  alt: string;
  ar?: number;
  arDesktop?: number;
  arMobile?: number;
  draggable?: boolean;
  border?: boolean;
  borderColor?: string;
  maxHeight?: string;
  maxHeightMobile?: string;
  maxHeightDesktop?: string;
  sizes?: string;
  srcset?: string;
  loading?: 'eager' | 'lazy';
  srcMobile?: string;
  srcDesktop?: string;
  figcaption?: string;
  figcaptionColor?: string;
}

export const Picture: React.FC<PictureProps> = ({
  children,
  className,
  style,
  draggable = false,
  alt,
  src,
  srcDesktop,
  srcMobile,
  ar,
  arMobile,
  arDesktop,
  border = false,
  borderColor = 'black',
  loading = 'lazy',
  srcset,
  sizes,
  maxHeight,
  maxHeightMobile,
  maxHeightDesktop,
  figcaption,
  figcaptionColor,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [fromCache, setFromCache] = useState(false);
  const { width } = useWindowSize();

  useLayoutEffect(() => {
    const img = new Image();
    const srcToLoad = srcDesktop || srcMobile || src || '';
    img.src = srcToLoad;

    if (img.complete) {
      setLoaded(true);
      setFromCache(true);
    } else {
      setFromCache(false);
      img.onload = () => {
        setLoaded(true);
        setFromCache(false);
      };
    }

    return () => {
      img.onload = null;
    };
  }, [srcDesktop, srcMobile, src]);

  return (
    <figure className={styles.n23mPictureFigure}>
      <picture
        className={[
          'n23mPicture',
          styles.n23mPicture,
          border && styles.border,
          loaded && !fromCache && styles.loaded,
          fromCache && styles.cacheLoaded,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
        style={
          {
            ...getCssVariableStyle({
              '--picture-bc': borderColor,
              '--picture-mh':
                maxHeightDesktop || maxHeightMobile
                  ? maxHeightMobile && width < 767.98
                    ? maxHeightMobile
                    : maxHeightDesktop || maxHeightMobile
                  : maxHeight,
            }),
            ...style,
          } as React.CSSProperties
        }
      >
        {srcDesktop && <source media="(min-width: 768px)" srcSet={srcDesktop} />}
        {srcMobile && <source media="(max-width: 767.98px)" srcSet={srcMobile} />}
        <img
          sizes={sizes}
          srcSet={srcset}
          width={arDesktop || arMobile ? (arMobile && width < 767.98 ? arMobile : arDesktop || arMobile) : ar}
          height={1}
          src={srcDesktop || srcMobile || src || ''}
          alt={alt}
          loading={loading}
          draggable={draggable}
        />
      </picture>
      {figcaption && (
        <figcaption>
          <TextBox tag="p" desktopSize={12} mobileSize={12} color={figcaptionColor} margin={'3px 0 3px 0'}>
            {figcaption}
          </TextBox>
        </figcaption>
      )}
    </figure>
  );
};
