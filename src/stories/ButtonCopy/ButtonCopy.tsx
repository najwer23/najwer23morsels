import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import { TextBox } from '../TextBox';

interface ButtonCopyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  backgroundColor?: React.CSSProperties['backgroundColor'];
  color?: React.CSSProperties['color'];
  padding?: React.CSSProperties['padding'];
  margin?: React.CSSProperties['margin'];
  textToCopy: string;
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
}

export const ButtonCopy: React.FC<ButtonCopyProps> = ({
  children,
  className,
  style,
  textToCopy,
  margin,
  height = 'auto',
  width = 'auto',
  padding = '0px 3px',
  color = 'white',
  backgroundColor = 'orangered',
  ...props
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);

    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
      timeoutRef.current = null;
    }, 800);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={['n23mButtonCopy', className].filter(Boolean).join(' ')} {...props}>
      <Button
        type="button"
        padding={padding}
        height={height}
        width={width}
        margin={margin}
        backgroundColor={isCopied ? '#4BB543' : backgroundColor}
        onClick={handleCopy}
      >
        {children ?? (
          <TextBox mobileSize={10} desktopSize={10} fontWeight={600} lineHeight={'17px'} color={color}>
            Copy
          </TextBox>
        )}
      </Button>
    </div>
  );
};

ButtonCopy.displayName = 'ButtonCopy';
