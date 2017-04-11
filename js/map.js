// map.js
'use strict';

var dialogPanel = document.querySelector('.dialog__panel');
var dialogTitleImg = document.querySelector('.dialog__title img');
var pinMap = document.querySelector('.tokyo__pin-map');

var lodgeTemplate = document.querySelector('#lodge-template').content;
// статические массивы данных
var TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var LODGE_TYPES = ['flat', 'house', 'bungalo'];
var CHECKINS = ['12:00', '13:00', '14:00'];
var CHECKOUTS = ['12:00', '13:00', '14:00'];
var NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8];
var TYPES_TRANSLATE = {
  'flat': 'Квартира',
  'bungalo': 'Бунгало',
  'house': 'Дом'
};
// массив объявлений
var ads = [];
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
// константы для формирования пинов
var PIN_CLASS = 'pin';
var IMG_CLASS = 'rounded';
var IMG_WIDTH = 40;
var IMG_HEIGHT = 40;
var PIN_WIDTH = 56;
var PIN_HEIGHT = 75;

// получение случайного индекса из массива
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};
// пполучение случайного значения из массива
var getRandomValueFromArray = function (array) {
  return array[getRandomInt(0, array.length - 1)];
};
// получение случайного массива из массива
var getRandomArrayFromArray = function (array, length) {
  var resultArray = [];
  for (var i = 0; i < length - 1; i++) {
    resultArray[i] = (getRandomValueFromArray(array));
  }
  return resultArray;
};

// получение списка features в заданном формате
var getFeature = function (item) {
  var feature = document.createElement('span');
  feature.class = 'feature__image feature__image--' + item;
  return feature;
};
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
  var x = getRandomInt(minXLocation, maxXLocation);
  var y = getRandomInt(minYLocation, maxYLocation);
  var newAd = {
    'author': {
      'avatar': 'img/avatars/user0' + getRandomNumber() + '.png'
    },

    'offer': {
      'title': getRandomTitle(),
      'address': x + ', ' + y,
      'price': getRandomInt(minPrice, maxPrice),
      'type': getRandomValueFromArray(LODGE_TYPES),
      'rooms': getRandomInt(minNumRooms, maxNumRooms),
      'guests': getRandomInt(minNumGuests, maxNumGuests),
      'checkin': getRandomValueFromArray(CHECKINS),
      'checkout': getRandomValueFromArray(CHECKOUTS),
      'features': getRandomArrayFromArray(FEATURES, getRandomInt(1, FEATURES.length)),
      'description': '',
      'photos': []
    },

    'location': {
      'x': x,
      'y': y
    }
  };
  return newAd;
};
// формирование объявления в верстке
var renderLodge = function (ad) {
  var lodgeElement = lodgeTemplate.cloneNode(true);

  lodgeElement.querySelector('.lodge__title').textContent = ad.offer.title;
  lodgeElement.querySelector('.lodge__address').textContent = ad.offer.address;
  lodgeElement.querySelector('.lodge__price').innerHTML = ad.offer.price + '&#x20bd;/ночь';
  lodgeElement.querySelector('.lodge__type').textContent = TYPES_TRANSLATE[ad.offer.type];
  lodgeElement.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + ad.offer.guests + ' гостей в ' + ad.offer.rooms + ' комнатах';
  lodgeElement.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + ad.offer.checkin + ', выезд до ' + ad.offer.checkout;
  for (i = 0; i < ad.offer.features.length; i++) {
    lodgeElement.querySelector('.lodge__features').appendChild(getFeature(ad.offer.features[i]));
  }
  lodgeElement.querySelector('.lodge__description').textContent = ad.offer.description;

  return lodgeElement;
};
// формирование пинов на карте
var renderPin = function (ad) {
  var pinElement = document.createElement('div');
  var imgElement = document.createElement('img');
  pinElement.className = PIN_CLASS;
  pinElement.style.left = (ad.location.x - PIN_WIDTH / 2) + 'px';
  pinElement.style.top = (ad.location.y - PIN_HEIGHT) + 'px';
  imgElement.className = IMG_CLASS;
  imgElement.width = IMG_WIDTH;
  imgElement.height = IMG_HEIGHT;
  imgElement.src = ad.author.avatar;
  pinElement.appendChild(imgElement);
  console.log(ad.location.x+' ,'+ad.location.y)
  console.log(pinElement.style.left+' ,'+pinElement.style.top)
  return pinElement;
};
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
fragment.innerHTML = '';
fragment.appendChild(renderLodge(ads[0]));
dialogPanel.innerHTML = '';
dialogTitleImg.setAttribute('src', ads[0].author.avatar);
dialogPanel.appendChild(fragment);
