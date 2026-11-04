import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import { TextBox } from '../TextBox';

interface ButtonCopyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  padding?: React.CSSProperties['padding'];
  margin?: React.CSSProperties['margin'];
  textToCopy: string;
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
}

const visuallyHidden: React.CSSProperties = {
  position: 'absolute',
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
};

export const ButtonCopy: React.FC<ButtonCopyProps> = ({
  children,
  className,
  style,
  textToCopy,
  margin,
  height = 'auto',
  width = 'auto',
  padding = '0px 3px',
  ...props
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = useCallback(async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch {
      setIsCopied(false);
      return;
    }

    setIsCopied(true);

    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
      timeoutRef.current = null;
    }, 800);
  }, [textToCopy]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={['n23mButtonCopy', className].filter(Boolean).join(' ')} style={style} {...props}>
      <Button
        type="button"
        variant={isCopied ? 'success' : 'copy'}
        padding={padding}
        height={height}
        width={width}
        margin={margin}
        onClick={handleCopy}
      >
        {children ?? (
          <TextBox mobileSize={10} desktopSize={10} fontWeight={600} lineHeight="17px" color="inherit">
            Copy
          </TextBox>
        )}
      </Button>

      <span role="status" aria-live="polite" style={visuallyHidden}>
        {isCopied ? 'Copied' : ''}
      </span>
    </div>
  );
};

ButtonCopy.displayName = 'ButtonCopy';
