import { useRef } from 'react';

import { Button } from '../Button';
import { Form, type FormType } from '../Form';
import { Grid } from '../Grid';
import { Input } from '../Input';
import { TextBox } from '../TextBox';
import styles from './FormForgotPassOtp.module.css';

interface FormForgotPassOtpProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  style?: React.CSSProperties;
  onSubmit: (formData: FormType) => void;
  isError: boolean;
  isPending: boolean;
  isSuccess: boolean;
  errorMsg: string | null | undefined;
  successMsg: string | null | undefined;
  onNavigate?: (path: string) => void;
  footerHeight?: string;
  linkMainPage?: {
    link: string;
    text: string;
  };
}

export const FormForgotPassOtp: React.FC<FormForgotPassOtpProps> = ({
  className,
  style,
  onSubmit,
  isPending,
  isError,
  isSuccess,
  errorMsg,
  successMsg,
  onNavigate,
  footerHeight = '100px',
  linkMainPage,
  ...props
}) => {
  const pass = useRef<HTMLInputElement>(null);
  const confirmPass = useRef<HTMLInputElement>(null);
  const isBlurring = useRef(false);

  const navigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
      return;
    }
    window.location.href = path;
  };

  return (
    <div
      className={[styles.n23mFormForgotPassOtp, 'n23mFormForgotPassOtp', className].filter(Boolean).join(' ')}
      {...props}
      style={
        {
          ...style,
        } as React.CSSProperties
      }
    >
      <Grid
        layout="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        widthMax={'1400px'}
        minHeight={`calc(100dvb - ${footerHeight})`}
      >
        <Grid
          layout="container"
          minHeight={0}
          widthMin={'min(450px, calc(100% - 40px))'}
          padding={'20px'}
          margin={'20px'}
          className={styles.forogotPasswordOtpWrapper}
        >
          {linkMainPage && (
            <TextBox
              desktopSize={20}
              mobileSize={20}
              fontWeight={500}
              tag="a"
              href={linkMainPage.link}
              color="grey"
              colorHover="var(--n23mTextBoxColorHover, black)"
              onClick={(e) => {
                e.preventDefault();
                navigate(linkMainPage.link);
              }}
            >
              {linkMainPage.text}
            </TextBox>
          )}

          <TextBox tag="h3" desktopSize={14} mobileSize={14} fontWeight={500} margin={'12px 0 18px'}>
            Change password
          </TextBox>

          <Form
            onSubmit={onSubmit}
            isError={isError}
            isPending={isPending}
            isSuccess={isSuccess}
            errorMsg={errorMsg}
            successMsg={successMsg}
          >
            <Input
              inputRef={pass}
              label="New password"
              type="password"
              name="pass"
              validatorOptions={[{ type: 'empty' }, { type: 'equal', options: { ref: confirmPass } }]}
              placeholder="New password"
              onBlur={() => {
                if (isBlurring.current) return;
                if (!pass.current?.value || !confirmPass.current?.value) return;
                isBlurring.current = true;
                confirmPass.current?.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
                isBlurring.current = false;
              }}
            />

            <Input
              inputRef={confirmPass}
              label="Confirm new password"
              type="password"
              name="confirmPass"
              validatorOptions={[{ type: 'empty' }, { type: 'equal', options: { ref: pass } }]}
              placeholder="Confirm new password"
              onBlur={() => {
                if (isBlurring.current) return;
                if (!pass.current?.value || !confirmPass.current?.value) return;
                isBlurring.current = true;
                pass.current?.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
                isBlurring.current = false;
              }}
            />

            <Button
              type="submit"
              disabled={isPending}
              height={'40px'}
              width={'80px'}
              padding={0}
              backgroundColor="orangered"
              backgroundColorDisabled="grey"
            >
              <TextBox tag="span" desktopSize={16} mobileSize={16} fontWeight={400} color="white">
                SEND
              </TextBox>
            </Button>
          </Form>
        </Grid>
      </Grid>
    </div>
  );
};

FormForgotPassOtp.displayName = 'FormForgotPassOtp';
