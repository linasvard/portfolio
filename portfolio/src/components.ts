const navbar = document.querySelector('#navbar');
if (navbar) {
  navbar.innerHTML = `
    <nav class="navbar-top">
      <div class="links-navbar">
        <a href="/index.html">Home</a>
        <a href="#">Work</a>
        <a href="/about-me.html">About me</a>
        <a href="/gallery.html">Gallery</a>
      </div>
      <div>
        <a class="logo-back-to-home" href="/index.html">
          l.s
        </a>
      </div>      
    </nav>
  `;
}