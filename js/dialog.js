'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var dragButton = setupWindow.querySelector('.upload');

  var isDragged = false;

  var onMouseDown = function (evtDown) {
    evtDown.preventDefault();

    var startCoordinates = {
      x: evtDown.clientX,
      y: evtDown.clientY
    };

    var onMouseMove = function (evtMove) {
      evtMove.preventDefault();
      isDragged = true;

      var shift = {
        x: startCoordinates.x - evtMove.clientX,
        y: startCoordinates.y - evtMove.clientY
      };

      startCoordinates = {
        x: evtMove.clientX,
        y: evtMove.clientY
      };

      setupWindow.style.left = (setupWindow.offsetLeft - shift.x) + 'px';
      setupWindow.style.top = (setupWindow.offsetTop - shift.y) + 'px';
    };

    var onMouseUp = function (evtUp) {
      evtUp.preventDefault();

      if (isDragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dragButton.removeEventListener('click', onClickPreventDefault);
        };

        dragButton.addEventListener('click', onClickPreventDefault);
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  dragButton.addEventListener('mousedown', onMouseDown);

})();
