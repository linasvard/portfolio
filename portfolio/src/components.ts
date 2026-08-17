
// ─── Mobile navbar ────────────────────────────────────────────────
export function initMobileNavbar() {

  // Toggle open/close
  const hamburger = document.querySelector<HTMLButtonElement>('#hamburger');
  const drawer    = document.querySelector<HTMLElement>('#mobile-drawer');

  if (!hamburger || !drawer) {
    console.error('Hamburger button or mobile drawer not found in the DOM.');
    return;
  }

  const closeDrawer = () => {
    drawer.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  const openDrawer = () => {
    drawer.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
  };


  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = drawer.classList.contains('open');
    isOpen ? closeDrawer() : openDrawer();
  });

  document.addEventListener('click', (e) => {
    const target = e.target as Node;
    const clickedOutside = !drawer.contains(target) && !hamburger.contains(target);
    if (clickedOutside && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
      hamburger.focus();
    }
  });

    drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });
}