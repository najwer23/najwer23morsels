import { useState } from 'react';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Picture.module.css';

interface PictureProps extends React.HTMLAttributes<HTMLPictureElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  src: string;
  alt: string;
  ar?: number;
  draggable?: boolean;
  border?: boolean;
  borderColor?: string;
  maxHeight?: string;
  sizes?: string;
  srcset?: string;
  loading?: 'eager' | 'lazy';
  mobileSrc?: string;
  desktopSrc?: string;
}

export const Picture: React.FC<PictureProps> = ({
  children,
  className,
  style,
  draggable = false,
  alt,
  src,
  desktopSrc,
  mobileSrc,
  ar,
  border = false,
  borderColor = 'black',
  loading = 'lazy',
  maxHeight,
  sizes,
  srcset,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

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
            '--picture-mh': maxHeight,
          }),
          ...style,
        } as React.CSSProperties
      }
    >
      {desktopSrc && <source media="(min-width: 768px)" srcSet={desktopSrc} />}
      {mobileSrc && <source media="(max-width: 767.98px)" srcSet={mobileSrc} />}
      <img
        sizes={sizes}
        srcSet={srcset}
        width={ar}
        height={1}
        src={desktopSrc || mobileSrc || src || ''}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        draggable={draggable}
      />
    </picture>
  );
};
