'use strict';

(function () {

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

  var setupSimilar = document.querySelector('.setup-similar'); // Окно похожих персонажей
  setupSimilar.classList.remove('hidden');

  var similarList = document.querySelector('.setup-similar-list'); // Список похожих персонажей

  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Шаблон персонажа

  var getWizards = function (firstName, secondName, coatColor, eyesColor) { // Создание массива объектов с характеристиками персонажей
    var NUMBER_OF_WIZARDS = 4;
    var wizards = [];

    for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
      var wizard = {};

      wizard.name = window.util.getRandomValue(firstName) + ' ' + window.util.getRandomValue(secondName);
      wizard.coatColor = window.util.getRandomValue(coatColor);
      wizard.eyesColor = window.util.getRandomValue(eyesColor);
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

  setAllWizards(getWizards(firstNames, secondNames, window.util.coatColors, window.util.eyesColors));
})();
