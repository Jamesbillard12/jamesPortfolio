
'use strict';
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
    })
  })
}

$(function(){
  view.handleCategoryFilter();
  view.handleMainNav();
});
