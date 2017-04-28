// map.js
'use strict';

(function () {
  var pinMap = document.querySelector('.tokyo__pin-map');
  var filters = document.querySelector('.tokyo__filters');

  var loadedAds = null;
  var filteredAds = null;
  // получаем стартовый набор объявлений
  var getStartSet = function (array, number) {
    return array.splice(window.utils.getRandomInt(0, array.length - number), number)
  }

  var onLoad = function (ads) {
    loadedAds = ads;
    // отфильтровываем значениями по умолчанию
    filteredAds = window.filter(ads);
    // показываем пины на карте

    window.pin.show(getStartSet(filteredAds, window.adData.NUM_ADS), pinMap);
  };

  window.load('https://intensive-javascript-server-kjgvxfepjl.now.sh/keksobooking/data', onLoad);

  // FILTERS
  var filterPins = function () {
    filteredAds = window.filter(loadedAds);
    window.pin.removeAll(pinMap);
    window.pin.show(filteredAds, pinMap);
  };

  filters.addEventListener('change', function () {
    window.debounce(filterPins);
  });
  // DRAG
  // поле "адрес" формы
  var address = document.querySelector('#address');
  // пин добавляемого объявления
  var pinMain = document.querySelector('.pin__main');

  // получение координат, на которые указывает .pin__main
  var getAddress = function (posX, posY) {
    return {
      x: Math.floor(posX + window.adData.PIN_MAIN_WIDTH / 2),
      y: (posY + window.adData.PIN_MAIN_HEIGHT)
    };
  };
  // делаем .pin__main перетягиваемым,
  // в callback передаем функцию, которая получает координаты пина и передает их в поле "адрес" формы
  window.dragNDrop.setDragable(pinMain, pinMain, function (posX, posY) {
    var adr = getAddress(posX, posY);
    // проверяем координаты пина на вхождение в допустимый диапазон
    // "x": координата x метки на карте в блоке .tokyo__pin-map от 300 до 900,
    // "y": координата y метки на карте в блоке .tokyo__pin-map от 100 до 500
    // В случае, если пин вышел за пределы допустимой области,
    // callback-функция возвращает false, чтобы остановить движение пина
    // если координаты допустимые, обновляем значения в строке адрес
    var canMove = false;
    if ((adr.x >= window.adData.MIN_X_LOCATION) && (adr.x <= window.adData.MAX_X_LOCATION) && (adr.y >= window.adData.MIN_Y_LOCATION) && (adr.y <= window.adData.MAX_Y_LOCATION)) {
      address.value = 'x: ' + adr.x + ', y: ' + adr.y;
      canMove = true;
    }
    return canMove;
  });
})();
