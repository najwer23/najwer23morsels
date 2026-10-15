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

const SIDEBAR_WIDTH_DEFAULT = 300;
const SIDEBAR_WIDTH_MIN = 200;
const SIDEBAR_WIDTH_MAX = 480;
const COLLAPSE_THRESHOLD = 120; // release below this width -> sidebar closes
const DRAG_THRESHOLD = 4; // px of movement before a press becomes a drag

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
  const [sidebarWidth, setSidebarWidth] = useState(SIDEBAR_WIDTH_DEFAULT);
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef<{ startX: number; startWidth: number; moved: boolean } | null>(null);
  const liveWidthRef = useRef(SIDEBAR_WIDTH_DEFAULT);
  const didDragRef = useRef(false);

  const toggleSidebar = () => {
    if (width < 768) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen((open) => !open);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    didDragRef.current = false;
    if (!isSidebarOpen || e.button !== 0) return; // only drag while open, primary button only
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = { startX: e.clientX, startWidth: sidebarWidth, moved: false };
    liveWidthRef.current = sidebarWidth;
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

    // can shrink all the way to 0 so the sidebar visibly follows the cursor to the edge
    const next = Math.min(SIDEBAR_WIDTH_MAX, Math.max(0, drag.startWidth + dx));
    liveWidthRef.current = next;

    root.style.setProperty('--sidebar-w', `${next}px`); // no React render per move
    root.dataset.collapsing = next < COLLAPSE_THRESHOLD ? 'true' : 'false';
  };

  const endDrag = () => {
    const drag = dragRef.current;
    const root = rootRef.current;
    dragRef.current = null;
    if (!drag?.moved || !root) return;

    didDragRef.current = true; // swallow the click that follows the drag
    root.dataset.collapsing = 'false';

    const live = liveWidthRef.current;

    if (live < COLLAPSE_THRESHOLD) {
      // collapse, but remember the previous width so reopening restores it
      root.style.setProperty('--sidebar-w', `${drag.startWidth}px`);
      setIsSidebarOpen(false);
    } else {
      // snap back to the minimum if released between threshold and minimum
      const finalWidth = Math.min(SIDEBAR_WIDTH_MAX, Math.max(SIDEBAR_WIDTH_MIN, live));
      root.style.setProperty('--sidebar-w', `${finalWidth}px`);
      setSidebarWidth(finalWidth);
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
      className={[styles.n23mNavigationDashboard, 'n23mNavigationDashboard', isDragging && styles.dragging, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
      style={
        {
          ...getCssVariableStyle({
            '--navigationdashboard': 'test',
          }),
          '--sidebar-w': `${sidebarWidth}px`,
          '--sidebar-min': `${SIDEBAR_WIDTH_MIN}px`,
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
          {/* Sidebar wrapper: width follows --sidebar-w, transition is off while dragging */}
          <Grid
            layout="container"
            margin={0}
            style={{
              overflow: 'clip',
              width: isSidebarOpen ? 'var(--sidebar-w)' : '0px',
              minWidth: isSidebarOpen ? 'var(--sidebar-w)' : '0px',
              maxWidth: isSidebarOpen ? 'var(--sidebar-w)' : '0px',
              transition: isDragging
                ? 'none'
                : `width ${SIDEBAR_TRANSITION}, min-width ${SIDEBAR_TRANSITION}, max-width ${SIDEBAR_TRANSITION}`,
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
                onClick={handleClick}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
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
