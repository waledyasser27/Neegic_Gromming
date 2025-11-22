// Mobile navbar toggle (pointer-friendly)

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  if (!btn || !menu) return;

  function toggleMenu(e) {
    // Avoid handling synthetic click events that may double-fire
    if (e.type === 'click' && e.detail === 0) return;
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    e.stopPropagation();
  }

  // Pointer events cover touch, mouse, pen
  btn.addEventListener('pointerup', toggleMenu, { passive: true });
  // Click fallback for older browsers
  btn.addEventListener('click', toggleMenu);

  // Close on outside pointer up
  document.addEventListener('pointerup', function (e) {
    if (!menu.contains(e.target) && !btn.contains(e.target) && menu.classList.contains('open')) {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Close with Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      btn.focus({ preventScroll: true });
    }
  });
});
