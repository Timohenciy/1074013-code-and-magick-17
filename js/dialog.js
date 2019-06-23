'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var dragButton = setupWindow.querySelector('.upload');

  var onMouseDown = function (evtDown) {
    evtDown.preventDefault();
    // получаю x и y после события mousedown
    var startCoordinates = {
      x: evtDown.clientX,
      y: evtDown.clientY
    };

    var onMouseMove = function (evtMove) {
      event.preventDefault();
      // как я понимаю это должна быть разница между начальной позицией курсора и позицией после перемещения
      var shift = {
        x: startCoordinates.x - evtMove.clientX,
        y: startCoordinates.y - evtMove.clientY
      };
      // а здесь я хочу к первоначальной позиции прибавить разницу
      startCoordinates = {
        x: evtMove.clientX,
        y: evtMove.clientY
      };

      setupWindow.style.left = (setupWindow.offsetLeft - shift.x) + 'px';
      setupWindow.style.top = (setupWindow.offsetTop - shift.y) + 'px';
    };

    var onMouseUp = function (evtUp) {
      evtUp.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  dragButton.addEventListener('mousedown', onMouseDown);

})();
