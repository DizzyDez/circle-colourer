var $html = $('html');
var $ball = $('.ball');
var $picker = $('form');
var $input = $('#colour-pick');

$picker.on('change', function () {
  console.log('works');
  $ball.css('background-color', $input.val());
});
