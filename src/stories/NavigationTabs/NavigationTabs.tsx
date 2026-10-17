import { useRef } from 'react';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { TextBox } from '../TextBox';
import styles from './NavigationTabs.module.css';

interface NavigationTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  menuTopLeftColumn: React.ReactNode;
  menuTopRightColumn: React.ReactNode;
  menuMobile?: React.ReactNode;
  menuBottomTabs?: React.ReactNode;
  menuOnlyTop?: boolean;
  widthMainContainer?: React.CSSProperties['width'];
  widthInnerContainer?: React.CSSProperties['width'];
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  children,
  className,
  style,
  menuTopLeftColumn = <>menuTopLeftColumn</>,
  menuTopRightColumn = <>menuTopRightColumn</>,
  menuMobile,
  menuBottomTabs = <>menuBottomTabs</>,
  menuOnlyTop = false,
  widthMainContainer = '1600px',
  widthInnerContainer = '1400px',
  ...props
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isMenuOpen = useRef(false);
  const rafRef = useRef<number | null>(null);

  const openMenu = () => {
    isMenuOpen.current = true;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => {
        menuRef.current?.classList.add(styles.menuOpen);
        contentRef.current?.classList.add(styles.menuAnimation);
      });
    });
  };

  const closeMenu = (withoutAnimation = false) => {
    isMenuOpen.current = false;

    if (withoutAnimation) {
      menuRef.current?.classList.add(styles.noAnimation);
      contentRef.current?.classList.add(styles.noAnimation);
    }

    menuRef.current?.classList.remove(styles.menuOpen);
    contentRef.current?.classList.remove(styles.menuAnimation);

    if (withoutAnimation) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          menuRef.current?.classList.remove(styles.noAnimation);
          contentRef.current?.classList.remove(styles.noAnimation);
        });
      });
    }
  };

  const toggleMenu = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    isMenuOpen.current ? closeMenu() : openMenu();
  };

  const handleMobileMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const link = (e.target as HTMLElement).closest('a');

    if (link) {
      closeMenu(link.hasAttribute('data-no-menu-close-animation'));
    }
  };

  return (
    <div className={[styles.n23mNavigationTabs, 'n23mNavigationTabs', className].filter(Boolean).join(' ')} {...props}>
      <Grid layout="container" widthMax={widthMainContainer}>
        <Grid layout="container" widthMax={widthInnerContainer} padding={'20px'} margin={'auto'}>
          <Grid
            layout="columns"
            gap={{ col: '20px', row: '20px' }}
            col={{ smallDesktop: 2, desktop: 2, mobile: 2, tablet: 2 }}
          >
            <div>{menuTopLeftColumn}</div>

            <div className={[...(menuMobile ? [styles.menuItemDesktop] : [])].join(' ')}>{menuTopRightColumn}</div>

            {/* mobile */}
            {menuMobile && (
              <div className={[styles.menuItemMobile].join(' ')}>
                <div className={styles.menuPlaceholder}>
                  <Button height={'40px'} width={'70px'} padding={0} backgroundColor="orangered" onClick={toggleMenu}>
                    <TextBox tag="span" desktopSize={20} mobileSize={20} fontWeight={400} color="white">
                      Menu
                    </TextBox>
                  </Button>
                </div>

                <div ref={menuRef} className={styles.menu}>
                  <div ref={contentRef} className={styles.menuContent} onClick={handleMobileMenuClick}>
                    {menuMobile}
                  </div>
                </div>
              </div>
            )}
          </Grid>
        </Grid>

        <div className={styles.navigationLine}></div>

        {!menuOnlyTop && (
          <Grid
            layout="container"
            widthMax={widthInnerContainer}
            padding={'20px'}
            margin={'auto'}
            className={styles.navigationTabMenu}
          >
            <Grid
              layout="flex"
              justifyContent="center"
              widthMax={widthInnerContainer}
              gap={{ col: '30px', row: '20px' }}
            >
              {menuBottomTabs}
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

NavigationTabs.displayName = 'NavigationTabs';
