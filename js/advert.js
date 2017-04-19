// advert.js
'use strict';

window.advert = (function () {

  

  var getRandomNumber = utils.getUniqValue(adData.NUMBERS);
  var getRandomTitle = utils.getUniqValue(adData.TITLES);

  // создание объявления
  var createAd = function () {
    var x = utils.getRandomInt(adData.minXLocation, adData.maxXLocation);
    var y = utils.getRandomInt(adData.minYLocation, adData.maxYLocation);
    var newAd = {
      'author': {
        'avatar': 'img/avatars/user0' + getRandomNumber() + '.png'
      },

      'offer': {
        'title': getRandomTitle(),
        'address': x + ', ' + y,
        'price': utils.getRandomInt(adData.minPrice, adData.maxPrice),
        'type': utils.getRandomValueFromArray(adData.LODGE_TYPES),
        'rooms': utils.getRandomInt(adData.minNumRooms, adData.maxNumRooms),
        'guests': utils.getRandomInt(adData.minNumGuests, adData.maxNumGuests),
        'checkin': utils.getRandomValueFromArray(adData.CHECKINS),
        'checkout': utils.getRandomValueFromArray(adData.CHECKOUTS),
        'features': utils.getRandomArrayFromArray(adData.FEATURES, utils.getRandomInt(1, adData.FEATURES.length)),
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
    for (var i = 0; i < adData.numAds; i++) {
      ads[i] = advert.createAd(ads, i);
    }
    return ads
  }

  return {
    createAd: createAd,
    createAds: createAds
  }
})();