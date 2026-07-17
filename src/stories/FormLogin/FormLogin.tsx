import { Button } from '../Button';
import { Form, type FormType } from '../Form';
import { Grid } from '../Grid';
import { Input } from '../Input';
import { TextBox } from '../TextBox';
import styles from './FormLogin.module.css';

interface FormLoginProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  style?: React.CSSProperties;
  onSubmit: (formData: FormType) => void;
  isError: boolean;
  isPending: boolean;
  isSuccess: boolean;
  errorMsg: string | null | undefined;
  successMsg: string | null | undefined;
  onNavigate?: (path: string) => void;
  linkMainPage?: {
    link: string;
    text: string;
  };
  linkForgotPassword?: {
    link: string;
    text: string;
  };
  linkSignUp?: {
    link: string;
    text: string;
  };
  footerHeight?: React.CSSProperties['height'];
}

export const FormLogin: React.FC<FormLoginProps> = ({
  className,
  style,
  onSubmit,
  isPending,
  isError,
  isSuccess,
  errorMsg,
  successMsg,
  onNavigate,
  linkMainPage,
  linkForgotPassword,
  linkSignUp,
  footerHeight = '100px',
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
      className={[styles.n23mFormLogin, 'n23mFormLogin', className].filter(Boolean).join(' ')}
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
          className={styles.loginWrapper}
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
                navigate('/');
              }}
            >
              {linkMainPage.text}
            </TextBox>
          )}

          <TextBox tag="h3" desktopSize={14} mobileSize={14} fontWeight={500} margin={'12px 0 18px'}>
            Good to see you!
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
            <Input
              label="Password"
              type="password"
              name="pass"
              validatorOptions={[{ type: 'empty' }]}
              placeholder="Password"
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
                  LOG IN
                </TextBox>
              </Button>

              <div>
                {linkForgotPassword && (
                  <div>
                    <TextBox
                      tag="a"
                      href={linkForgotPassword.text}
                      desktopSize={12}
                      mobileSize={12}
                      fontWeight={400}
                      color="var(--n23mTextBoxColor, orangered)"
                      colorHover="var(--n23mTextBoxColorHover, black)"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(linkForgotPassword.text);
                      }}
                    >
                      {linkForgotPassword.text}
                    </TextBox>
                  </div>
                )}

                {linkSignUp && (
                  <Grid layout="flex" justifyContent="right">
                    <TextBox
                      tag="a"
                      href={linkSignUp.text}
                      desktopSize={12}
                      mobileSize={12}
                      fontWeight={400}
                      color="var(--n23mTextBoxColor, orangered)"
                      colorHover="var(--n23mTextBoxColorHover, black)"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(linkSignUp.text);
                      }}
                    >
                      sign up
                    </TextBox>
                  </Grid>
                )}
              </div>
            </Grid>
          </Form>
        </Grid>
      </Grid>
    </div>
  );
};

FormLogin.displayName = 'FormLogin';
