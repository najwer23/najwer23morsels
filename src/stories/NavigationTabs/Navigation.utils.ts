interface WaitForRouteSettleOptions {
  /** URL must change within this time, otherwise the click is treated as "no navigation" */
  urlChangeTimeoutMs?: number;
  /** DOM must be quiet this long after the URL changed */
  settleMs?: number;
  /** Safety net: always finish after this time */
  maxWaitMs?: number;
}

const DEFAULTS: Required<WaitForRouteSettleOptions> = {
  urlChangeTimeoutMs: 1500,
  settleMs: 150,
  maxWaitMs: 4000,
};

/** "#/blog-post-creator" or "#!/blog-post-creator" is a route, "#pricing" is an anchor */
export const isHashRoute = (hash: string): boolean => /^#!?\//.test(hash);

/** "/nook/" and "/nook" are the same page */
export const normalizePath = (path: string): string => path.replace(/\/+$/, '') || '/';

/**
 * Waits until the URL changed AND the page DOM stopped changing (and painted),
 * then calls onSettled once. Mutations inside `ignoreEl` (the menu) are ignored.
 * Returns a cancel function.
 */
export const waitForRouteSettle = (
  ignoreEl: Element | null,
  onSettled: () => void,
  options: WaitForRouteSettleOptions = {},
): (() => void) => {
  const { urlChangeTimeoutMs, settleMs, maxWaitMs } = { ...DEFAULTS, ...options };

  const startHref = window.location.href;
  const startedAt = performance.now();

  let done = false;
  let pollRaf = 0;
  let paintRaf = 0;
  let settleTimer: number | undefined;
  let maxTimer: number | undefined;
  let observer: MutationObserver | undefined;

  const cleanup = () => {
    cancelAnimationFrame(pollRaf);
    cancelAnimationFrame(paintRaf);
    clearTimeout(settleTimer);
    clearTimeout(maxTimer);
    observer?.disconnect();
  };

  const finish = () => {
    if (done) return;
    done = true;
    cleanup();

    // two frames, so the new page has painted underneath the menu before it closes
    paintRaf = requestAnimationFrame(() => {
      paintRaf = requestAnimationFrame(() => onSettled());
    });
  };

  maxTimer = window.setTimeout(finish, maxWaitMs);

  const armSettleTimer = () => {
    clearTimeout(settleTimer);
    settleTimer = window.setTimeout(finish, settleMs);
  };

  const startSettling = () => {
    observer = new MutationObserver((records) => {
      if (records.some((r) => !ignoreEl?.contains(r.target))) armSettleTimer();
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    armSettleTimer();
  };

  const poll = () => {
    if (done) return;

    if (window.location.href !== startHref) {
      startSettling();
      return;
    }

    if (performance.now() - startedAt > urlChangeTimeoutMs) {
      finish();
      return;
    }

    pollRaf = requestAnimationFrame(poll);
  };

  pollRaf = requestAnimationFrame(poll);

  return () => {
    done = true;
    cleanup();
  };
};
