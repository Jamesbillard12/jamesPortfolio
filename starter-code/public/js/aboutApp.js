'use strict';

var resumeArray = [];
var resumeEduArray = [];

function Resume(aboutRawDataObj){
  this.company = aboutRawDataObj.company;
  this.position= aboutRawDataObj.position;
  this.cityPlace = aboutRawDataObj.cityPlace;
  this.imgURL = aboutRawDataObj.imgURL;
  this.employmentPeriodStart = aboutRawDataObj.employmentPeriodStart;
  this.employmentPeriodEnd = aboutRawDataObj.employmentPeriodEnd;
  this.description = aboutRawDataObj.description;
  this.acategory = aboutRawDataObj.acategory;
}

function Edu(aboutRawDataObj){
  this.degree = aboutRawDataObj.degree;
  this.school= aboutRawDataObj.school;
  this.cityPlace = aboutRawDataObj.cityPlace;
  this.imgURL = aboutRawDataObj.imgURL;
  this.finished = aboutRawDataObj.finished;
  this.description = aboutRawDataObj.description;
  this.acategory = aboutRawDataObj.acategory;
}


Resume.prototype.aboutToHtml = function() {
  var aboutSource = $('#aboutTemplate').html();
  var aboutTemplate = Handlebars.compile(aboutSource);
  return aboutTemplate(this);
};

Edu.prototype.aboutEduToHtml = function() {
  var aboutEduSource = $('#aboutEduTemplate').html();
  var aboutEduTemplate = Handlebars.compile(aboutEduSource);
  return aboutEduTemplate(this);
};


if (localStorage.aboutRawData) {
  var about = JSON.parse(localStorage.aboutRawData);
  console.log(about);


  if ($(about).filter(function (i,n){
    return n.acategory==='Work Experience'})) {

    var getExperience = $(about).filter(function (i,n){return n.acategory==='Work Experience'});
    var renderExpToVilJs = jQuery.makeArray( getExperience );
    renderExpToVilJs.forEach(function(aboutObject) {
      resumeArray.push(new Resume(aboutObject));
    });
    resumeArray.forEach(function(about) {
      $('#abouttodom').append(about.aboutToHtml());
    });
  }

  if ($(about).filter(function (i,n){
    return n.acategory==='Education'})) {
      var getEduc = $(about).filter(function (i,n){return n.acategory==='Education'});
      var renderEduToVilJs = jQuery.makeArray( getEduc );
      renderEduToVilJs.forEach(function(eduObject) {
        resumeEduArray.push(new Edu(eduObject));
      });
      resumeEduArray.forEach(function(about) {
        $('#aboutedutodom').append(about.aboutEduToHtml());
      });
    }
    aboutView.aboutPopulateFilter();
    aboutView.aboutHandleCategoryFilter();
    aboutView.setTeasers();



  }else {
    $(function(){
      $.ajax({
        url: '/js/aboutObjects.json',
        dataType : "json",
      }).done(function(data) {
        localStorage.setItem('aboutRawData', JSON.stringify(data));
        var about = JSON.parse(localStorage.aboutRawData);

        if ($(about).filter(function (i,n){
          return n.acategory==='Work Experience'})) {

          var getExperience = $(about).filter(function (i,n){return n.acategory==='Work Experience'});
          var renderExpToVilJs = jQuery.makeArray( getExperience );
          renderExpToVilJs.forEach(function(aboutObject) {
            resumeArray.push(new Resume(aboutObject));
          });
          resumeArray.forEach(function(about) {
            $('#abouttodom').append(about.aboutToHtml());
          });
        }

        if ($(about).filter(function (i,n){
          return n.acategory==='Education'})) {
            var getEduc = $(about).filter(function (i,n){return n.acategory==='Education'});
            var renderEduToVilJs = jQuery.makeArray( getEduc );
            renderEduToVilJs.forEach(function(eduObject) {
              resumeEduArray.push(new Edu(eduObject));
            });
            resumeEduArray.forEach(function(about) {
              $('#aboutedutodom').append(about.aboutEduToHtml());
            });
          }
        aboutView.aboutPopulateFilter();
        aboutView.aboutHandleCategoryFilter();
        aboutView.setTeasers();
      })
    })
  }
