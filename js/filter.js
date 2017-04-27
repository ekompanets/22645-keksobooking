// filter.js
'use strict';

window.filter = (function () {

  var filters = document.querySelector('.tokyo__filters');
  var roomType = filters.querySelector('#housing_type');
  var price = filters.querySelector('#housing_price');
  var numRooms = filters.querySelector('#housing_room-number');
  var numGuests = filters.querySelector('#housing_guests-number');
  var features = filters.querySelectorAll('.feature input');

  var filterType = function (advert) {
    return roomType.value === 'any' ? true : roomType.value === advert.offer.type;
  };

  var filterPrice = function (advert) {
    switch (price.value) {
      case 'middle':
        return advert.offer.price <= 50000 && advert.offer.price >= 10000;
      case 'low':
        return advert.offer.price < 10000;
      case 'high':
        return advert.offer.price > 50000;
      default:
        return true;
    }
  };

  var filterValue = function (selectField) {
    var func = null;
    if (selectField.value === 'any') {
      func = function(advert) {
        return true;
      };
    } else {
      switch (String(selectField.id)) {
        case 'housing_room-number': 
          func = function(advert) {
            return parseInt(numRooms.value, 10) === parseInt(advert.offer.rooms, 10);
          };
          break;
        case 'housing_guests-number': 
          func = function(advert) {
            return parseInt(numGuests.value, 10) === parseInt(advert.offer.guests, 10);
          };
          break;
        default:
          func = function(advert) {
            return null;
          };
      }
    }
    return func;
  }

  var filterFeatures = function (advert) {
    var checkedItems = [].filter.call(features, function (it) {
      return it.checked;
    });
    for (var i = 0; i < checkedItems.length; i++) {
      if (advert.offer.features.indexOf(checkedItems[i].value) === -1) {
        return false;
      }
    }
    return true;
  };

  return function (adverts) {
    return adverts.filter(filterType).filter(filterPrice).filter(filterValue(numRooms)).filter(filterValue(numGuests)).filter(filterFeatures);
  };
})();
