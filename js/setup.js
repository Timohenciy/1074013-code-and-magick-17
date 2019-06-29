'use strict';

var ESC_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;

var setupBlock = document.querySelector('.setup'); // Окно настроек персонажа

var openSetupButton = document.querySelector('.setup-open'); // Кнопка для открытия настроек персонажа

var closeSetupButton = setupBlock.querySelector('.setup-close'); // Кнопка закрытия окна настроек персонажа

var resetWindowPosition = function () {
  setupBlock.style.left = null;
  setupBlock.style.top = null;
};

var onActionOpenSetup = function () {
  setupBlock.classList.remove('hidden');

  document.addEventListener('keydown', onEscCloseWindow);
};

var onActionCloseSetup = function () {
  setupBlock.classList.add('hidden');

  resetWindowPosition();

  document.removeEventListener('keydown', onEscCloseWindow);
};

var onEscCloseWindow = function (evt) {
  if (evt.keyCode === ESC_KEY_CODE && evt.target.tagName !== 'INPUT') {
    setupBlock.classList.add('hidden');
  }
};

openSetupButton.addEventListener('click', onActionOpenSetup);

openSetupButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    onActionOpenSetup();
  }
});

closeSetupButton.addEventListener('click', onActionCloseSetup);

closeSetupButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    onActionCloseSetup();
  }
});
