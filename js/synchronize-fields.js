// synchronize-fields.js
'use strict';

var synchronizeFields = (function () {
  return function (fieldIn, fieldOut, arrayIn, arrayOut, callback) {
    fieldIn.addEventListener('change', function (evt) {
      var result = null;
      for (var i = 0; i < arrayIn.length; i++) {

        if (arrayIn[i] === fieldIn.value) {
          result = arrayOut[i];
        }
      }
      callback(fieldOut, result);
    });
  };
})();
