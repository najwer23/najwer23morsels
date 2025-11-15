import { useState } from 'react';
import { useWindowSize } from '../hooks';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Picture.module.css';

interface PictureProps extends React.HTMLAttributes<HTMLPictureElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  src: string;
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
  maxHeight,
  sizes,
  maxHeightMobile,
  maxHeightDesktop,
  srcset,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const { width } = useWindowSize();

  const calculatedAr = arDesktop || arMobile ? (arMobile && width < 767.98 ? arMobile : arDesktop || arMobile) : ar;
  const calculatedMaxHeight =
    maxHeightDesktop || maxHeightMobile
      ? maxHeightMobile && width < 767.98
        ? maxHeightMobile
        : maxHeightDesktop || maxHeightMobile
      : maxHeight;

  return (
    <picture
      className={[styles.n23mPicture, 'n23mPicture', border && styles.border, loaded && styles.loaded, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
      style={
        {
          ...getCssVariableStyle({
            '--picture-bc': borderColor,
            '--picture-mh': calculatedMaxHeight,
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
        width={calculatedAr}
        height={1}
        src={srcDesktop || srcMobile || src || ''}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        draggable={draggable}
      />
    </picture>
  );
};
