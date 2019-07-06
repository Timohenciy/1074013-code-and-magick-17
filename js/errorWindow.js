'use strict';

(function () {
  window.showErrorWindow = function (errorMessage) {
    var overlay = document.querySelector('.overlay');

    var errorWindow = document.createElement('div');
    var errorWindowHead = document.createElement('div');
    var errorWindowBody = document.createElement('div');
    var closeButton = document.createElement('span');

    var onClickCloseWindow = function () {
      errorWindow.classList.add('hidden');

      closeButton.removeEventListener('click', onClickCloseWindow);
    };

    closeButton.setAttribute('tabindex', '0');

    errorWindow.classList.add('error-window');
    errorWindowHead.classList.add('error-window-header');
    errorWindowBody.classList.add('error-window-body');
    closeButton.classList.add('error-window-close-button');

    errorWindowHead.textContent = 'Ошибка соединения';
    closeButton.textContent = 'x';
    errorWindowBody.textContent = 'Статус ответа: ' + errorMessage;

    overlay.appendChild(errorWindow);
    errorWindow.appendChild(errorWindowHead);
    errorWindowHead.appendChild(closeButton);
    errorWindow.appendChild(errorWindowBody);

    closeButton.addEventListener('click', onClickCloseWindow);
  };
})();
