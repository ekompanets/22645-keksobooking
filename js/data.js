// data.js
'use strict';

window.adData = (function () {
  // статические массивы данных
  var TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
  var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var LODGE_TYPES = ['flat', 'house', 'bungalo'];
  var CHECKINS = ['12:00', '13:00', '14:00'];
  var CHECKOUTS = ['12:00', '13:00', '14:00'];
  var NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8];
  // константы для формирования пинов
  var PIN_CLASS = 'pin';
  var PIN_ACTIVE_CLASS = 'pin--active';
  var IMG_CLASS = 'rounded';
  var IMG_WIDTH = 40;
  var IMG_HEIGHT = 40;
  var PIN_WIDTH = 56;
  var PIN_HEIGHT = 75;
  var START_PIN_NUM = 0;

  // количество объявлений
  var numAds = 8;
  // константы для формирования объявлений
  var minNumRooms = 1;
  var maxNumRooms = 5;
  var minPrice = 1000;
  var maxPrice = 1000000;
  var minXLocation = 300;
  var maxXLocation = 900;
  var minYLocation = 100;
  var maxYLocation = 500;
  var minNumGuests = 1;
  var maxNumGuests = 100;

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
    START_PIN_NUM: START_PIN_NUM,
    numAds: numAds,
    // константы для формирования объявлений
    minNumRooms: minNumRooms,
    maxNumRooms: maxNumRooms,
    minPrice: minPrice,
    maxPrice: maxPrice,
    minXLocation: minXLocation,
    maxXLocation: maxXLocation,
    minYLocation: minYLocation,
    maxYLocation: maxYLocation,
    minNumGuests: minNumGuests,
    maxNumGuests: maxNumGuests,
    TITLES: TITLES,
    FEATURES: FEATURES,
    LODGE_TYPES: LODGE_TYPES,
    CHECKINS: CHECKINS,
    CHECKOUTS: CHECKOUTS,
    NUMBERS: NUMBERS,
    TYPES_TRANSLATE: TYPES_TRANSLATE
  }
})();