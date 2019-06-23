'use strict';

/* (function () {
  var setupWindow = document.querySelector('.setup');
  var dragButton = setupWindow.querySelector('.upload');

  var onMouseDown = function (event) {
    event.preventDefault();

    var startCoordinates = {
      x: event.clientX,
      y: event.clientY
    };

    var onMouseMove = function (evtMove) {
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
  };

  var onMouseUp = function (evtUp) {
    evtUp.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  dragButton.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    onMouseDown();

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})(); */

/* (function () {
  var setupWindow = document.querySelector('.setup');
  var dragButton = setupWindow.querySelector('.upload');

  var getStartPosition = function (param1, param2) {
    var startCoordinates = {
      x: param1,
      y: param2
    };
    return startCoordinates;
  };

  var onMouseMove = function (object, evtMoveX, evtMoveY) {
    var shift = {
      x: object.x - evtMoveX.clientX,
      y: object.y - evtMoveY.clientY
    };
    console.log(shift);
    var newCoordinates = {
      x: evtMove.clientX,
      y: evtMove.clientY
    };

  };

  setupWindow.style.left = (setupWindow.offsetLeft - shift.x) + 'px';
  setupWindow.style.top = (setupWindow.offsetTop - shift.y) + 'px';

  var onMouseUp = function (evtUp) {
    evtUp.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  dragButton.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    getStartPosition(evt.clientX, evt.clientY);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})(); */
