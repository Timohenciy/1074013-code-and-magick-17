var WINDOW_WIDTH = 420;
var WINDOW_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_HEIGHT = 15;
var COLUMN_HEIGHT = 150;
var COLUMN_WIDTH = 40;
//var COLUMN_COLOR = 'rgb(0, 0, 255)';
var COLUMN_DISTANCE = 50;
var COLUMN_TOP_GAP = CLOUD_Y + GAP + (GAP + TEXT_HEIGHT) * 3;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, WINDOW_WIDTH, WINDOW_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for(var i = 1; i < arr.length; i++) {
    if(arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + (GAP + TEXT_HEIGHT) * 2);

  var maxTime = getMaxElement(times);

  for( var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + COLUMN_WIDTH + (COLUMN_WIDTH + COLUMN_DISTANCE) * i, WINDOW_HEIGHT);
    ctx.fillRect(CLOUD_X + COLUMN_WIDTH + (COLUMN_WIDTH + COLUMN_DISTANCE) * players[i], COLUMN_TOP_GAP, COLUMN_WIDTH, (COLUMN_HEIGHT * times[i]) / maxTime);
  }
};
