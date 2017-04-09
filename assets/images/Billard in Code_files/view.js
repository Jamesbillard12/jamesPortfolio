// 'use strict';
//
// var articleView = {};
//
// articleView.populateFilters = function() {
//   $('article').not('.template').each(function() {
//     var authorName, category, optionTag;
//     authorName = $(this).find('address a').text();
//     optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
//     $('#author-filter').append(optionTag);
//     category = $(this).attr('data-category');
//     optionTag = '<option value="' + category + '">' + category + '</option>';
//     if ($('#category-filter option[value="' + category + '"]').length === 0) {
//       $('#category-filter').append(optionTag);
//     }
//   });
// };
//

//
// articleView.handleCategoryFilter = function() {
//   /* TODO: Just like we do for #author-filter above, we should also handle
//   change events on the #category-filter element. Be sure to reset the
//   #author-filter while you're at it! */
//
//   $('#category-filter').on('change', function() {
//     if ($(this).val()) {
//       console.log('happening');
//
//
//       $('article').hide();
//
//       $('article[data-category="' + $(this).val() + '"]').fadeIn();
//
//       var $newArticle = ($(this).val());
//       console.log($newArticle);
//     } else {
//
//       $('article').fadeIn();
//       $('article.template').hide();
//     }
//     $('#author-filter').val('');
//   });
// };

handleMainNav = function () {


  $('.main-nav').on('click', '.tab', function() {

    event.preventDefault();
    $('section.tab-content').hide();
    // 2.
    $('#' + $(this).attr('data-content')).fadeIn();

  });
  $('.main-nav .tab:first').click();
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
//
//   /* TODO: Add a delegated event handler to reveal the remaining paragraphs.
//   When a .read-on link is clicked, we can:
//   1. Prevent the default action of a link.
//   2. Reveal everything in that particular article now.
//   3. Hide that read-on link!
//
//   // STRETCH GOAl!: change the 'Read On' link to 'Show Less'
//   */
//
//
//
// };

// TODO: Invoke all of the above functions (I mean, methods!):
$(function(){
    $('section.tab-content').hide();
    $('#aboutMe').fadeIn();
    handleMainNav();

  // articleView.populateFilters();
  // articleView.handleCategoryFilter();
  // articleView.setTeasers();
});
