'use strict';

var view = {};

view.populateFilter = function() {
  $('section').find('.pbox').each(function() {
    var category, optionTag;
    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};
//


view.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
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
