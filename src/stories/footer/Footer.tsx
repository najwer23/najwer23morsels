import { Grid } from '../grid';
import { TextBox } from '../textbox';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Footer.module.css';

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Footer: React.FC<FooterProps> = ({ children, className, style, ...props }) => {
  return (
    <footer
      className={[styles.n23mFooter, 'n23mFooter', className].filter(Boolean).join(' ')}
      {...props}
      style={
        {
          ...getCssVariableStyle({
            '--footer': 'test',
          }),
          ...style,
        } as React.CSSProperties
      }
    >
      <div className={styles.n23mFooterPush}></div>
      <div className={styles.n23mFooterContainer}>
        <Grid layout="container" widthMax={'1600px'}>
          <Grid layout="flex" widthMax={'1400px'} padding={'20px 0 0'} justifyContent="center">
            <TextBox mobileSize={22} desktopSize={22} color="black" tag="p">
              © Mariusz Najwer
            </TextBox>
          </Grid>
          <Grid layout="flex" widthMax={'1400px'} padding={'0'} justifyContent="center">
            <TextBox mobileSize={12} desktopSize={12} color="black" tag="p">
              2019 - {new Date().getFullYear()}
            </TextBox>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
