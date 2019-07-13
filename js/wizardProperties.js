'use strict';

(function () {
  window.wizardProperties = {
    fireballColors: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ],
    coatColors: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    eyesColors: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ]
  }

  var setupWindow = document.querySelector('.setup');

  var wizardImage = setupWindow.querySelector('.setup-wizard');

  var wizardCoatColor = wizardImage.querySelector('.wizard-coat');
  var wizardCoatColorInput = setupWindow.querySelector('[name = "coat-color"]');

  var wizardEyesColor = wizardImage.querySelector('.wizard-eyes');
  var wizardEyesColorInput = setupWindow.querySelector('[name = "eyes-color"]');

  var wizardFireballColor = document.querySelector('.setup-fireball-wrap');
  var wizardFireballColorInput = wizardFireballColor.querySelector('[name = "fireball-color"]');

  wizardCoatColor.addEventListener('click', function () {
    var newCoatColor = window.util.getRandomValue(window.wizardProperties.coatColors);
    wizardCoatColor.style.fill = newCoatColor;
    wizardCoatColorInput.value = wizardCoatColor.style.fill;
    window.onCoatColorChange(newCoatColor);
  });

  wizardEyesColor.addEventListener('click', function () {
    var newEyesColor = window.util.getRandomValue(window.wizardProperties.eyesColors);
    wizardEyesColor.style.fill = newEyesColor;
    wizardEyesColorInput.value = wizardEyesColor.style.fill;
    window.onEyesColorChange(newEyesColor);
  });

  wizardFireballColor.addEventListener('click', function () {
    wizardFireballColor.style.background = window.util.getRandomValue(window.wizardProperties.fireballColors);
    wizardFireballColorInput.value = wizardFireballColor.style.background;
  });
})();
