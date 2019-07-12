'use strict';

(function () {
  var setupSimilar = document.querySelector('.setup-similar'); // Окно похожих персонажей
  setupSimilar.classList.remove('hidden');

  var similarList = document.querySelector('.setup-similar-list'); // Список похожих персонажей

  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Шаблон персонажа

  var coatColor = '';
  var eyesColor = '';
  var updateTimer = 0;
  var wizardsData = [];

  var debounce = function (someFunction, timeout) {
    if (updateTimer) {
      clearTimeout(updateTimer);
    }
    updateTimer = setTimeout(someFunction, timeout);
  };

  var getWizardRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left.name > right.name) {
      return 1;
    } else if (left.name < right.name) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    var sameWizards = wizardsData.sort(function (left, right) {
      var rankDiff = getWizardRank(right) - getWizardRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left, right);
      }
      return rankDiff;
    });

    appendWizards(sameWizards.slice(0, 4));
  };

  var succesHandler = function (data) {
    wizardsData = data;
    updateWizards();
  };

  window.onCoatColorChange = function (color) {
    coatColor = color;
    debounce(updateWizards, 500);
  };

  window.onEyesColorChange = function (color) {
    eyesColor = color;
    debounce(updateWizards, 500);
  };

  var createNewWizard = function (wizard) { // Содание отдельного персонажа
    var newWizardElement = wizardTemplate.cloneNode(true);
    newWizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    newWizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    newWizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return newWizardElement;
  };

  var appendWizards = function (wizards) { // Добавление созданных персонажей в список похожих персонажей
    similarList.innerHTML = '';
    var allWizards = document.createDocumentFragment();

    wizards.forEach(function (element) {
      var newWizard = createNewWizard(element);
      allWizards.appendChild(newWizard);
    });

    similarList.appendChild(allWizards);
  };

  window.backend.load(succesHandler, window.showErrorWindow);

})();
