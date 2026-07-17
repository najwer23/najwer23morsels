import { Button } from '../Button';
import { Form, type FormType } from '../Form';
import { Grid } from '../Grid';
import { Input } from '../Input';
import { TextBox } from '../TextBox';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './FormLogin.module.css';

interface FormLoginData {
  code?: string;
  message?: string;
}

interface FormLoginError {
  message?: string;
}

interface FormLoginProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onSubmit: (formData: FormType) => void;
  isPending?: boolean;
  isError?: boolean;
  data?: FormLoginData;
  error?: FormLoginError;
  onNavigate?: (path: string) => void;
}

export const FormLogin: React.FC<FormLoginProps> = ({
  children,
  className,
  style,
  onSubmit,
  isPending = false,
  isError = false,
  data,
  error,
  onNavigate,
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
          ...getCssVariableStyle({
            '--formlogin': 'test',
          }),
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
        minHeight={'calc(100dvb - 100px)'}
      >
        <Grid
          layout="container"
          minHeight={0}
          widthMin={'min(450px, calc(100% - 40px))'}
          padding={'20px'}
          margin={'20px'}
          className={styles.loginWrapper}
        >
          <TextBox
            desktopSize={20}
            mobileSize={20}
            fontWeight={500}
            tag="a"
            href="/"
            color="grey"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            GYM
          </TextBox>

          <TextBox tag="h3" desktopSize={14} mobileSize={14} fontWeight={500} margin={'12px 0 18px'}>
            Good to see you!
          </TextBox>

          <Form
            onSubmit={onSubmit}
            isError={isError}
            isPending={isPending}
            isSuccess={data?.code === 'OK'}
            errorMsg={error?.message}
            successMsg={data?.message}
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
                <div>
                  <TextBox
                    tag="a"
                    href="/auth/forgot-password"
                    desktopSize={12}
                    mobileSize={12}
                    fontWeight={400}
                    color="orangered"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/auth/forgot-password');
                    }}
                  >
                    forgot password
                  </TextBox>
                </div>
                <Grid layout="flex" justifyContent="right">
                  <TextBox
                    tag="a"
                    href="/auth/sign-up"
                    desktopSize={12}
                    mobileSize={12}
                    fontWeight={400}
                    color="orangered"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/auth/sign-up');
                    }}
                  >
                    sign up
                  </TextBox>
                </Grid>
              </div>
            </Grid>
          </Form>
        </Grid>
      </Grid>
    </div>
  );
};

FormLogin.displayName = 'FormLogin';
