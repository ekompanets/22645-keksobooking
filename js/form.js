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

  // соответствие времени
  var CHECK_MAP = [
    {'in': 'in_12','out': 'out_12'},
    {'in': 'in_13','out': 'out_13'},
    {'in': 'in_14','out': 'out_14'}
  ];
  
  // установка выезда при изменении заезда
  checkIn.addEventListener('change', function (evt) {
    checkOut.value = window.utils.getDependentValue(CHECK_MAP, 'in', checkIn.value, 'out');
  });
  // установка заезда при изменении выезда 
  checkOut.addEventListener('change', function (evt) {
    checkIn.value = window.utils.getDependentValue(CHECK_MAP, 'out', checkOut.value, 'in');
  });

  // соответствие стоимости
  var TYPES_MAP = [
    {'type':'flat', 'price': 5000},
    {'type':'shack', 'price': 1000},
    {'type':'palace', 'price': 10000}
  ];

  // установка цены при изменении типа жилья
  accommodationType.addEventListener('change', function (evt) {
    price.value = window.utils.getDependentValue(TYPES_MAP, 'type', accommodationType.value, 'price');
  });
  // установка типа жилья при изменении цены
  price.addEventListener('change', function (evt) {
    var max = Number.MAX_VALUE;
    var dif = 0;
    for (var i = 0; i < TYPES_MAP.length; i++) {
      dif = price.value - TYPES_MAP[i]['price'];
      if (dif >= 0) {
        if (dif <= max) {
          max = dif;
          accommodationType.value = TYPES_MAP[i]['type'];
        }
      }
    }
  });

  // соответствие количества комнат и гостей
  var GUEST_MAP = [
    {'num':'num_1', 'guest': 'guest_0'},
    {'num':'num_2', 'guest': 'guest_3'},
    {'num':'num_100', 'guest': 'guest_3'}
  ];

  // установка количества гостей при изменении кол-ва комнат
  roomNumber.addEventListener('change', function (evt) {
    capacity.value = window.utils.getDependentValue(GUEST_MAP, 'num', roomNumber.value, 'guest');
  });
  // установка кол-ва комнат при изменении количества гостей 
  capacity.addEventListener('change', function (evt) {
    roomNumber.value = window.utils.getDependentValue(GUEST_MAP, 'guest', capacity.value, 'num');
  });
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
