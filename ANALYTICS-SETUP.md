# Google Analytics: preparación pendiente de activación

La cuenta y el flujo web de GA4 aún no se han creado. No hay ID de medición y la web publicada no carga Google Analytics.

## Activación

1. Completar la cuenta **Digital Ukhti**, propiedad **Digital Ukhti**, zona horaria de **Francia** y moneda **EUR**. Mantener desactivadas las cuatro opciones adicionales de compartir datos de la cuenta.
2. Crear un flujo web para `https://digitalukhti.com/` y copiar su ID `G-…`.
3. Revisar las condiciones de Google y la configuración de recogida, conservación y uso compartido de datos de la propiedad.
4. Actualizar `privacidad.html` con el proveedor, finalidad de estadísticas, consentimiento, categorías de datos, conservación y forma de retirarlo. Conservar las advertencias legales aún pendientes sin añadir dirección ni teléfono.
5. Añadir `<script defer src="/analytics-consent.js" data-ga-id="G-..."></script>` a las páginas de Digital Ukhti que se quieran medir. No incorporarlo en los proyectos ficticios presentados como webs independientes.
6. Comprobar en una sesión sin elección previa que no se solicita `googletagmanager.com` antes de aceptar; comprobar rechazo, aceptación y cambio de preferencia. Verificar datos en el informe en tiempo real de GA4.

`analytics-consent.js` no hace nada si se carga sin un ID válido. La preferencia se guarda localmente en el navegador. El botón «Privacidad» permite reabrir el diálogo; al rechazar después de aceptar, la página se recarga para detener la medición de esa visita.
