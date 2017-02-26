'use strict';

import on from 'event-listener';

on(document, 'DOMContentLoaded', _ => {
  let host = window.location.host;
  document.querySelectorAll('a').forEach(a => {
    if (a.host !== host) {
      a.classList.add('link--ext');
      a.setAttribute('target', '_blank');
    }
  });
});
