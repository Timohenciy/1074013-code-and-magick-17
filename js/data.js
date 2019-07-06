'use strict';

(function () {
  var wizardForm = document.querySelector('.setup-wizard-form');

  wizardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(FormData, window.closeSetupAction, window.showErrorWindow);
  });

})();
