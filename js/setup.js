'use strict';

var NUMBER_OF_WIZARDS = 4;

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

var getRandomValue = function (inputValue) {
  var outputValue = Math.round(Math.random() * inputValue);
  return outputValue;
};

var setPlayerName = function (firstName, secondName) {
  var randomFirstName = Math.round(getRandomValue(firstName.length));
  var randomSecondName = Math.round(getRandomValue(secondName.length));

  var randomName = firstName[randomFirstName] + ' ' + secondName[randomSecondName];

  return randomName;
};

for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
  var newWizardElement = wizardTemplate.cloneNode(true);

  newWizardElement.querySelector('.setup-similar-label').textContent = setPlayerName(firstNames, secondNames);
  newWizardElement.querySelector('.wizard-coat').style.fill = coatColors[getRandomValue(coatColors.length)];
  newWizardElement.querySelector('.wizard-eyes').style.fill = eyesColors[getRandomValue(eyesColors.length)];

  similarList.appendChild(newWizardElement);
}
