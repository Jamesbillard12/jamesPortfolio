'use strict';

(function(module) {
  const reposController = {};
  reposController.index = () => {
    $('.tab-content').hide();
    $('#myRepos').fadeIn('slow');
    repos.requestRepos(repoView.index);
  };

  module.reposController = reposController;
})(window);
