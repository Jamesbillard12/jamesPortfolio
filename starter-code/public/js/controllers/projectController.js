'use strict';

(function(module) {
  const articleController = {};
  // TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  articleController.index = () => {
    window.Article.fetchAll();
    $('.tab-content').hide();
    $('#articles').fadeIn('slow');
  };



  module.articleController = articleController;
})(window);
