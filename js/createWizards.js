'use strict';

(function () {

  /* var firstNames = [
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
  ]; */

  var setupSimilar = document.querySelector('.setup-similar'); // Окно похожих персонажей
  setupSimilar.classList.remove('hidden');

  var similarList = document.querySelector('.setup-similar-list'); // Список похожих персонажей

  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Шаблон персонажа

  var NUMBER_OF_WIZARDS = 4;

  var createNewWizard = function (wizards) { // Содание отдельного персонажа
    var newWizardElement = wizardTemplate.cloneNode(true);
    newWizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
    newWizardElement.querySelector('.wizard-coat').style.fill = wizards.colorCoat;
    newWizardElement.querySelector('.wizard-eyes').style.fill = wizards.colorEyes;

    return newWizardElement;
  };

  var setAllWizards = function (wizards) { // Добавление созданных персонажей в список похожих персонажей
    var allWizards = document.createDocumentFragment();

    for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
      var newWizard = createNewWizard(window.util.getRandomValue(wizards));
      allWizards.appendChild(newWizard);
    }

    similarList.appendChild(allWizards);
  };

  var test = function () {
    console.log('Error!');
  };

  window.backend.load(setAllWizards, test);

})();
