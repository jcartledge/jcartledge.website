'use strict';

import $ from 'jquery';

$(() => {
  let host = window.location.host;
  $('a').each((_, a) => {
    if (a.host !== host) {
      $(a).addClass('link--ext').attr('target', '_blank');
    }
  });
});
