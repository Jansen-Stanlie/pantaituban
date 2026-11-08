const MIN_VISIBLE_MS = 700;
const MAX_WAIT_MS = 2000;
const FADE_MS = 400;

let finish;
/** Selesai setelah preloader hilang, supaya pop-up tidak muncul di atasnya. */
export const preloaderDone = new Promise((resolve) => {
  finish = resolve;
});

export function hidePreloader() {
  const el = document.getElementById("preloader");
  if (!el) {
    finish();
    return;
  }

  let hiding = false;
  const hide = () => {
    if (hiding) return;
    hiding = true;
    setTimeout(() => {
      el.classList.add("is-done");
      setTimeout(() => {
        el.remove();
        finish();
      }, FADE_MS);
    }, Math.max(0, MIN_VISIBLE_MS - performance.now()));
  };

  if (document.readyState === "complete") {
    hide();
  } else {
    window.addEventListener("load", hide, { once: true });
    setTimeout(hide, MAX_WAIT_MS);
  }
}
