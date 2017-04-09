'use strict';
var headerArr = ['Store Name:','10:00am:', '11:00am:', '12:00am:', '1:00pm:', '2:00pm:', '3:00pm:', '4:00pm:', '5:00pm', 'Total:'];
//as the name says this renders my table header...
function renderTableHeader() {
  var header = document.getElementById('storeTable');
  for (var i = 0; i < headerArr.length; i++){
    var newTh = document.createElement('th');
    var headerName = document.createTextNode(headerArr[i]);
    newTh.appendChild(headerName);
    header.appendChild(newTh);
  };
}
renderTableHeader();

var listOfShops= [];

function cookieShop(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.cookiesPurchasedArray = [];
  listOfShops.push(this);
  this.renderCookiesPerHour();
}
//rand customer generator
cookieShop.prototype.randCustPerHour = function(){
  return Math.random() * (this.max - this.min + 1) + this.min;
};
//generates cookies and pushes to cookiesPurchasedArray
cookieShop.prototype.cookiesPurchased = function() {
  for (var i = 1; i < headerArr.length - 1; i++) {
    var rand = Math.round(this.avg * this.randCustPerHour());
    this.cookiesPurchasedArray.push(rand);
    this.total += rand;
  };
};

//this renders the cookie table
cookieShop.prototype.renderCookiesPerHour = function() {
  this.cookiesPurchased();
  var table = document.getElementById('storeTable');
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var tdNames = document.createElement('td');
  tdNames.appendChild(document.createTextNode(this.name));
  tr.appendChild(tdNames);

  for (var i = 0; i < this.cookiesPurchasedArray.length; i++) {
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(this.cookiesPurchasedArray[i]));
    tr.appendChild(td);
  }
  var td2 = document.createElement('td');
  td2.appendChild(document.createTextNode(this.total));
  tr.appendChild(td2);
};
//alternates row colors


//created function so i can create more stores
function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);

  var name = event.target.name.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(event.target.avg.value);

  var newCookieShop = new cookieShop(name, min, max, avg);

  event.target.name.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;

  // Access totals row, delete it, and recreate it by calling getTotals function again.
  var totalsTR = document.getElementById('totalsTR');
  totalsTR.remove(1);
  getTotals();

}




form.addEventListener('submit', handleFormSubmit);
//where methods and functions are called

var pikePlace = new cookieShop('Pike-Place ', 17, 88, 5.2);
var seaTacAir = new cookieShop('Sea Tac Airport ', 6, 24, 1.2);
var southCenter = new cookieShop('South Center ', 11, 38, 1.9);
var bellevueSquare = new cookieShop('Bellevue Square ', 20, 48, 3.3);
var alki = new cookieShop('Alki ', 3, 24, 2.6);



var getTotals = function(){

  var totalsTR = document.createElement('tr')
  // Add ID to the totals row for later access (and styling)
  totalsTR.id = 'totalsTR';

  storeTable.appendChild(totalsTR);
  var totalByTimeOfDayDescTD = document.createElement('td');
  totalByTimeOfDayDescTD.textContent = 'Totals'
  totalsTR.appendChild(totalByTimeOfDayDescTD);

  for (var i = 1; i < (headerArr.length - 1); i++) {
    var totalByTimeOfDayTD = document.createElement('td');
    var totalByTimeOfDay = 0;
    for (var j = 0; j < listOfShops.length; j++) {
      totalByTimeOfDay += listOfShops[j].cookiesPurchasedArray[i-1]
    }
    totalByTimeOfDayTD.textContent = totalByTimeOfDay;
    totalsTR.appendChild(totalByTimeOfDayTD);
  }

  var grandTotalTD = document.createElement('td');

  var grandTotal = 0;
  for (var i = 0; i < listOfShops.length; i++) {
    grandTotal += listOfShops[i].total;
  }

  grandTotalTD.textContent = grandTotal;
  totalsTR.appendChild(grandTotalTD);

  var alternate = function(){
    if(document.getElementsByTagName){
      var table = document.getElementById('storeTable');
      var rows = table.getElementsByTagName('tr');
      for(var i = 0; i < rows.length; i++){
        if(i % 2 === 0){
          rows[i].className = 'even';
        }else{
          rows[i].className = 'odd';
        }
      }
    }
  }
  alternate();
}
getTotals();
