// utils.js
'use strict';

window.utils = (function () {
	// проверка на нажатие ENTER
	var ENTER_KEY_CODE = 13;
	var ESC_KEY_CODE = 27;

	var isEnterKeyCode = function (evt) {
	  return evt.keyCode === ENTER_KEY_CODE;
	};

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

	var getUniqValue = function (array) {
	  var arrayCopy = array.slice();

	  return function () {
	    return arrayCopy.splice(utils.getRandomInt(0, arrayCopy.length - 1), 1);
	  };
	};


	return {
		isEnterKeyCode: isEnterKeyCode,
		isEscKeyCode: isEscKeyCode,
		toggleClass: toggleClass,
		getRandomInt: getRandomInt,
		getRandomValueFromArray: getRandomValueFromArray,
		getRandomArrayFromArray: getRandomArrayFromArray,
		getUniqValue: getUniqValue
	}
})();