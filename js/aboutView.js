'use strict';

var view = {};

view.populateFilter = function() {
  $('section').find('.abox').each(function() {
    var category, optionTag;
    category = $(this).attr('data-category');
    console.log(category);
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#project-category-filter option[value="' + category + '"]').length === 0) {
      $('#project-category-filter').append(optionTag);
    }
  });
};
//


view.handleCategoryFilter = function() {
  $('#project-category-filter').on('change', function() {
    if ($(this).val()) {
      console.log('happening');


      $('section.pbox').fadeOut('slow');

      $('section[data-category="' + $(this).val() + '"]').delay(800).fadeIn('slow');

      var $newArticle = ($(this).val());
      console.log($newArticle);
    } else {

      $('section.pbox').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

view.handleMainNav = function () {


  $('.main-nav').on('click', '.tab', function() {

    event.preventDefault();
    $('section.tab-content').hide();
    // 2.
    $('#' + $(this).attr('data-content')).fadeIn();

  });
};

// articleView.setTeasers = function() {
//   // Truncate logic to show only first two elements within the article body.
//   $('.article-body *:nth-of-type(n+2)').hide();
//   $('article').on('click', '.read-on', function(){
//     console.log('event');
//     event.preventDefault();
//     $(this).siblings('section.article-body').children().toggle();
//
//     if ($(this).html() === 'Read on →') {
//       $(this).html('Read less &larr;');
//     }
//     else {
//       $(this).html('Read on →');
//     }
//   });
$(function(){
    $('section.tab-content').hide();
    $('#aboutMe').fadeIn();
    view.populateFilter();
    view.handleCategoryFilter();
    view.handleMainNav();
  // articleView.setTeasers();
});
