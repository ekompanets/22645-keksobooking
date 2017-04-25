// synchronize-fields.js
'use strict';

window.synchronizeFields = (function () {
  return function (fieldIn, fieldOut, arrayIn, arrayOut, callback) {
    fieldIn.addEventListener('change', function (evt) {
      var index = arrayIn.indexOf(fieldIn.value);
      callback(fieldOut, arrayOut[index]);
    });
  };
})();
