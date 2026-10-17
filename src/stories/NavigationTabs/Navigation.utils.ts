const URL_CHANGE_TIMEOUT_MS = 500; // URL must change within this time (else same-page click)
const SETTLE_MS = 100; // DOM must be quiet this long after the URL changed
const MAX_WAIT_MS = 3000; // safety net

/**
 * Waits until the URL changed AND the page DOM stopped changing, then calls onSettled once.
 * Mutations inside `ignoreEl` (the menu) are ignored. Returns a cancel function.
 */
export const waitForRouteSettle = (ignoreEl: Element | null, onSettled: () => void): (() => void) => {
  const startHref = window.location.href;
  const startedAt = performance.now();

  let done = false;
  let pollRaf = 0;
  let settleTimer: number | undefined;
  let observer: MutationObserver | undefined;

  const cleanup = () => {
    cancelAnimationFrame(pollRaf);
    clearTimeout(settleTimer);
    clearTimeout(maxTimer);
    observer?.disconnect();
  };

  const finish = () => {
    if (done) return;
    done = true;
    cleanup();
    onSettled();
  };

  const maxTimer = window.setTimeout(finish, MAX_WAIT_MS);

  const armSettleTimer = () => {
    clearTimeout(settleTimer);
    settleTimer = window.setTimeout(finish, SETTLE_MS);
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

    if (performance.now() - startedAt > URL_CHANGE_TIMEOUT_MS) {
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
