'use strict';

(function () {
  window.showErrorWindow = function (errorMessage) {
    var overlay = document.querySelector('.overlay');

    var onClickCloseWindow = function () {
      errorWindow.classList.add('hidden');

      closeButton.removeEventListener('click', onClickCloseWindow);
    };

    var createElement = function (tagName, className, innerText, setAttribute, attributeName, attrValue) {
      var newElement = document.createElement(tagName);
      newElement.classList.add(className);
      newElement.textContent = innerText;
      if (setAttribute) {
        newElement.setAttribute(attributeName, attrValue);
      }

      return newElement;
    };

    var renderNewElements = function () {
      var newDocumentFragment = document.createDocumentFragment();

      errorWindow.appendChild(errorWindowHead);
      errorWindow.appendChild(closeButton);
      errorWindow.appendChild(errorWindowBody);
      newDocumentFragment.appendChild(errorWindow);

      overlay.appendChild(errorWindow);
    };

    var errorWindow = createElement('div', 'error-window', '', false);
    var errorWindowHead = createElement('div', 'error-window-header', 'Ошибка соединения', false);
    var errorWindowBody = createElement('div', 'error-window-body', 'Статус ответа: ' + errorMessage, false);
    var closeButton = createElement('span', 'error-window-close-button', 'x', true, 'tabindex', '0');

    renderNewElements();
    closeButton.addEventListener('click', onClickCloseWindow);
  };
})();
