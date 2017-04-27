// card.js
'use strict';

window.card = (function () {


  var dialog = document.querySelector('.dialog');
  var dialogTitleImg = document.querySelector('.dialog__title img');

  var lodgeTemplate = document.querySelector('#lodge-template').content;
  var callback = null;
  // получение списка features в заданном формате
  var getFeature = function (item) {
    var feature = document.createElement('span');
    feature.className = 'feature__image feature__image--' + item;
    return feature;
  };

  // формирование объявления в верстке
  var renderCard = function (ad) {
    var lodgeElement = lodgeTemplate.cloneNode(true);

    lodgeElement.querySelector('.lodge__title').textContent = ad.offer.title;
    lodgeElement.querySelector('.lodge__address').textContent = ad.offer.address;
    lodgeElement.querySelector('.lodge__price').innerHTML = ad.offer.price + '&#x20bd;/ночь';
    lodgeElement.querySelector('.lodge__type').textContent = window.adData.TYPES_TRANSLATE[ad.offer.type];
    lodgeElement.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + ad.offer.guests + ' гостей в ' + ad.offer.rooms + ' комнатах';
    lodgeElement.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + ad.offer.checkin + ', выезд до ' + ad.offer.checkout;
    for (var i = 0; i < ad.offer.features.length; i++) {
      lodgeElement.querySelector('.lodge__features').appendChild(getFeature(ad.offer.features[i]));
    }
    lodgeElement.querySelector('.lodge__description').textContent = ad.offer.description;

    return lodgeElement;
  };

  // отображение объявления
  var showCard = function (ad, cb) {
    dialog.replaceChild(renderCard(ad), dialog.querySelector('.dialog__panel'));
    dialogTitleImg.src = ad.author.avatar;
    callback = cb;
  };

  // закрыть объявление
  var closeCard = function () {
    window.utils.toggleClass(dialog, 'hidden', true);

    if (typeof callback === 'function') {
      callback();
    }

    document.removeEventListener('keydown', function (evt) {
      if (window.utils.isEscKeyCode(evt)) {
        closeCard();
      }
    });

  };
  // открыть объявление
  var openCard = function () {
    window.utils.toggleClass(dialog, 'hidden', false);

    document.addEventListener('keydown', function (evt) {
      if (window.utils.isEscKeyCode(evt)) {
        closeCard();
      }
    });
  };

  var dialogClose = document.querySelector('.dialog__close');
  // закрыть объявление по клику
  dialogClose.addEventListener('click', function (evt) {
    closeCard();
  });
  // закрыть объявление по Enter
  dialogClose.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterKeyCode(evt)) {
      closeCard();
    }
  });

  return {
    renderCard: renderCard,
    showCard: showCard,
    closeCard: closeCard,
    openCard: openCard
  };
})();
