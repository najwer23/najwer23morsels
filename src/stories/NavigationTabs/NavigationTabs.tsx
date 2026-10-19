import { useCallback, useEffect, useId, useRef } from 'react';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { TextBox } from '../TextBox';
import { isHashRoute, normalizePath, waitForRouteSettle } from './Navigation.utils';
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

  // Escape key and switching to a desktop viewport
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

  // Browser back and forward buttons
  useEffect(() => {
    const onHistoryChange = () => {
      // a menu click is already being watched: let it finish
      if (cancelWatchRef.current) return;

      if (isMenuOpen.current) closeMenu(true);
    };

    window.addEventListener('popstate', onHistoryChange);
    window.addEventListener('hashchange', onHistoryChange);

    return () => {
      window.removeEventListener('popstate', onHistoryChange);
      window.removeEventListener('hashchange', onHistoryChange);
    };
  }, [closeMenu]);

  const handleMobileMenuClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target;

    if (!(target instanceof Element)) return;

    const link = target.closest('a');

    if (!link) return;

    // ctrl/cmd/shift/middle click: not a normal in-page navigation, leave the menu alone
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    // new tab or download: the current page stays as it is, leave the menu alone
    if (link.getAttribute('target') === '_blank' || link.hasAttribute('download')) {
      stopWatching();
      return;
    }

    const url = new URL(link.href, window.location.href);

    // external link in the same tab: the page is about to unload, keep the menu as it is
    if (url.origin !== window.location.origin) {
      stopWatching();
      return;
    }

    const isSamePath =
      normalizePath(url.pathname) === normalizePath(window.location.pathname) && url.search === window.location.search;

    // the hash only changes the page if it's a route, either the one we leave or the one we enter
    const hashChangesPage =
      url.hash !== window.location.hash && (isHashRoute(url.hash) || isHashRoute(window.location.hash));

    // same path and nothing that changes the page: close with animation right away
    if (isSamePath && !hashChangesPage) {
      stopWatching();
      closeMenu();
      return;
    }

    // different path, or a hash route change: keep the menu covering the page
    // until the new route has rendered, then close with the regular animation
    stopWatching();
    cancelWatchRef.current = waitForRouteSettle(menuRef.current, () => {
      cancelWatchRef.current = null;
      closeMenu();
    });
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
                <div className={styles.menuPlaceholder}>
                  <Button
                    height="40px"
                    width="70px"
                    padding={0}
                    backgroundColor="orangered"
                    onClick={toggleMenu}
                    aria-label="Menu"
                    aria-controls={menuId}
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
