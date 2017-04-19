// pin.js
'use strict';

window.pin = (function () {

  var pinMap = document.querySelector('.tokyo__pin-map');

  // формирование пинов на карте
  var renderPin = function (ad, numAd) {
    var pinElement = document.createElement('div');
    var imgElement = document.createElement('img');
    pinElement.className = adData.PIN_CLASS;
    pinElement.style.left = (ad.location.x - adData.PIN_WIDTH / 2) + 'px';
    pinElement.style.top = (ad.location.y - adData.PIN_HEIGHT) + 'px';
    pinElement.tabIndex = '0';
    imgElement.className = adData.IMG_CLASS;
    imgElement.width = adData.IMG_WIDTH;
    imgElement.height = adData.IMG_HEIGHT;
    imgElement.src = ad.author.avatar;
    pinElement.appendChild(imgElement);

    if (numAd === adData.START_PIN_NUM) {
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
    if (pinMap.querySelector('.' + adData.PIN_ACTIVE_CLASS)) {
      pinMap.querySelector('.' + adData.PIN_ACTIVE_CLASS).classList.remove(adData.PIN_ACTIVE_CLASS);
    }
  };

  // активация пина
  var setPinActive = function (pin, ad) {
    removePinActiveClass();
    pin.classList.add(adData.PIN_ACTIVE_CLASS);
    card.openCard();
    card.displayCard(ad);
  };

  var displayPins = function (ads) {
    var fragment = document.createDocumentFragment();
    // формируем пины
    for (var i = 0; i < ads.length; i++) {
      fragment.appendChild(renderPin(ads[i], i));
    }

    pinMap.appendChild(fragment);
  }

  return {
    renderPin: renderPin,
    removePinActiveClass: removePinActiveClass,
    setPinActive: setPinActive,
    displayPins:  displayPins
  }
})();