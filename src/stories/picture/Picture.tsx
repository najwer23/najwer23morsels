import { useEffect, useRef, useState } from 'react';
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
  const { width } = useWindowSize();
  const complete = useRef(false);

  // check if cached
  const img = new Image();
  img.src = srcDesktop || srcMobile || src || '';
  complete.current = img.complete;
  img.src = '';

  return (
    <figure className={styles.n23mPictureFigure}>
      <picture
        className={[
          styles.n23mPicture,
          'n23mPicture',
          border && styles.border,
          loaded && styles.loaded,
          complete.current && styles.cacheLoaded,
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
          onLoad={() =>
            setLoaded(() => {
              if (complete.current) return false;
              return true;
            })
          }
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
