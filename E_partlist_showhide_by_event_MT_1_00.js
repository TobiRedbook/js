(function($) {
  'use strict';

  kintone.events.on('app.record.detail.show', function(event) {
    window.alert('Onload Record Create Event');
  });
})();
