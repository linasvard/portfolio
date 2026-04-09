// ─── Desktop navbar ───────────────────────────────────────────────
const navbar = document.querySelector('#navbar');
if (navbar) {
  navbar.innerHTML = `
    <nav class="navbar-top">
      <div class="links-navbar">
        <div class="menu-links-left">
          <a href="/index.html">Home</a>
          <a href="#">Work</a>
        </div>
        <div class="logo-navbar">
          <a class="logo-back-to-home" href="/index.html">
            Lina Svärd
          </a>
        </div>
        <div class="menu-links-right">
          <a href="/about-me.html">About me</a>
          <a href="/gallery.html">Gallery</a>
        </div>
        
        
      </div>
      
    </nav>
  `;
}

// ─── Mobile navbar ────────────────────────────────────────────────
const navbarMobile = document.querySelector('#navbarMobile');
if (navbarMobile) {
  navbarMobile.innerHTML = `
    <nav class="navbar-mobile">
      <button
        class="hamburger"
        id="hamburger"
        aria-label="Toggle menu"
        aria-expanded="false"
        aria-controls="mobile-drawer"
      >
        MENU
        <span></span>
        
      </button>
      <a class="logo-back-to-home" href="/index.html">L.S</a>
    </nav>

    <div class="mobile-drawer" id="mobile-drawer">
      <a href="/index.html">Home</a>
      <a href="#">Work</a>
      <a href="/about-me.html">About me</a>
      <a href="/gallery.html">Gallery</a>
    </div>
  `;

  // Toggle open/close
  const hamburger = document.querySelector<HTMLButtonElement>('#hamburger');
  const drawer    = document.querySelector<HTMLElement>('#mobile-drawer');

  hamburger?.addEventListener('click', () => {
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
  });
}