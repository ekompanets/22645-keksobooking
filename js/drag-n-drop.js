// drag-n-drop.js
'use strict';

window.dragNDrop = (function () {
  // сделать элемент перетаскиваемым
  var setDragable = function (element, handler, callback) {
    // устанавливаем начальные координаты в строку адреса
    callback(element.offsetLeft, element.offsetTop);
    handler.addEventListener('mousedown', function (evt) {
      evt.preventDefault();

      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        // сдвиг
        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };
        // переопределение старта
        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };
        // находим координаты, на которые указывает пин
        var dif = {
          dX: element.offsetLeft - shift.x,
          dY: element.offsetTop - shift.y
        };
        // проверяем координаты пина на вхождение в допустимый диапазон
        // если допустимо, сдвигаем пин
        if (callback(dif.dX, dif.dY)) {
          element.style.top = dif.dY + 'px';
          element.style.left = dif.dX + 'px';
        } else {
          // иначе генерируем событие mouseup и останавливаем пин
          var event = new Event('mouseup');
          document.dispatchEvent(event);
        }
      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  };
  return {
    setDragable: setDragable
  };
})();
