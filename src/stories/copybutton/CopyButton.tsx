import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '../button';
import { TextBox } from '../textbox';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './CopyButton.module.css';

interface CopyButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  backgroundColor?: string;
  textToCopy: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  children,
  className,
  style,
  textToCopy,
  backgroundColor = 'orangered',
  ...props
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    <div className={[styles.n23mCopyButton, 'n23mCopyButton', className].filter(Boolean).join(' ')} {...props}>
      <Button
        padding={'0px 3px'}
        height={'auto'}
        width="auto"
        backgroundColor={isCopied ? '#4BB543' : backgroundColor}
        onClick={handleCopy}
      >
        {children ?? (
          <TextBox mobileSize={8} desktopSize={8} fontWeight={600} title="Copy" lineHeight={'17px'}>
            Copy
          </TextBox>
        )}
      </Button>
    </div>
  );
};

CopyButton.displayName = 'CopyButton';
