import { useEffect, useRef } from 'react';
import { Button } from '../button';
import { TextBox } from '../textbox';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Dialog.module.css';

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  widthMax: React.CSSProperties['maxWidth'];
  open: boolean;
  onCancel: () => void;
}

export const Dialog: React.FC<DialogProps> = ({
  children,
  open,
  widthMax,
  title,
  onCancel,
  className,
  style,
  ...props
}) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
      document.body.style.paddingRight = `${window.innerWidth - document.body.clientWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      ref.current?.classList.add(styles.minimize);

      const timeoutId = setTimeout(() => {
        ref.current?.close();
        ref.current?.classList.remove(styles.minimize);
        document.body.style.paddingRight = '0';
        document.body.style.overflow = '';
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, [open]);

  return (
    <div
      className={[styles.n23mDialog, 'n23mDialog', className].filter(Boolean).join(' ')}
      {...props}
      style={
        {
          ...getCssVariableStyle({
            '--dialog-wm': widthMax,
          }),
          ...style,
        } as React.CSSProperties
      }
    >
      <dialog
        className={[title ? styles.hasTitle : '', styles.dialog].join(' ')}
        modal-mode="mega"
        ref={ref}
        onCancel={onCancel}
      >
        <div className={styles.dialogCloseButton} style={{ display: open ? 'block' : 'none' }}>
          <Button onClick={onCancel} aria-label="close dialog" height={'25px'} width={'60px'} backgroundColor="#9b0000">
            <TextBox tag="h2" mobileSize={14} desktopSize={14} color="white">
              Close
            </TextBox>
          </Button>
        </div>

        <article>{children}</article>
      </dialog>
    </div>
  );
};

Dialog.displayName = 'Dialog';
