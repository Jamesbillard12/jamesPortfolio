'use strict';
((module)=>{
  var projectsArray = [];

  function Project(rawDataObj){
    this.name = rawDataObj.name;
    this.description = rawDataObj.description;
    this.url = rawDataObj.url;
    this.date = rawDataObj.date;
    this.category = rawDataObj.category;
  }

  Project.prototype.toHtml = function() {
    var source = $('#template').html();
    var template = Handlebars.compile(source);
    return template(this);
  };

  Project.prototype.projectAjax = function(){
    if (localStorage.projectRawData) {
      var project = JSON.parse(localStorage.projectRawData);
      project.forEach(function(projectObject) {
        projectsArray.push(new Project(projectObject));
      });
      projectsArray.forEach(function(pjects) {
        $('#projectstodom').append(pjects.toHtml());
      });
      $('section.tab-content').hide();
      $('#aboutMe').fadeIn();
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
          project.forEach(function(projectObject) {
            projectsArray.push(new Project(projectObject));
          });
          projectsArray.forEach(function(pjects) {
            $('#projectstodom').append(pjects.toHtml());
          });
          $('section.tab-content').hide();
          $('#aboutMe').fadeIn();
          view.populateFilter();
          view.handleCategoryFilter();
        })
      })
    }
  }
  Project.prototype.projectAjax();
  module.Project = Project;
})(window);
