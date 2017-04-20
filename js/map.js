// map.js
'use strict';

(function () {
  var pinMap = document.querySelector('.tokyo__pin-map');
  // отрисовываем пины
  window.pin.drawPins(window.advert.createAds(), pinMap);

})();
