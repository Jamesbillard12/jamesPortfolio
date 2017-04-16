'use strict';

$('.first').addClass('animated bounceInDown');

setTimeout(function () {
  $('.second').css("visibility", 'visible');
  $('.second').show().addClass('animated flip');}, 1500
);

setTimeout(function () {
  $('.third').css("visibility", 'visible');
  $('.third').show().addClass('animated pulse');}, 3000
);
