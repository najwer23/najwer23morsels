import { Button } from '../Button';
import { Form, type FormType } from '../Form';
import { Grid } from '../Grid';
import { Input } from '../Input';
import { TextBox } from '../TextBox';
import { Typography } from '../Typography';
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
            <Typography
              desktopSize={20}
              mobileSize={20}
              fontWeight={500}
              variant="link"
              href={linkMainPage.link}
              onClick={(e) => {
                e.preventDefault();
                navigate(linkMainPage.link);
              }}
            >
              {linkMainPage.text}
            </Typography>
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
              placeholder="you@example.com"
            />
            <Input
              label="Password"
              type="password"
              name="pass"
              validatorOptions={[{ type: 'empty' }]}
              placeholder="Enter your password"
            />

            <Grid layout="flex" justifyContent="space-between" alignItems="flex-start">
              <Button type="submit" disabled={isPending} variant="primary">
                <TextBox desktopSize={16} mobileSize={16} color="inherit">
                  Log in
                </TextBox>
              </Button>

              <div>
                {linkForgotPassword && (
                  <div>
                    <Typography
                      variant="link"
                      href={linkForgotPassword.link}
                      desktopSize={12}
                      mobileSize={12}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(linkForgotPassword.link);
                      }}
                    >
                      {linkForgotPassword.text}
                    </Typography>
                  </div>
                )}

                {linkSignUp && (
                  <Grid layout="flex" justifyContent="right">
                    <Typography
                      variant="link"
                      href={linkSignUp.link}
                      desktopSize={12}
                      mobileSize={12}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(linkSignUp.link);
                      }}
                    >
                      {linkSignUp.text}
                    </Typography>
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
