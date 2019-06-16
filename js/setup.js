'use strict';

var firstNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var secondNames = [
  'Да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var ESC_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;

var setupBlock = document.querySelector('.setup'); // Окно настроек персонажа

var openSetupBlock = document.querySelector('.setup-open'); // Кнопка для открытия настроек персонажа

var closeSetupBlock = setupBlock.querySelector('.setup-close'); // Кнопка закрытия окна настроек персонажа

var userNameForm = setupBlock.querySelector('.setup-user-name'); // Поле ввода имени персонажа

var wizardImage = setupBlock.querySelector('.setup-wizard');
var wizardCoatColor = wizardImage.querySelector('.wizard-coat');
var wizardEyesColor = wizardImage.querySelector('.wizard-eyes');

var wizardFireballColor = document.querySelector('.setup-fireball-wrap');

var setupSimilar = document.querySelector('.setup-similar'); // Окно похожих персонажей
setupSimilar.classList.remove('hidden');

var similarList = document.querySelector('.setup-similar-list'); // Список похожих персонажей

var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Шаблон персонажа

wizardCoatColor.addEventListener('click', function () {
  wizardCoatColor.style.fill = getRandomValue(coatColors);
});

wizardEyesColor.addEventListener('click', function () {
  wizardEyesColor.style.fill = getRandomValue(eyesColors);
});

wizardFireballColor.addEventListener('click', function () {
  wizardFireballColor.style.background = getRandomValue(fireballColors);
});

openSetupBlock.addEventListener('click', function () {
  openSetupWindow();
});

openSetupBlock.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    openSetupWindow();
  }
});

closeSetupBlock.addEventListener('click', function () {
  closeSetupWindow();
});

closeSetupBlock.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    closeSetupWindow();
  }
});

userNameForm.addEventListener('focus', function () {
  document.removeEventListener('keydown', onEscCloseWindow);
});

userNameForm.addEventListener('blur', function () {
  document.addEventListener('keydown', onEscCloseWindow);
});

var openSetupWindow = function () {
  setupBlock.classList.remove('hidden');

  document.addEventListener('keydown', onEscCloseWindow);
};

var closeSetupWindow = function () {
  setupBlock.classList.add('hidden');

  document.removeEventListener('keydown', onEscCloseWindow);
};

var onEscCloseWindow = function (evt) {                                 // Функция закрытия окна через ESC
  if (evt.keyCode === ESC_KEY_CODE) {
    setupBlock.classList.add('hidden');
  }
};

var getRandomValue = function (arr) {
  var i = Math.round(Math.random() * arr.length - 1);
  return arr[i];
};

var getWizards = function (firstName, secondName, coatColor, eyesColor) { // Создание массива объектов с характеристиками персонажей
  var NUMBER_OF_WIZARDS = 4;
  var wizards = [];

  for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
    var wizard = {};

    wizard.name = getRandomValue(firstName) + ' ' + getRandomValue(secondName);
    wizard.coatColor = getRandomValue(coatColor);
    wizard.eyesColor = getRandomValue(eyesColor);
    wizards.push(wizard);
  }

  return wizards;
};

var createNewWizard = function (wizards) { // Содание отдельного персонажа
  var newWizardElement = wizardTemplate.cloneNode(true);
  newWizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  newWizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  newWizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;

  return newWizardElement;
};

var setAllWizards = function (wizards) { // Добавление созданных персонажей в список похожих персонажей
  var allWizards = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    var newWizard = createNewWizard(wizards[i]);
    allWizards.appendChild(newWizard);
  }

  similarList.appendChild(allWizards);
};

setAllWizards(getWizards(firstNames, secondNames, coatColors, eyesColors));


