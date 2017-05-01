'use strict';

(function(module) {
  const musicController = {};
  // TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  musicController.index = () => {
    $('.tab-content').hide();
    $('#myMusic').fadeIn('slow');
  };
  module.musicController = musicController;
})(window);
