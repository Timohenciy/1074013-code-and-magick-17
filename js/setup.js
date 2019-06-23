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

var openSetupButton = document.querySelector('.setup-open'); // Кнопка для открытия настроек персонажа

var closeSetupButton = setupBlock.querySelector('.setup-close'); // Кнопка закрытия окна настроек персонажа

var wizardImage = setupBlock.querySelector('.setup-wizard');

var wizardCoatColor = wizardImage.querySelector('.wizard-coat');
var wizardCoatColorInput = setupBlock.querySelector('[name = "coat-color"]');

var wizardEyesColor = wizardImage.querySelector('.wizard-eyes');
var wizardEyesColorInput = setupBlock.querySelector('[name = "eyes-color"]');

var wizardFireballColor = document.querySelector('.setup-fireball-wrap');
var wizardFireballColorInput = wizardFireballColor.querySelector('[name = "fireball-color"]');

var setupSimilar = document.querySelector('.setup-similar'); // Окно похожих персонажей
setupSimilar.classList.remove('hidden');

var similarList = document.querySelector('.setup-similar-list'); // Список похожих персонажей

var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Шаблон персонажа

var openSetupWindow = function () {
  setupBlock.classList.remove('hidden');

  document.addEventListener('keydown', onEscCloseWindow);
};

var closeSetupWindow = function () {
  setupBlock.classList.add('hidden');

  resetWindowPosition();

  document.removeEventListener('keydown', onEscCloseWindow);
};

var onEscCloseWindow = function (evt) { // Функция закрытия окна через ESC
  if (evt.keyCode === ESC_KEY_CODE && evt.target.tagName !== 'INPUT') {
    setupBlock.classList.add('hidden');
  }
};

var resetWindowPosition = function () {
  setupBlock.style.left = null;
  setupBlock.style.top = null;
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

openSetupButton.addEventListener('click', function () {
  openSetupWindow();
});

openSetupButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    openSetupWindow();
  }
});

closeSetupButton.addEventListener('click', function () {
  closeSetupWindow();
});

closeSetupButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    closeSetupWindow();
  }
});

wizardCoatColor.addEventListener('click', function () {
  wizardCoatColor.style.fill = getRandomValue(coatColors);
  wizardCoatColorInput.value = wizardCoatColor.style.fill;
});

wizardEyesColor.addEventListener('click', function () {
  wizardEyesColor.style.fill = getRandomValue(eyesColors);
  wizardEyesColorInput.value = wizardEyesColor.style.fill;
});

wizardFireballColor.addEventListener('click', function () {
  wizardFireballColor.style.background = getRandomValue(fireballColors);
  wizardFireballColorInput.value = wizardFireballColor.style.background;
});

setAllWizards(getWizards(firstNames, secondNames, coatColors, eyesColors));

// начало
var dragButton = setupBlock.querySelector('.upload');

var getStartPosition = function (evtDown) {
  evtDown.preventDefault();
  // получаю x и y после события mousedown
  var startCoordinates = {
    x: evtDown.clientX,
    y: evtDown.clientY
  };
  return startCoordinates;
};

// передаю в функцию объект с первоначальными координатами и координаты x, y посе перемещения курсора
var onMouseMove = function (object, evtMoveX, evtMoveY) {
  // как я понимаю это должна быть разница между начальной позицией курсора и позицией после перемещения
  var shift = {
    x: object.x - evtMoveX,
    y: object.y - evtMoveY
  };
  // а здесь я хочу к первоначальной позиции прибавить разницу
  var newCoords = {
    x: object.x - shift.x,
    y: object.y - shift.y
  };
  return newCoords;
};
// передаю в функцию объект с новыми координатами x и y
var newSetupPosition = function (object) {
  setupBlock.style.left = object.x + 'px';
  setupBlock.style.top = object.y + 'px';
};

var onMouseUp = function (evtUp) {
  evtUp.preventDefault();

  document.removeEventListener('mousemove', onMouseMove); // в таком виде обработчики не симаются
  document.removeEventListener('mouseup', onMouseUp);
};

dragButton.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = getStartPosition(evt);

  document.addEventListener('mousemove', function (eventMove) {
    eventMove.preventDefault();

    newSetupPosition(onMouseMove(startCoords, eventMove.clientX, eventMove.clientY));
  });
  document.addEventListener('mouseup', onMouseUp);
});
