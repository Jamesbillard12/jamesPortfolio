'use strict';

(function(module) {
  const reposController = {};
  reposController.index = () => {
    $('.removeRepos').remove();
    repos.requestRepos(repoView.index);
    $('.tab-content').hide();
    $('#myRepos').fadeIn('slow');

  };

  module.reposController = reposController;
})(window);
