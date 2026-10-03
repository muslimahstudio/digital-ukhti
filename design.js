/* Reuse the existing contact link and text; no tracking or dependencies. */
(function () {
  'use strict';
  const contact = document.querySelector('a[href="#contacto"]:not(.menu a), a[href*="index.html"][href$="#contacto"]');
  if (contact) {
    const fixed = contact.cloneNode(true);
    fixed.className = 'du-mobile-contact';
    fixed.removeAttribute('id');
    document.body.appendChild(fixed);
  }
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  if (toggle && menu) {
    menu.id = menu.id || 'main-menu';
    toggle.setAttribute('aria-controls', menu.id);
    function sync() { toggle.setAttribute('aria-expanded', String(menu.classList.contains('active'))); }
    sync();
    new MutationObserver(sync).observe(menu, { attributes: true, attributeFilter: ['class'] });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menu.classList.contains('active')) {
        menu.classList.remove('active');
        toggle.focus();
      }
    });
  }
  const name = document.getElementById('nombre');
  const email = document.getElementById('email');
  if (name) name.autocomplete = 'name';
  if (email) email.autocomplete = 'email';
}());
