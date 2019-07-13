'use strict';

(function () {

  var GET_ADDRESS = 'https://js.dump.academy/code-and-magick/data';
  var POST_ADDRESS = 'https://js.dump.academy/code-and-magick';

  var Code = {
    STATUS_SUCCESS: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    REQUEST_TIMEOUT: 408,
    SERVER_ERROR: 500
  };

  window.backend = {
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === Code.STATUS_SUCCESS) {
          onLoad(xhr.response);
        } else {
          onError(xhr.status);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Превышено время ожидания ответа от сервера');
      });

      xhr.timeout = 10000;

      xhr.open('GET', GET_ADDRESS);
      xhr.send();
    },
    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === Code.STATUS_SUCCESS) {
          onLoad();
        } else {
          onError(xhr.status);
        }
      });

      xhr.open('POST', POST_ADDRESS);
      xhr.send(data);
    }
  };
})();
