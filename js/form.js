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
  var CHECK_MAP = {
    'in_12': 'out_12',
    'in_13': 'out_13',
    'in_14': 'out_14'
  };
  // установка выезда при изменении заезда
  checkIn.addEventListener('change', function (evt) {
    checkOut.value = CHECK_MAP[checkIn.value];
  });

  // соответствие стоимости
  var TYPES_MAP = {
    'flat': 1000,
    'shack': 0,
    'palace': 10000
  };

  // установка цены при изменении типа жилья
  accommodationType.addEventListener('change', function (evt) {
    price.value = TYPES_MAP[accommodationType.value];
  });

  // соответствие количества комнат и гостей
  var GUEST_MAP = {
    'num_1': 'guest_0',
    'num_2': 'guest_3',
    'num_100': 'guest_3'
  };

  // установка rjkbxtcndf ujcntq при изменении кол-ва комнат
  roomNumber.addEventListener('change', function (evt) {
    capacity.value = GUEST_MAP[roomNumber.value];
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
