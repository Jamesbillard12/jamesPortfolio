

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
  this.company = aboutRawDataObj.company;
  this.position= aboutRawDataObj.position;
  this.cityPlace = aboutRawDataObj.cityPlace;
  this.imgURL = aboutRawDataObj.imgURL;
  this.employmentPeriodStart = aboutRawDataObj.employmentPeriodStart;
  this.employmentPeriodEnd = aboutRawDataObj.employmentPeriodEnd;
  this.description = aboutRawDataObj.description;
  this.acategory = aboutRawDataObj.acategory;
}


Resume.prototype.aboutToHtml = function() {
  var aboutSource = $('#aboutTemplate').html();
  var aboutTemplate = Handlebars.compile(aboutSource);
  return aboutTemplate(this);
};

Edu.prototype.aboutToHtml = function() {
  var aboutSource = $('#aboutTemplate').html();
  var aboutTemplate = Handlebars.compile(aboutSource);
  return aboutTemplate(this);
};


if (localStorage.aboutRawData) {
  var about = JSON.parse(localStorage.aboutRawData);
  console.log(about);


  if ($(about).filter(function (i,n){return n.acategory==='Work Experience'})) {
    about.forEach(function(aboutObject) {
      resumeArray.push(new Resume(aboutObject));
    });
    resumeArray.forEach(function(about) {
      $('#abouttodom').append(about.aboutToHtml());
    });
    aboutView.aboutPopulateFilter();
    aboutView.aboutHandleCategoryFilter();
    aboutView.setTeasers();
  }
  if ($(about).filter(function (i,n){return n.acategory==='Education'})) {

    var educ = $(about).filter(function (i,n){return n.acategory==='Education'});

    console.log(educ);

    var dog = jQuery.makeArray( educ );

    console.log(dog);

    dog.forEach(function(eduObject) {
      resumeEduArray.push(new Edu(eduObject));
    });
    resumeEduArray.forEach(function(about) {
      $('#aboutedutodom').append(about.aboutToHtml());
    });
    aboutView.aboutPopulateFilter();
    aboutView.aboutHandleCategoryFilter();
    aboutView.setTeasers();
  }



}else {
  $(function(){
    $.ajax({
      url: '/js/aboutObjects.json',
      dataType : "json",
    }).done(function(data) {
      localStorage.setItem('aboutRawData', JSON.stringify(data));
      var about = JSON.parse(localStorage.aboutRawData);

      about.forEach(function(aboutObject) {
        resumeArray.push(new Resume(aboutObject));
      });
      resumeArray.forEach(function(about) {
        $('#abouttodom').append(about.aboutToHtml());
      });
      aboutView.aboutPopulateFilter();
      aboutView.aboutHandleCategoryFilter();
      aboutView.setTeasers();
    })
  })
}
