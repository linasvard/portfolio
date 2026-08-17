
// ─── Mobile navbar ────────────────────────────────────────────────
export function initMobileNavbar() {

  // Toggle open/close
  const hamburger = document.querySelector<HTMLButtonElement>('#hamburger');
  const drawer    = document.querySelector<HTMLElement>('#mobile-drawer');

  

  /* hamburger?.addEventListener('click', () => {
    const isOpen = drawer?.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.classList.toggle('open', isOpen);
  });

  // Close drawer when a link is clicked
  drawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      hamburger?.classList.remove('open');
    });
  });

  // Close drawer if resized back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      drawer?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      hamburger?.classList.remove('open');
    }
  }); */
}