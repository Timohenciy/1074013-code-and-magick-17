'use strict';
(function () {
  var ESC_KEY_CODE = 27;
  var ENTER_KEY_CODE = 13;

  var setupBlock = document.querySelector('.setup'); // Окно настроек персонажа

  var openSetupButton = document.querySelector('.setup-open'); // Кнопка для открытия настроек персонажа

  var closeSetupButton = setupBlock.querySelector('.setup-close'); // Кнопка закрытия окна настроек персонажа

  var resetWindowPosition = function () {
    setupBlock.style.left = null;
    setupBlock.style.top = null;
  };

  var openSetupAction = function () {
    setupBlock.classList.remove('hidden');

    closeSetupButton.addEventListener('keydown', onEnterDoAction);
    closeSetupButton.addEventListener('click', window.closeSetupAction);

    document.addEventListener('keydown', onEscCloseWindow);
  };

  window.closeSetupAction = function () {
    setupBlock.classList.add('hidden');

    resetWindowPosition();

    closeSetupButton.removeEventListener('keydown', onEnterDoAction);
    closeSetupButton.removeEventListener('click', window.closeSetupAction);

    document.removeEventListener('keydown', onEscCloseWindow);
  };

  var onEscCloseWindow = function (evt) {
    if (evt.keyCode === ESC_KEY_CODE && evt.target.tagName !== 'INPUT') {
      setupBlock.classList.add('hidden');
    }
  };

  var onEnterDoAction = function (evt) {
    if (evt.target.className === 'setup-open-icon' && evt.keyCode === ENTER_KEY_CODE) {
      openSetupAction();
    } else if (evt.target.className === 'setup-close' && evt.keyCode === ENTER_KEY_CODE) {
      window.closeSetupAction();
    }
  };

  openSetupButton.addEventListener('keydown', onEnterDoAction);
  openSetupButton.addEventListener('click', openSetupAction);
})();
