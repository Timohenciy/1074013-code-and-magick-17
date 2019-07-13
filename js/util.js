'use strict';

(function () {
  window.util = {
    getRandomValue: function (arr) {
      var i = Math.round(Math.random() * arr.length - 1);
      return arr[i];
    }
  };
})();
