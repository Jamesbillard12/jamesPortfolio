'use strict';

(function(module) {
  const reposController = {};
  reposController.index = () => {
    $('.tab-content').hide();
    $('#myRepos').fadeIn('slow');
  };

  module.reposController = reposController;
})(window);
