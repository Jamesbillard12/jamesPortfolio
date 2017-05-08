'use strict';

(function(module) {
  const projectController = {};
  projectController.index = () => {
    $('.removeProjects').remove();
    Project.prototype.projectAjax();
    $('.tab-content').hide();
    $('#myProjects').fadeIn('slow');
  };

  module.projectController = projectController;
})(window);
