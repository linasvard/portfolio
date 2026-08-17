
// ─── Mobile navbar ────────────────────────────────────────────────
export function initMobileNavbar() {

  // Toggle open/close
  const hamburger = document.querySelector<HTMLButtonElement>('#hamburger');
  const drawer    = document.querySelector<HTMLElement>('#mobile-drawer');


  hamburger?.addEventListener('click', () => {
  const isOpen = drawer?.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(!!isOpen));
});

}