// ---------------------------------------------------------------------
// Mobile nav toggle
// ---------------------------------------------------------------------
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------------------------------------------------------------------
// Scroll reveal
// ---------------------------------------------------------------------
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');

if (prefersReducedMotion) {
  revealEls.forEach((el) => el.classList.add('visible'));
} else if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('visible'));
}

// ---------------------------------------------------------------------
// Visitor counter
//
// TODO (later step in the Cloud Resume Challenge build): replace this
// stub with a real fetch() call to the Azure Function HTTP endpoint,
// e.g.:
//
//   const res = await fetch('https://<your-function-app>.azurewebsites.net/api/counter');
//   const { count } = await res.json();
//   counterEl.textContent = count.toLocaleString();
//
// Until the backend (CosmosDB + Azure Function) exists, this just
// shows a placeholder so the layout can be reviewed end-to-end.
// ---------------------------------------------------------------------
const counterEl = document.getElementById('visitorCount');
if (counterEl) {
  counterEl.textContent = '—';
}
