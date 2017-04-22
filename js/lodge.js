// advert.js
'use strict';

window.lodge = (function () {

  var getRandomNumber = window.utils.getUniqValue(window.adData.NUMBERS);
  var getRandomTitle = window.utils.getUniqValue(window.adData.TITLES);

  // создание объявления
  var createAd = function () {
    var x = window.utils.getRandomInt(window.adData.MIN_X_LOCATION, window.adData.MAX_X_LOCATION);
    var y = window.utils.getRandomInt(window.adData.MIN_Y_LOCATION, window.adData.MAX_Y_LOCATION);
    var newAd = {
      'author': {
        'avatar': 'img/avatars/user0' + getRandomNumber() + '.png'
      },

      'offer': {
        'title': getRandomTitle(),
        'address': x + ', ' + y,
        'price': window.utils.getRandomInt(window.adData.MIN_PRICE, window.adData.MAX_PRICE),
        'type': window.utils.getRandomValueFromArray(window.adData.LODGE_TYPES),
        'rooms': window.utils.getRandomInt(window.adData.MIN_NUM_ROOMS, window.adData.MAX_NUM_ROOMS),
        'guests': window.utils.getRandomInt(window.adData.MIN_NUM_GUESTS, window.adData.MAX_NUM_GUESTS),
        'checkin': window.utils.getRandomValueFromArray(window.adData.CHECKINS),
        'checkout': window.utils.getRandomValueFromArray(window.adData.CHECKOUTS),
        'features': window.utils.getRandomArrayFromArray(window.adData.FEATURES, window.utils.getRandomInt(1, window.adData.FEATURES.length)),
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

  var createAds = function () {
    // массив объявлений
    var ads = [];

    // создаем объявления
    for (var i = 0; i < window.adData.NUM_ADS; i++) {
      ads.push(createAd());
    }
    return ads;
  };

  return {
    createAd: createAd,
    createAds: createAds
  };
})();
