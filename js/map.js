// map.js
'use strict';

(function () {
  var pinMap = document.querySelector('.tokyo__pin-map');
  // отрисовываем пины
  var ads = window.getAdvert.createAds();
  window.pin.drawPins(ads, pinMap);

})();
