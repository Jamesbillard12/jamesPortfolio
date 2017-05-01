'use strict';

(function(module) {
  const projectController = {};
  projectController.index = () => {
    $('.tab-content').hide();
    $('#myProjects').fadeIn('slow');
  };

  module.projectController = projectController;
})(window);
