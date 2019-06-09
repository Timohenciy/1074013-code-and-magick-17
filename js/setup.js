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

var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var similarList = document.querySelector('.setup-similar-list');

var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomValue = function (arr) {
  var index = Math.round(Math.random() * arr.length);
  return arr[index];
};

var getWizards = function (firstName, secondName, coatColor, eyesColor) {
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

var createNewWizard = function (wizards) {
  var newWizardElement = wizardTemplate.cloneNode(true);
  newWizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  newWizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  newWizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;
  return newWizardElement;
};

var setAllWizards = function (wizards) {
  var allWizards = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    var newWizard = createNewWizard(wizards[i]);
    allWizards.appendChild(newWizard);
  }
  similarList.appendChild(allWizards);
};

setAllWizards(getWizards(firstNames, secondNames, coatColors, eyesColors));
