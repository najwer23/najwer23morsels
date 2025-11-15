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
}

export const Picture: React.FC<PictureProps> = ({
  children,
  className,
  style,
  draggable = false,
  alt,
  src,
  ar,
  border = false,
  borderColor = 'black',
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
          }),
          ...style,
        } as React.CSSProperties
      }
    >
      <img
        width={ar}
        height={1}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        draggable={draggable}
      />
    </picture>
  );
};
