'use strict';
setTimeout(function() {
  $('html').removeClass('loading');}, 3000
);

setTimeout(function () {
  $('.first').css("visibility", 'visible');
  $('.first').addClass('animated bounceInDown');},3500
);

setTimeout(function () {
  $('.second').css("visibility", 'visible');
  $('.second').show().addClass('animated flip');}, 4500
);

setTimeout(function () {
  $('.third').css("visibility", 'visible');
  $('.third').show().addClass('animated pulse');}, 5500
);
