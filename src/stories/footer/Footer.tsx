import { Grid } from '../grid';
import { TextBox } from '../textbox';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './Footer.module.css';

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  author?: string;
  initialYear?: number;
  color?: React.CSSProperties['color'];
  backgroundColor?: React.CSSProperties['color'];
}

export const Footer: React.FC<FooterProps> = ({
  children,
  author = 'Mariusz Najwer',
  className,
  initialYear = '2019',
  backgroundColor = '#333333',
  color = 'white',
  style,
  ...props
}) => {
  return (
    <footer
      className={[styles.n23mFooter, 'n23mFooter', className].filter(Boolean).join(' ')}
      {...props}
      style={{
        ...getCssVariableStyle({
          '--bc': backgroundColor,
        }),
        ...style,
      }}
    >
      <div className={styles.n23mFooterPush}></div>
      <div className={styles.n23mFooterContainer}>
        <Grid layout="container" widthMax={'1600px'}>
          <Grid layout="flex" widthMax={'1400px'} padding={'20px 0 0'} justifyContent="center">
            <TextBox mobileSize={22} desktopSize={22} color={color} tag="p">
              © {author}
            </TextBox>
          </Grid>
          <Grid layout="flex" widthMax={'1400px'} padding={'0'} justifyContent="center">
            <TextBox mobileSize={12} desktopSize={12} color={color} tag="p">
              {initialYear} - {new Date().getFullYear()}
            </TextBox>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
