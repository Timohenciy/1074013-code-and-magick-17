'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');

  var wizardImage = setupWindow.querySelector('.setup-wizard');

  var wizardCoatColor = wizardImage.querySelector('.wizard-coat');
  var wizardCoatColorInput = setupWindow.querySelector('[name = "coat-color"]');

  var wizardEyesColor = wizardImage.querySelector('.wizard-eyes');
  var wizardEyesColorInput = setupWindow.querySelector('[name = "eyes-color"]');

  var wizardFireballColor = document.querySelector('.setup-fireball-wrap');
  var wizardFireballColorInput = wizardFireballColor.querySelector('[name = "fireball-color"]');

  wizardCoatColor.addEventListener('click', function () {
    wizardCoatColor.style.fill = window.util.getRandomValue(window.util.coatColors);
    wizardCoatColorInput.value = wizardCoatColor.style.fill;
  });

  wizardEyesColor.addEventListener('click', function () {
    wizardEyesColor.style.fill = window.util.getRandomValue(window.util.eyesColors);
    wizardEyesColorInput.value = wizardEyesColor.style.fill;
  });

  wizardFireballColor.addEventListener('click', function () {
    wizardFireballColor.style.background = window.util.getRandomValue(window.util.fireballColors);
    wizardFireballColorInput.value = wizardFireballColor.style.background;
  });
})();
