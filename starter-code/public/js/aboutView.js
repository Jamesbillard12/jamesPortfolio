'use strict';

var aboutView = {};

aboutView.aboutPopulateFilter = function() {
  $('section').find('.abox').each(function() {
    var acategory, aoptionTag;
    acategory = $(this).attr('data-category');
    aoptionTag = '<option value="' + acategory + '">' + acategory + '</option>';
    if ($('#about-category-filter option[value="' + acategory + '"]').length === 0) {
      $('#about-category-filter').append(aoptionTag);
    }
  });
};
//


aboutView.aboutHandleCategoryFilter = function() {
  $('#about-category-filter').on('change', function() {
    if ($(this).val()) {

      $('section.abox').hide('pulsate', {duration: 1000});

      $('section[data-category="' + $(this).val() + '"]').animate({opacity:1}).delay(655).slideDown('slow');
      $('section[data-category="' + $(this).val() + '"]').effect( "bounce" );
      var $newArticle = ($(this).val());
      console.log($newArticle);
    } else {

      $('section.abox').animate({opacity:1}).delay(200).slideDown('slow');
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};


aboutView.setTeasers = function() {

  $('.article-body').hide();
  $('section.abox').on('click', '.read-on', function(){
    event.preventDefault();
    $(this).siblings('section.article-body').slideToggle();

    if ($(this).html() === 'Click Here to Read More About this Position →') {
      $(this).html('Read less &larr;');
    }
    else {
      $(this).html('Click Here to Read More About this Position →');
    }
  });
};
