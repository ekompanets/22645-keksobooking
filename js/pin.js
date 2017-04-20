// pin.js
'use strict';

window.pin = (function () {

  var pinMap = null;

  // формирование пинов на карте
  var renderPin = function (ad, numAd) {
    var pinElement = document.createElement('div');
    var imgElement = document.createElement('img');
    pinElement.className = window.adData.PIN_CLASS;
    pinElement.style.left = (ad.location.x - window.adData.PIN_WIDTH / 2) + 'px';
    pinElement.style.top = (ad.location.y - window.adData.PIN_HEIGHT) + 'px';
    pinElement.tabIndex = '0';
    imgElement.className = window.adData.IMG_CLASS;
    imgElement.width = window.adData.IMG_WIDTH;
    imgElement.height = window.adData.IMG_HEIGHT;
    imgElement.src = ad.author.avatar;
    pinElement.appendChild(imgElement);

    if (numAd === window.adData.START_PIN_NUM) {
      setPinActive(pinElement, ad);
    }

    pinElement.addEventListener('click', function (evt) {
      setPinActive(pinElement, ad);
    });

    pinElement.addEventListener('keydown', function (evt) {
      if (window.utils.isEnterKeyCode(evt)) {
        setPinActive(pinElement, ad);
      }
    });

    return pinElement;
  };

  // деактивация пина
  var removePinActiveClass = function () {
    if (pinMap.querySelector('.' + window.adData.PIN_ACTIVE_CLASS)) {
      pinMap.querySelector('.' + window.adData.PIN_ACTIVE_CLASS).classList.remove(window.adData.PIN_ACTIVE_CLASS);
    }
  };

  // активация пина
  var setPinActive = function (pin, ad) {
    removePinActiveClass();
    pin.classList.add(window.adData.PIN_ACTIVE_CLASS);
    window.card.openCard();
    window.card.displayCard(ad);
  };

  var drawPins = function (ads, map) {
    pinMap = map;
    var fragment = document.createDocumentFragment();
    // формируем пины
    for (var i = 0; i < ads.length; i++) {
      fragment.appendChild(renderPin(ads[i], i, map));
    }
    pinMap.appendChild(fragment);
  };

  return {
    renderPin: renderPin,
    removePinActiveClass: removePinActiveClass,
    setPinActive: setPinActive,
    drawPins: drawPins
  };
})();
