// drag-n-drop.js
'use strict';

window.dragNDrop =(function () {
  var setDragable = function (element, handler, callback) {
    handler.addEventListener('mousedown', function (evt) {
      evt.preventDefault();

      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };
        console.log(startCoords.y + ' - ' + startCoords.x)

      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();

        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };        
        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };
        var dif = {
          dX: element.offsetLeft - shift.x,
          dY: element.offsetTop - shift.y
        };
        if (callback(dif.dX, dif.dY)) {
          element.style.top = dif.dY + 'px';
          element.style.left = dif.dX + 'px';
        } else {
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