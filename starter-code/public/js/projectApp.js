'use strict';
((module)=>{

  function Project(rawDataObj){
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj [key]);
  }
  Project.projectsArray = [];

  Project.prototype.toHtml = function() {
    var template = Handlebars.compile($('#template').html());
    return template(this);
  };

  Project.prototype.numWordsAll= () => {
    return Project.projectsArray.map((projects)=>{
      var wordCount = projects.description.split(' ');
      return wordCount.length;
    }).reduce((a, b) => {
      return a + b;
    })
  };

  Project.prototype.projectAjax = function(){
    if (localStorage.projectRawData) {
      var project = JSON.parse(localStorage.projectRawData);
      Project.projectsArray= project.map((ele)=>{return new Project(ele);})
      Project.projectsArray.forEach(function(pjects) {
        $('#projectstodom').append(pjects.toHtml());
      });
      $('#projectStats .words').text(Project.prototype.numWordsAll())
      view.populateFilter();
      view.handleCategoryFilter();
    }else {
      $(function(){
        $.ajax({
          url: '/js/projectobjects.json',
          dataType : "json",
        }).done(function(data) {
          localStorage.setItem('projectRawData', JSON.stringify(data));
          var project = JSON.parse(localStorage.projectRawData);
          Project.projectsArray= project.map((ele)=>{return new Project(ele);})
          Project.projectsArray.forEach(function(pjects) {
            $('#projectstodom').append(pjects.toHtml());
          });
          $('#projectStats .words').text(Project.prototype.numWordsAll())
          view.populateFilter();
          view.handleCategoryFilter();
        })
      })
    }
  }
  Project.prototype.projectAjax();
  module.Project = Project;
})(window);
