'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');

  var artifactShop = setupWindow.querySelector('.setup-artifacts-shop');
  var artifacts = artifactShop.querySelector('[alt = "Star"]');

  var artifactsInventory = document.querySelector('.setup-artifacts');
  var artifactCell = artifactsInventory.querySelector('.setup-artifacts-cell');

  var onMouseDown = function (evtDown) {
    evtDown.preventDefault();
    artifacts.style.position = 'absolute';

    var startingCoords = {
      x: evtDown.clientX,
      y: evtDown.clientY
    };

    var onMouseOverArtifactCell = function () {

      var onCellMouseUp = function (eventUp) {
        eventUp.preventDefault();

        artifactCell.appendChild(artifacts);
        artifactCell.style.background = 'rgba(0, 0, 0, .1)';

        artifacts.style.left = null;
        artifacts.style.top = null;

        artifactCell.removeEventListener('mouseover', onMouseOverArtifactCell);
        document.removeEventListener('mouseup', onCellMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      };

      artifactCell.style.background = 'rgba(255, 255, 0, 0.5)';

      document.removeEventListener('mouseup', onDialogMouseUp);
      document.addEventListener('mouseup', onCellMouseUp);
    };

    var onMouseMove = function (evtMove) {
      evtMove.preventDefault();

      var shift = {
        x: startingCoords.x - evtMove.clientX,
        y: startingCoords.y - evtMove.clientY
      };

      startingCoords = {
        x: evtMove.clientX,
        y: evtMove.clientY
      };

      artifacts.style.left = (artifacts.offsetLeft - shift.x) + 'px';
      artifacts.style.top = (artifacts.offsetTop - shift.y) + 'px';

      artifactCell.addEventListener('mouseover', onMouseOverArtifactCell);
    };

    var onDialogMouseUp = function (evtUp) {
      evtUp.preventDefault();

      artifacts.style.left = null;
      artifacts.style.top = null;

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onDialogMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onDialogMouseUp);
  };
  artifacts.addEventListener('mousedown', onMouseDown);

})();

/* var onFocusAppendArtifact = function () {
  if (artifactCell == document.activeElement) {
    artifactCell.appendChild
  }
}; */
