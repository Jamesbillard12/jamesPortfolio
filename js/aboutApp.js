'use strict';
var resumeArray = [];


function Resume(aboutRawDataObj){
  this.company = aboutRawDataObj.company;
  this.position= aboutRawDataObj.position
  this.cityPlace = aboutRawDataObj.cityPlace
  this.employmentPeriodStart = aboutRawDataObj.employmentPeriodStart;
  this.employmentPeriodEnd = aboutRawDataObj.employmentPeriodEnd;
  this.description = aboutRawDataObj.description;
  this.acategory = aboutRawDataObj.acategory;
}


// Resume.prototype.toHtml = function() {
//   var source = $('#projectTemplate').html();
//   var template = Handlebars.compile(source);
//   return template(this);
// };
aboutRawData.forEach(function(aboutObject) {
  resumeArray.push(new Resume(aboutObject));
});

// resumeArray.forEach(function(pjects) {
//   $('#abouttodom').append(pjects.toHtml());
// });
