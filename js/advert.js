// advert.js
'use strict';

window.advert = (function () {

  

  var getRandomNumber = window.utils.getUniqValue(adData.NUMBERS);
  var getRandomTitle = window.utils.getUniqValue(adData.TITLES);

  // создание объявления
  var createAd = function () {
    var x = window.utils.getRandomInt(adData.MIN_X_LOCATION, adData.MAX_X_LOCATION);
    var y = window.utils.getRandomInt(adData.MIN_Y_LOCATION, adData.MAX_Y_LOCATION);
    var newAd = {
      'author': {
        'avatar': 'img/avatars/user0' + getRandomNumber() + '.png'
      },

      'offer': {
        'title': getRandomTitle(),
        'address': x + ', ' + y,
        'price': window.utils.getRandomInt(adData.MIN_PRICE, adData.MAX_PRICE),
        'type': window.utils.getRandomValueFromArray(adData.LODGE_TYPES),
        'rooms': window.utils.getRandomInt(adData.MIN_NUM_ROOMS, adData.MAX_NUM_ROOMS),
        'guests': window.utils.getRandomInt(adData.MIN_NUM_GUESTS, adData.MAX_NUM_GUESTS),
        'checkin': window.utils.getRandomValueFromArray(adData.CHECKINS),
        'checkout': window.utils.getRandomValueFromArray(adData.CHECKOUTS),
        'features': window.utils.getRandomArrayFromArray(adData.FEATURES, window.utils.getRandomInt(1, adData.FEATURES.length)),
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
    for (var i = 0; i < adData.NUM_ADS; i++) {
      ads[i] = createAd();
    }
    return ads
  }

  return {
    createAd: createAd,
    createAds: createAds
  }
})();