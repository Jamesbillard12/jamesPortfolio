'use strict';

(function(module) {
  const repoView = {};




  const render = Handlebars.compile($('#repoTemplate').text());


  repoView.index = function(repos) {


    $('#reposUl').append(repos.with('name').map(render));
  };
  repos.requestRepos(repoView.index);
  module.repoView = repoView;
})(window);
