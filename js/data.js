// data.js
'use strict';

window.adData = (function () {
  // константы для формирования пинов
  var PIN_CLASS = 'pin';
  var PIN_ACTIVE_CLASS = 'pin--active';
  var IMG_CLASS = 'rounded';
  var IMG_WIDTH = 40;
  var IMG_HEIGHT = 40;
  var PIN_WIDTH = 56;
  var PIN_HEIGHT = 75;
  var PIN_MAIN_WIDTH = 75;
  var PIN_MAIN_HEIGHT = 94;
  var START_PIN_NUM = 0;

  // количество объявлений
  var NUM_ADS = 8;
  // константы для формирования объявлений
  var MIN_NUM_ROOMS = 1;
  var MAX_NUM_ROOMS = 5;
  var MIN_PRICE = 1000;
  var MAX_PRICE = 1000000;
  var MIN_X_LOCATION = 300;
  var MAX_X_LOCATION = 900;
  var MIN_Y_LOCATION = 100;
  var MAX_Y_LOCATION = 500;
  var MIN_NUM_GUESTS = 1;
  var MAX_NUM_GUESTS = 100;

  var TYPES_TRANSLATE = {
    'flat': 'Квартира',
    'bungalo': 'Бунгало',
    'house': 'Дом'
  };


  return {
    PIN_CLASS: PIN_CLASS,
    PIN_ACTIVE_CLASS: PIN_ACTIVE_CLASS,
    IMG_CLASS: IMG_CLASS,
    IMG_WIDTH: IMG_WIDTH,
    IMG_HEIGHT: IMG_HEIGHT,
    PIN_WIDTH: PIN_WIDTH,
    PIN_HEIGHT: PIN_HEIGHT,
    PIN_MAIN_WIDTH: PIN_MAIN_WIDTH,
    PIN_MAIN_HEIGHT: PIN_MAIN_HEIGHT,
    START_PIN_NUM: START_PIN_NUM,
    NUM_ADS: NUM_ADS,
    // константы для формирования объявлений
    MIN_NUM_ROOMS: MIN_NUM_ROOMS,
    MAX_NUM_ROOMS: MAX_NUM_ROOMS,
    MIN_PRICE: MIN_PRICE,
    MAX_PRICE: MAX_PRICE,
    MIN_X_LOCATION: MIN_X_LOCATION,
    MAX_X_LOCATION: MAX_X_LOCATION,
    MIN_Y_LOCATION: MIN_Y_LOCATION,
    MAX_Y_LOCATION: MAX_Y_LOCATION,
    MIN_NUM_GUESTS: MIN_NUM_GUESTS,
    MAX_NUM_GUESTS: MAX_NUM_GUESTS,
    TYPES_TRANSLATE: TYPES_TRANSLATE
  };
})();
