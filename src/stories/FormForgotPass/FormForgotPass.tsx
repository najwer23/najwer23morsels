import { Button } from '../Button';
import { Form, type FormType } from '../Form';
import { Grid } from '../Grid';
import { Input } from '../Input';
import { TextBox } from '../TextBox';
import styles from './FormForgotPass.module.css';

interface FormForgotPassProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
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
  linkLogin?: {
    link: string;
    text: string;
  };
}

export const FormForgotPass: React.FC<FormForgotPassProps> = ({
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
  linkLogin,
  ...props
}) => {
  const navigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
      return;
    }
    window.location.href = path;
  };

  return (
    <div
      className={[styles.n23mFormForgotPass, 'n23mFormForgotPass', className].filter(Boolean).join(' ')}
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
          className={styles.forogotPasswordWrapper}
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
            Forgot Password
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
              validatorOptions={[{ type: 'empty' }, { type: 'email' }]}
              label="Email"
              name="email"
              type="text"
              placeholder="Email"
            />

            <Grid layout="flex" justifyContent="space-between" alignItems="flex-start">
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

              {linkLogin && (
                <TextBox
                  tag="a"
                  href={linkLogin.link}
                  desktopSize={12}
                  mobileSize={12}
                  fontWeight={400}
                  color="var(--n23mTextBoxColor, orangered)"
                  colorHover="var(--n23mTextBoxColorHover, black)"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(linkLogin.link);
                  }}
                >
                  {linkLogin.text}
                </TextBox>
              )}
            </Grid>
          </Form>
        </Grid>
      </Grid>
    </div>
  );
};

FormForgotPass.displayName = 'FormForgotPass';
