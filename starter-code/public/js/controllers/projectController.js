'use strict';

(function(module) {
  const projectController = {};
  // TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  projectController.index = () => {
    Project.prototype.projectAjax();
    $('.tab-content').hide();
    $('#myProjects').fadeIn('slow');
  };

  module.projectController = projectController;
})(window);
