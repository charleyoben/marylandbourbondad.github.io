// Shared nav + footer injected on every page
(function(){
  const NAV_HTML = `
<nav class="site-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">Maryland <span>Bourbon Dad</span></a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="scout-report.html">Scout Report</a></li>
      <li class="nav-dropdown">
        <a href="the-pour.html">The Pour</a>
        <ul class="nav-dropdown-menu">
          <li><a href="behind-the-bar.html">Behind the Bar</a></li>
          <li><a href="field-notes.html">MBD Field Notes</a></li>
          <li><a href="lounge.html">The MBD Lounge</a></li>
        </ul>
      </li>
      <li><a href="kitchen.html">MBD Kitchen</a></li>
      <li><a href="virtual-cabinet.html">Virtual Cabinet</a></li>
      <li><a href="distillery-scout.html">Distillery Scout</a></li>
      <li><a href="beyond-maryland.html">Beyond Maryland</a></li>
      <li><a href="flavor-lab.html">Flavor Lab</a></li>
      <li><a href="store.html">Store</a></li>
    </ul>
    <button class="nav-burger" onclick="toggleMobileNav()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav-mobile" id="mobileNav">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="scout-report.html">Scout Report</a>
    <a href="the-pour.html">The Pour</a>
    <a href="behind-the-bar.html">&nbsp;&nbsp;↳ Behind the Bar</a>
    <a href="field-notes.html">&nbsp;&nbsp;↳ MBD Field Notes</a>
    <a href="lounge.html">&nbsp;&nbsp;↳ The MBD Lounge</a>
    <a href="kitchen.html">MBD Kitchen</a>
    <a href="virtual-cabinet.html">Virtual Cabinet</a>
    <a href="distillery-scout.html">Distillery Scout</a>
    <a href="beyond-maryland.html">Beyond Maryland</a>
    <a href="flavor-lab.html">Flavor Lab</a>
    <a href="store.html">Store</a>
  </div>
</nav>`;

  const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-logo">Maryland Bourbon Dad</div>
  <div class="footer-tagline">Seek. Sip. Savor the Moment.</div>
  <div class="footer-links">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="scout-report.html">Scout Report</a>
    <a href="the-pour.html">The Pour</a>
    <a href="kitchen.html">MBD Kitchen</a>
    <a href="virtual-cabinet.html">Virtual Cabinet</a>
    <a href="distillery-scout.html">Distillery Scout</a>
    <a href="beyond-maryland.html">Beyond Maryland</a>
    <a href="flavor-lab.html">Flavor Lab</a>
    <a href="store.html">Store</a>
  </div>
  <div class="footer-copy">&copy; 2025 Maryland Bourbon Dad &mdash; marylandbourbondad.com</div>
</footer>`;

  document.getElementById('site-nav').innerHTML = NAV_HTML;
  document.getElementById('site-footer').innerHTML = FOOTER_HTML;

  // Highlight active link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    if(a.getAttribute('href') === path) a.classList.add('active');
  });
})();

function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}
