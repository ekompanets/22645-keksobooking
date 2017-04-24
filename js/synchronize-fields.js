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
    })
  }
})();

// var getDependentValue = function (array, key1, value, key2) {
//     var result = null;
//     for (var i = 0; i < array.length; i++) {
//       if (array[i][key1] === value) {
//         result = array[i][key2];
//       }
//     }
//     return result;
//   };