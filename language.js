(function () {
  'use strict';
  document.querySelectorAll('.language-switch a').forEach(function (link) {
    const target = new URL(link.href, location.href);
    target.search = location.search;
    target.hash = location.hash;
    link.href = target.href;
  });
}());
