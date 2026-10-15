import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Grid } from '../Grid';
import { useWindowSize } from '../hooks';
import { NavigationTabs } from '../NavigationTabs';
import { getCssVariableStyle } from '../utils/getCssVariableStyle';
import styles from './NavigationDashboard.module.css';

interface NavigationDashboardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  menuTopLeftColumn: React.ReactNode;
  menuTopRightColumn: React.ReactNode;
  menuMobile?: React.ReactNode;
  outlet?: React.ReactNode;
  aside?: React.ReactNode;
}

const SIDEBAR_WIDTH = 300;
const SIDEBAR_DURATION = '450ms';
const SIDEBAR_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
const SIDEBAR_TRANSITION = `${SIDEBAR_DURATION} ${SIDEBAR_EASING}`;

const test =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled";

export const NavigationDashboard: React.FC<NavigationDashboardProps> = ({
  children,
  className,
  style,
  menuTopLeftColumn = <>menuTopLeftColumn</>,
  menuTopRightColumn = <>menuTopRightColumn</>,
  menuMobile = <>menuMobile</>,
  outlet = <>outlet</>,
  aside = <>aside</>,
  ...props
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const { width } = useWindowSize();

  const [isSidebarOpen, setIsSidebarOpen] = useState(width >= 768);

  const toggleSidebar = () => {
    if (width < 768) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen((open) => !open);
    }
  };

  useLayoutEffect(() => {
    if (width < 768) {
      setIsSidebarOpen(false);
    }
  }, [width]);

  useEffect(() => {
    const root = rootRef.current;
    const header = headerRef.current;
    if (!root || !header) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const visible = Math.max(0, header.getBoundingClientRect().bottom);
      root.style.setProperty('--navigationdashboard-h', `${visible}px`);
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    const ro = new ResizeObserver(schedule);
    ro.observe(header);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={[styles.n23mNavigationDashboard, 'n23mNavigationDashboard', className].filter(Boolean).join(' ')}
      {...props}
      style={
        {
          ...getCssVariableStyle({
            '--navigationdashboard': 'test',
          }),
          ...style,
        } as React.CSSProperties
      }
    >
      <div ref={headerRef}>
        <NavigationTabs
          widthInnerContainer="100%"
          widthMainContainer="100%"
          menuOnlyTop
          menuTopLeftColumn={menuTopLeftColumn}
          menuTopRightColumn={menuTopRightColumn}
          menuMobile={menuMobile}
        />
      </div>

      <Grid layout="container" padding="0 20px 0 0px">
        <Grid
          layout="flex"
          alignItems="stretch"
          justifyContent="flex-start"
          margin={0}
          padding={0}
          style={{ width: '100%' }}
        >
          {/* Sidebar wrapper: width, min-width and max-width animate together */}
          <Grid
            layout="container"
            margin={0}
            style={{
              overflow: 'clip',
              width: isSidebarOpen ? `${SIDEBAR_WIDTH}px` : '0px',
              minWidth: isSidebarOpen ? `${SIDEBAR_WIDTH}px` : '0px',
              maxWidth: isSidebarOpen ? `${SIDEBAR_WIDTH}px` : '0px',
              transition: `width ${SIDEBAR_TRANSITION}, min-width ${SIDEBAR_TRANSITION}, max-width ${SIDEBAR_TRANSITION}`,
            }}
          >
            <div className={[styles.sticky, isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed].join(' ')}>
              {test.repeat(49)}
              {aside}
            </div>
          </Grid>

          {/* Main column: its left edge is the sidebar's right edge */}
          <Grid layout="container" padding="20px 0 20px 20px" margin={0}>
            <div className={styles.toggleAnchor}>
              <button
                type="button"
                onClick={toggleSidebar}
                aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
                aria-expanded={isSidebarOpen}
                className={[styles.toggle, isSidebarOpen ? styles.toggleOpen : styles.toggleClosed].join(' ')}
              />
            </div>

            {test.repeat(999)}
            {outlet}
            {children}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

NavigationDashboard.displayName = 'NavigationDashboard';
