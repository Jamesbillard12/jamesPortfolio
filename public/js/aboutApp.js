'use strict';

((module)=>{
  function Resume(aboutRawDataObj){
    Object.keys(aboutRawDataObj).forEach(key => this[key] = aboutRawDataObj [key]);
  }
  Resume.resumeArray = [];

  function Edu(aboutRawDataObj){
    Object.keys(aboutRawDataObj).forEach(key => this[key] = aboutRawDataObj [key]);
  }

  Edu.resumeEduArray = [];

  Resume.prototype.aboutToHtml = function() {
    var aboutTemplate = Handlebars.compile($('#aboutTemplate').html());
    return aboutTemplate(this);
  };

  Edu.prototype.aboutEduToHtml = function() {
    var aboutEduTemplate = Handlebars.compile($('#aboutEduTemplate').html());
    return aboutEduTemplate(this);
  };

  Resume.prototype.aboutAjax = function(){
    if (localStorage.aboutRawData) {
      var about = JSON.parse(localStorage.aboutRawData);

      if ($(about).filter(function (i,n){return n.acategory==='Work Experience'})) {
        var renderExpToVilJs = jQuery.makeArray($(about).filter((i,n)=>{return n.acategory==='Work Experience'}));
        Resume.resumeArray = renderExpToVilJs.map((ele)=>{return new Resume(ele);});
        Resume.resumeArray.forEach((about)=> {
          $('#abouttodom').append(about.aboutToHtml());
        });
      }
      if ($(about).filter(function (i,n){return n.acategory==='Education'})) {
        var renderEduToVilJs = jQuery.makeArray($(about).filter((i,n)=>{return n.acategory==='Education'}));
        Edu.resumeEduArray = renderEduToVilJs.map((ele)=>{return new Edu(ele);});
        Edu.resumeEduArray.forEach((about)=> {
          $('#aboutedutodom').append(about.aboutEduToHtml());
        });
      }
      aboutView.aboutPopulateFilter();
      aboutView.aboutHandleCategoryFilter();
      aboutView.setTeasers();
    } else {
      $(function(){
        $.ajax({
          url: '/js/aboutObjects.json',
          dataType : "json",
        }).done(function(data) {
          localStorage.setItem('aboutRawData', JSON.stringify(data));
          var about = JSON.parse(localStorage.aboutRawData);

          if ($(about).filter(function (i,n){return n.acategory==='Work Experience'})) {
            var renderExpToVilJs = jQuery.makeArray($(about).filter((i,n)=>{return n.acategory==='Work Experience'}));
            Resume.resumeArray = renderExpToVilJs.map((ele)=>{return new Resume(ele);});
            Resume.resumeArray.forEach((about)=> {
              $('#abouttodom').append(about.aboutToHtml());
            });
          }
          if ($(about).filter(function (i,n){return n.acategory==='Education'})) {
            var renderEduToVilJs = jQuery.makeArray($(about).filter((i,n)=>{return n.acategory==='Education'}));
            Edu.resumeEduArray = renderEduToVilJs.map((ele)=>{return new Edu(ele);});
            Edu.resumeEduArray.forEach((about)=> {
              $('#aboutedutodom').append(about.aboutEduToHtml());
            });
          }
          aboutView.aboutPopulateFilter();
          aboutView.aboutHandleCategoryFilter();
          aboutView.setTeasers();
        })
      })
    }
  }
  Resume.prototype.aboutAjax();
  module.Resume = Resume;
  module.Edu = Edu;
})(window);
