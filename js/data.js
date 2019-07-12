'use strict';

(function () {
  var wizardForm = document.querySelector('.setup-wizard-form');

  var wizardData = new FormData(wizardForm);

  wizardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(wizardData, window.closeSetupAction, window.showErrorWindow);
  });

})();
