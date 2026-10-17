import { useCallback, useEffect, useId, useRef } from 'react';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { TextBox } from '../TextBox';
import { waitForRouteSettle } from './Navigation.utils';
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
  const menuId = useId();
  const placeholderRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isMenuOpen = useRef(false);
  const rafRef = useRef<number | null>(null);
  const cancelWatchRef = useRef<(() => void) | null>(null);

  const cancelPendingAnimation = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const stopWatching = useCallback(() => {
    cancelWatchRef.current?.();
    cancelWatchRef.current = null;
  }, []);

  const openMenu = useCallback(() => {
    const menu = menuRef.current;
    const content = contentRef.current;

    if (!menu || !content) return;

    stopWatching();
    cancelPendingAnimation();

    isMenuOpen.current = true;

    menu.classList.remove(styles.noAnimation);
    content.classList.remove(styles.noAnimation);

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => {
        if (!isMenuOpen.current) return;

        menu.classList.add(styles.menuOpen);
        content.classList.add(styles.menuAnimation);
        rafRef.current = null;
      });
    });
  }, [cancelPendingAnimation, stopWatching]);

  const closeMenu = useCallback(
    (withoutAnimation = false) => {
      const menu = menuRef.current;
      const content = contentRef.current;

      if (!menu || !content) return;

      stopWatching();
      cancelPendingAnimation();

      isMenuOpen.current = false;

      if (withoutAnimation) {
        menu.classList.add(styles.noAnimation);
        content.classList.add(styles.noAnimation);
      }

      menu.classList.remove(styles.menuOpen);
      content.classList.remove(styles.menuAnimation);
    },
    [cancelPendingAnimation, stopWatching],
  );

  const toggleMenu = () => {
    if (isMenuOpen.current) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen.current) closeMenu();
    };

    const mql = window.matchMedia('(max-width: 767.98px)');
    const onMediaChange = (e: MediaQueryListEvent) => {
      if (!e.matches && isMenuOpen.current) closeMenu(true);
    };

    document.addEventListener('keydown', onKeyDown);
    mql.addEventListener('change', onMediaChange);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      mql.removeEventListener('change', onMediaChange);
      stopWatching();
      cancelPendingAnimation();
    };
  }, [closeMenu, stopWatching, cancelPendingAnimation]);

  const handleMobileMenuClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target;

    if (!(target instanceof Element)) return;

    const link = target.closest('a');

    if (!link) return;

    // ctrl/cmd/shift/middle click: not a normal in-page navigation, leave the menu alone
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    // external link opened in a new tab: leave the menu as it is
    if (link.getAttribute('target') === '_blank') {
      stopWatching();
      return;
    }

    // special link: keep the menu open until the route has rendered, then close instantly
    if (link.hasAttribute('data-no-menu-close-animation')) {
      stopWatching();

      // already on this page: nothing will change, close right away
      if (link.href === window.location.href) {
        closeMenu(true);
        return;
      }

      cancelWatchRef.current = waitForRouteSettle(menuRef.current, () => {
        cancelWatchRef.current = null;
        closeMenu(true);
      });
      return;
    }

    // normal link: cancel any pending special close and close with the regular animation
    stopWatching();
    closeMenu();
  };

  return (
    <div
      className={[styles.n23mNavigationTabs, 'n23mNavigationTabs', className].filter(Boolean).join(' ')}
      style={style}
      {...props}
    >
      <Grid layout="container" widthMax={widthMainContainer}>
        <Grid layout="container" widthMax={widthInnerContainer} padding="20px" margin="auto">
          <Grid
            layout="columns"
            gap={{ col: '20px', row: '20px' }}
            col={{
              smallDesktop: 2,
              desktop: 2,
              mobile: 2,
              tablet: 2,
            }}
          >
            <div>{menuTopLeftColumn}</div>

            <div className={menuMobile ? styles.menuItemDesktop : undefined}>{menuTopRightColumn}</div>

            {menuMobile && (
              <div className={styles.menuItemMobile}>
                <div ref={placeholderRef} className={styles.menuPlaceholder}>
                  <Button
                    height="40px"
                    width="70px"
                    padding={0}
                    backgroundColor="orangered"
                    onClick={toggleMenu}
                    aria-label="Menu"
                    aria-controls={menuId}
                    aria-expanded={false}
                  >
                    <TextBox tag="span" desktopSize={20} mobileSize={20} fontWeight={400} color="white">
                      Menu
                    </TextBox>
                  </Button>
                </div>

                <div id={menuId} ref={menuRef} className={styles.menu}>
                  <div ref={contentRef} className={styles.menuContent} onClickCapture={handleMobileMenuClickCapture}>
                    {menuMobile}
                  </div>
                </div>
              </div>
            )}
          </Grid>
        </Grid>

        <div className={styles.navigationLine} />

        {!menuOnlyTop && (
          <Grid
            layout="container"
            widthMax={widthInnerContainer}
            padding="20px"
            margin="auto"
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
