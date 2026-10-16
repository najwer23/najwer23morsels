import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Button } from '../Button';
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
  menuMobile: React.ReactNode;
  outlet: React.ReactNode;
  /** Pass null (or omit the content) to hide the sidebar and the divider completely. */
  aside: React.ReactNode;
}

const SIDEBAR_WIDTH_DEFAULT = 300;
const SIDEBAR_WIDTH_MIN = 200;
const SIDEBAR_WIDTH_MAX = 480;
const COLLAPSE_THRESHOLD = 120;
const DRAG_THRESHOLD = 4;
const MOBILE_BREAKPOINT = 768;

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

  const hasAside = aside !== null && aside !== undefined && aside !== false;

  const [isSidebarOpenState, setIsSidebarOpen] = useState(width >= MOBILE_BREAKPOINT);
  const [sidebarWidth, setSidebarWidth] = useState(SIDEBAR_WIDTH_DEFAULT);
  const [isDragging, setIsDragging] = useState(false);

  const isSidebarOpen = hasAside && isSidebarOpenState;

  const dragRef = useRef<{
    startX: number;
    startWidth: number;
    moved: boolean;
    wasOpen: boolean;
  } | null>(null);

  const liveWidthRef = useRef(SIDEBAR_WIDTH_DEFAULT);
  const didDragRef = useRef(false);

  const toggleSidebar = () => {
    if (width < MOBILE_BREAKPOINT) {
      setIsSidebarOpen(false);
      return;
    }

    setIsSidebarOpen((open) => !open);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    didDragRef.current = false;

    if (e.button !== 0 || width < MOBILE_BREAKPOINT) return;

    e.currentTarget.setPointerCapture(e.pointerId);

    const startWidth = isSidebarOpen ? sidebarWidth : 0;

    dragRef.current = {
      startX: e.clientX,
      startWidth,
      moved: false,
      wasOpen: isSidebarOpen,
    };

    liveWidthRef.current = startWidth;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    const root = rootRef.current;

    if (!drag || !root) return;

    const dx = e.clientX - drag.startX;

    if (!drag.moved) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return;

      drag.moved = true;
      setIsDragging(true);
    }

    const next = Math.min(SIDEBAR_WIDTH_MAX, Math.max(0, drag.startWidth + dx));

    liveWidthRef.current = next;

    root.style.setProperty('--navigationdashboard-sidebar-w', `${next}px`);

    root.dataset.collapsing = next < COLLAPSE_THRESHOLD ? 'true' : 'false';

    if (!drag.wasOpen && next > 0) {
      setIsSidebarOpen(true);
    }
  };

  const endDrag = () => {
    const drag = dragRef.current;
    const root = rootRef.current;

    dragRef.current = null;

    if (!drag?.moved || !root) return;

    didDragRef.current = true;
    root.dataset.collapsing = 'false';

    const live = liveWidthRef.current;

    if (live < COLLAPSE_THRESHOLD) {
      root.style.setProperty('--navigationdashboard-sidebar-w', `${sidebarWidth}px`);

      setIsSidebarOpen(false);
    } else {
      const finalWidth = Math.min(SIDEBAR_WIDTH_MAX, Math.max(SIDEBAR_WIDTH_MIN, live));

      root.style.setProperty('--navigationdashboard-sidebar-w', `${finalWidth}px`);

      liveWidthRef.current = finalWidth;
      setSidebarWidth(finalWidth);
      setIsSidebarOpen(true);
    }

    setIsDragging(false);
  };

  const handleClick = () => {
    if (didDragRef.current) {
      didDragRef.current = false;
      return;
    }

    toggleSidebar();
  };

  useLayoutEffect(() => {
    if (width < MOBILE_BREAKPOINT) {
      setIsSidebarOpen(false);
    }
  }, [width]);

  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    root.style.setProperty('--navigationdashboard-sidebar-w', `${sidebarWidth}px`);
  }, [sidebarWidth]);

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

    window.addEventListener('scroll', schedule, {
      passive: true,
    });
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
      className={[styles.n23mNavigationDashboard, 'n23mNavigationDashboard', isDragging && styles.dragging, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
      style={
        {
          ...getCssVariableStyle({
            '--navigationdashboard-sidebar-w': `${sidebarWidth}px`,
            '--navigationdashboard-sidebar-min': `${SIDEBAR_WIDTH_MIN}px`,
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

      <Grid layout="container" padding="0 20px 0 0" widthMin={'100%'}>
        <div
          className={[styles.row, hasAside ? isSidebarOpen && styles.rowOpen : styles.rowNoAside]
            .filter(Boolean)
            .join(' ')}
        >
          {hasAside && (
            <div
              className={[
                styles.sidebarContainer,
                isSidebarOpen ? styles.sidebarContainerOpen : styles.sidebarContainerClosed,
              ].join(' ')}
            >
              <div className={[styles.sticky, isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed].join(' ')}>
                {aside}
              </div>
            </div>
          )}

          <div className={[styles.outlet, !hasAside && styles.outletNoAside].filter(Boolean).join(' ')}>
            {hasAside && width >= MOBILE_BREAKPOINT && (
              <div className={styles.toggleAnchor}>
                <Button
                  height="60px"
                  width="10px"
                  backgroundColor="darkgrey"
                  borderColor="black"
                  type="button"
                  onClick={handleClick}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={endDrag}
                  onPointerCancel={endDrag}
                  className={[isSidebarOpen ? styles.toggleOpen : styles.toggleClosed].join(' ')}
                >
                  <div>|</div>
                </Button>
              </div>
            )}

            <div className={styles.outletContent}>{outlet}</div>
          </div>
        </div>
      </Grid>
    </div>
  );
};

NavigationDashboard.displayName = 'NavigationDashboard';
