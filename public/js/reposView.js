'use strict';

(function(module) {
  const repoView = {};



  repoView.repoToDom = (render) => {
    var render = Handlebars.compile($('#repoTemplate').text());
    return render;
  }

  repoView.index = function(repos) {

    
    $('#reposUl').append(
      repos.with('name').map(repoView.repoToDom(repos))
    );
  };

  module.repoView = repoView;
})(window);
