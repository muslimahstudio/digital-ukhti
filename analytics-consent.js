/*
 * Preparado para Google Analytics 4. No incluir este archivo en las páginas
 * hasta conocer el ID de medición y actualizar la política de privacidad.
 * Uso: <script defer src="analytics-consent.js" data-ga-id="G-..."></script>
 */
(function () {
  'use strict';

  const script = document.currentScript;
  const measurementId = script && script.dataset.gaId;
  if (!measurementId || !/^G-[A-Z0-9]+$/.test(measurementId)) return;

  const key = 'digital-ukhti-analytics-consent';
  const stored = localStorage.getItem(key);
  let loaded = false;

  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(tag);
  }

  const style = document.createElement('style');
  style.textContent = `
    .du-consent{position:fixed;z-index:10000;bottom:16px;left:16px;right:16px;max-width:620px;padding:20px 22px;background:#fff;color:#1c1a18;border:1px solid #d7cbb8;box-shadow:0 10px 35px #1c1a1826;font:14px/1.55 Arial,sans-serif}
    .du-consent p{margin:0 0 14px}.du-consent a{text-decoration:underline;color:#6c5124}
    .du-consent-actions{display:flex;flex-wrap:wrap;gap:10px}
    .du-consent button{font:inherit;cursor:pointer;padding:9px 16px;border:1px solid #1c1a18;background:#fff;color:#1c1a18}
    .du-consent button[data-accept]{background:#1c1a18;color:#fff}
    .du-consent-settings{position:fixed;z-index:9999;bottom:12px;right:12px;padding:8px 12px;border:1px solid #d7cbb8;background:#fff;color:#1c1a18;font:12px Arial,sans-serif;cursor:pointer}
    @media(max-width:600px){.du-consent{bottom:0;left:0;right:0;padding:18px}.du-consent-settings{bottom:8px;right:8px}}
  `;
  document.head.appendChild(style);

  const settings = document.createElement('button');
  settings.type = 'button';
  settings.className = 'du-consent-settings';
  settings.textContent = 'Privacidad';
  settings.setAttribute('aria-label', 'Cambiar preferencias de cookies');
  document.body.appendChild(settings);

  function showChoice() {
    const existing = document.querySelector('.du-consent');
    if (existing) return;
    const panel = document.createElement('section');
    panel.className = 'du-consent';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Preferencias de cookies');
    panel.innerHTML = '<p>Usamos Google Analytics para conocer las visitas a esta web solo si aceptas. Puedes rechazarlo o cambiar tu elección cuando quieras. <a href="/privacidad.html">Política de privacidad</a>.</p><div class="du-consent-actions"><button type="button" data-reject>Rechazar</button><button type="button" data-accept>Aceptar estadísticas</button></div>';
    document.body.appendChild(panel);
    function choose(value) {
      localStorage.setItem(key, value);
      panel.remove();
      if (value === 'accepted') loadAnalytics();
      else if (loaded) window.location.reload();
    }
    panel.querySelector('[data-reject]').addEventListener('click', function () { choose('rejected'); });
    panel.querySelector('[data-accept]').addEventListener('click', function () { choose('accepted'); });
  }

  settings.addEventListener('click', showChoice);
  if (stored === 'accepted') loadAnalytics();
  else if (stored !== 'rejected') showChoice();
}());
