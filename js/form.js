// form.js
'use strict';

(function () {
  var form = document.querySelector('.notice__form');
  var price = form.querySelector('#price');
  var accommodationType = form.querySelector('#type');
  var roomNumber = form.querySelector('#room_number');
  var capacity = form.querySelector('#capacity');
  var checkIn = form.querySelector('#time');
  var checkOut = form.querySelector('#timeout');

  var setSyncValue = function (input, value) {
    input.value = value;
  }

  var setSyncMinValue = function (input, value) {
    input.min = value;
    input.value = value;
  }

  // соответствие времени
  var CHECK_INS = ['in_12', 'in_13', 'in_14'];
  var CHECK_OUTS = ['out_12', 'out_13', 'out_14'];

  // установка выезда при изменении заезда
  window.synchronizeFields(checkIn, checkOut, CHECK_INS, CHECK_OUTS, setSyncValue);

  // // установка заезда при изменении выезда
  window.synchronizeFields(checkOut, checkIn, CHECK_OUTS, CHECK_INS, setSyncValue);

  // соответствие стоимости
  var FLAT_TYPES = ['flat', 'shack', 'palace'];
  var FLAT_PRICES = [1000, 0, 10000];

  // установка цены при изменении типа жилья
  window.synchronizeFields(accommodationType, price, FLAT_TYPES, FLAT_PRICES, setSyncMinValue);

  // установка типа жилья при изменении цены
  price.addEventListener('change', function (evt) {
    var max = Number.MAX_VALUE;
    var dif = 0;
    for (var i = 0; i < FLAT_TYPES.length; i++) {
      dif = price.value - FLAT_PRICES[i];
      if (dif >= 0) {
        if (dif <= max) {
          max = dif;
          accommodationType.value = FLAT_TYPES[i];
        }
      }
    }
  });

  // соответствие количества комнат и гостей
  var NUM_ROOM = ['num_1', 'num_2', 'num_100'];
  var NUM_GUEST = ['guest_0', 'guest_3', 'guest_3'];

  // установка количества гостей при изменении кол-ва комнат
  window.synchronizeFields(roomNumber, capacity, NUM_ROOM, NUM_GUEST, setSyncValue);

  // установка кол-ва комнат при изменении количества гостей
  window.synchronizeFields(capacity, roomNumber, NUM_GUEST, NUM_ROOM, setSyncValue);

  // валидация формы при отправке
  form.addEventListener('invalid', function (evt) {
    evt.target.classList.add('error');

    // снятие класса error при успешной валидации
    evt.target.addEventListener('blur', function (evnt) {
      if (evnt.target.classList.contains('error')) {
        if (evnt.target.validity.valid) {
          evnt.target.classList.remove('error');
        }
      }
    });
  }, true);

})();
