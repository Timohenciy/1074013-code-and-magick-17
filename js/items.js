'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');

  var artifactShop = setupWindow.querySelector('.setup-artifacts-shop');
  var artifact = artifactShop.querySelector('[alt = "Star"]');

  var artifactsInventory = document.querySelector('.setup-artifacts');

  var onDragStart = function (evtStart) {
    evtStart.dataTransfer.effectAllowed = 'move';
    evtStart.dataTransfer.setData('Text', evtStart.target.getAttribute('alt'));

    var onDragEnter = function (evtEnter) {
      evtEnter.preventDefault();

      evtEnter.target.style.background = 'blue';

      artifactsInventory.addEventListener('dragleave', onDragLeave);
    };

    var onDragOver = function (evtOver) {
      evtOver.preventDefault();

      artifactsInventory.style.boxShadow = '0px 0px 20px 5px rgba(255,255,0,0.3)';
    };

    var onDragLeave = function (evtLeave) {
      evtLeave.preventDefault();

      artifactsInventory.style.boxShadow = null;
      evtLeave.target.style.background = null;
    };

    var onDrop = function (evtDrop) {
      evtDrop.preventDefault();

      evtDrop.target.style.background = null;

      var data = evtDrop.dataTransfer.getData('Text');
      evtDrop.dataTransfer.dropEffect = 'move';
      evtDrop.target.appendChild(document.querySelector('[alt = "' + data + '"]'));
    };

    artifactsInventory.addEventListener('dragenter', onDragEnter);
    artifactsInventory.addEventListener('dragover', onDragOver);
    artifactsInventory.addEventListener('drop', onDrop);
  };

  artifact.addEventListener('dragstart', onDragStart);
})();
