// map.js
'use strict;'

var dialogPanel = document.querySelector('.dialog__panel');
var dialogTitleImg = document.querySelector('.dialog__title img');
var pinMap = document.querySelector('.tokyo__pin-map');

var lodgeTemplate = document.querySelector('#lodge-template').content;
// статические массивы данных
var TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var LODGE_TYPES = ['flat', 'house', 'bungalo']
var CHECKINS = ['12:00', '13:00', '14:00'];
var CHECKOUTS = ['12:00', '13:00', '14:00'];
var NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8];

// массив объявлений
var ads = [];
// количество объявлений
var numAds = 8;
var minNumRooms = 1;
var maxNumRooms = 5;
var minPrice = 1000;
var maxPrice = 1000000;
var minXLocation = 300;
var maxXLocation = 900;
var minYLocation = 100;
var maxYLocation = 500;

// получение случайного индекса из массива
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// пполучение случайного значения из массива
var getRandomValueFromArray = function (array) {
  return array[getRandomInt(0, array.length - 1)];
}
// получение случайного массива из массива
var getRandomArrayFromArray = function (array, length) {
  var resultArray = [];
  for (var i = 0; i < length - 1; i++) {
    resultArray[i] = (getRandomValueFromArray(array));
  }
  return resultArray;
}

// получение списка features в заданном формате
var getFeaturesList = function (array) {
  var featuresList = '';
  for (var i = 0; i < array.length; i++) {
    featuresList += '<span class="feature__image feature__image--' + array[i] + '"></span>'
  }
  return featuresList;
}
// создание аватара
var getUniqValue = function (array) {
  var arrayCopy = array.slice();

  return function () {
    return arrayCopy.splice(getRandomInt(0, arrayCopy.length - 1), 1);
  };
};

var getRandomNumber = getUniqValue(NUMBERS);
var getRandomTitle = getUniqValue(TITLES);

// создание объявления
var createAd = function () {
  var x = getRandomInt(300, 900);
  var y = getRandomInt(100, 500);
  var newAd = {
    "author": {
      "avatar": 'img/avatars/user0' +getRandomNumber() + '.png'
    },

    "offer": {
      "title": getRandomTitle(), //строка, заголовок предложения, одно из фиксированных значений . Значения не должны повторяться.
      "address": x + ', ' + y, //строка, адрес предложения, представляет собой запись вида "{{location.x}}, {{location.y}}"
      "price": getRandomInt(1000, 1000000), //число, случайная цена от 1000 до 1 000 000
      "type": getRandomValueFromArray(LODGE_TYPES), //строка с одним из трех фиксированных значений: flat, house или bungalo
      "rooms": getRandomInt(1, 5), //число, случайное количество комнат от 1 до 5
      "guests": getRandomInt(1, 100), //число, случайное количество гостей, которое можно разместить
      "checkin": getRandomValueFromArray(CHECKINS), //строка с одним из трех фиксированных значений: ,
      "checkout": getRandomValueFromArray(CHECKOUTS), //строка с одним из трех фиксированных значений: ,
      "features": getRandomArrayFromArray(FEATURES, getRandomInt(1, FEATURES.length)), //массив строк случайной длины из ниже предложенных: ,
      "description": '', 
      "photos": [] 
    },

    "location": {
      "x": x,
      "y": y
    }
}
  return newAd;
}
// формирование объявления в верстке
var renderLodge = function (ad) {
  var lodgeElement = lodgeTemplate.cloneNode(true);

  lodgeElement.querySelector('.lodge__title').textContent = ad.offer.title;
  lodgeElement.querySelector('.lodge__address').textContent = ad.offer.address;
  lodgeElement.querySelector('.lodge__price').innerHTML = ad.offer.price + '&#x20bd;/ночь';
  lodgeElement.querySelector('.lodge__type').textContent = ad.offer.type;
  lodgeElement.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + ad.offer.guests + ' гостей в ' + ad.offer.rooms + ' комнатах';
  lodgeElement.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + ad.offer.checkin + ', выезд до ' + ad.offer.checkout;
  lodgeElement.querySelector('.lodge__features').innerHTML = getFeaturesList(ad.offer.features);

  lodgeElement.querySelector('.lodge__description').textContent = ad.offer.title;

  return lodgeElement;
}

// формирование пинов на карте
var renderPin = function (ad) {
  var pinElement = document.createElement('div');
  pinElement.className = 'pin';
  pinElement.setAttribute('style', 'left: ' + ad.location.x +'px; top: ' + ad.location.y +'px');
  pinElement.innerHTML = '<img src="' + ad.author.avatar +'" class="rounded" width="40" height="40">'; 
return pinElement;
}
// создаем объявления
for (var i = 0; i < numAds; i++) {
    ads[i] = createAd(ads, i);
}

var fragment = document.createDocumentFragment();
// формируем пины
for (i = 0; i < ads.length; i++) {
  fragment.appendChild(renderPin(ads[i]));
}

pinMap.appendChild(fragment);
корректируем положение пинов, чтобы стрелочка показывала место
for (i = 1; i < pinMap.children.length; i++) {
  pinMap.children[i].style.left = parseInt(pinMap.children[i].style.left) - pinMap.children[i].offsetWidth / 2 + 'px'
  pinMap.children[i].style.top = parseInt(pinMap.children[i].style.top) - pinMap.children[i].offsetHeight + 'px'
}
fragment.innerHTML = '';
fragment.appendChild(renderLodge(ads[0]));
dialogPanel.innerHTML = '';
dialogTitleImg.setAttribute('src', ads[0].author.avatar);
dialogPanel.appendChild(fragment);
