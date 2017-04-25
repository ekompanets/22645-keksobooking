// modal.js
'use strict';

window.showPopup = (function () {
  return function (msg) {
    var delay = 5000;
    var popupElement = document.querySelector('.popup');
    var text = popupElement.querySelector('.popup__text');

    text.textContent = msg;

    window.utils.toggleClass(popupElement, 'hidden', false);

    setTimeout(function () {
      window.utils.toggleClass(popupElement, 'hidden', true);
    }, delay);
  };
})();
