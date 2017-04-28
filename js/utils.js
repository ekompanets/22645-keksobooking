// utils.js
'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESC_KEY_CODE = 27;
  // проверка на нажатие ENTER
  var isEnterKeyCode = function (evt) {
    return evt.keyCode === ENTER_KEY_CODE;
  };

  // проверка на нажатие ESC
  var isEscKeyCode = function (evt) {
    return evt.keyCode === ESC_KEY_CODE;
  };

  // переключатель класса у элемента
  var toggleClass = function (element, className, state) {
    if (state) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  };

  // получение случайного индекса из массива
  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  };
  return {
    isEnterKeyCode: isEnterKeyCode,
    isEscKeyCode: isEscKeyCode,
    toggleClass: toggleClass,
    getRandomInt: getRandomInt
  };
})();
