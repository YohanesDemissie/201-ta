'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm'];
var thead = document.getElementsByTagName('thead')[0]; //
var tbody = document.getElementsByTagName('tbody')[0]; //
var tfoot = document.getElementsByTagName('tfoot')[0]; //
var addForm = document.getElementById('add-location');

function Store (location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.averageCookiesEachHour = [];
  this.totalCookies = 0;

  this.getSales();

  Store.allLocations.push(this); //pushes all store data to array
}

Store.allLocations = []; //stores all stores and data in this array

Store.prototype.render = function() {
  var tr = addElement('tr', '', tbody);
  addElement('td', this.location, tr);

  for( var i = 0;  i < this.averageCookiesEachHour.length; i++) {
    addElement('td', this.averageCookiesEachHour[i], tr);
  }
  addElement('td', this.totalCookies, tr)
}

Store.prototype.getSales = function () {
  for (var i = 0; i < hours.length; i++) {
    var numberOfCustomers = rando(
      this.minCustomersPerHour,
      this.maxCustomersPerHour,
    );
    var hourlyCount = Math.floor(numberOfCustomers * this.avgCookiesPerSale);
    this.averageCookiesEachHour.push(hourlyCount)

    this.totalCookies += hourlyCount; // calculates tototal cookie sells per hour per store
  }
};

console.log(Store.allLocations, 'Hello'); //prints all stores and prototype data in console

function rando(minCustomersPerHour, maxCustomersPerHour) {
  var randomNumber = Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour + 1)) + minCustomersPerHour;
  return randomNumber;
}

function addElement(element, content, parent) {
  var newElement = document.createElement(element);
  var newContent = document.createTextNode(content);
  newElement.appendChild(newContent);
  parent.appendChild(newElement);
  return newElement;
}

function renderHeader() {
  thead.innerHTML = '';
  //var tr = document.createElement('tr');
  var tr = addElement('tr', '', thead);
  //var th = document.createElement('th');
  addElement('th', '', tr);
  //tr.appendChild(th);

  for (var i = 0; i < hours.length; i++) {
    addElement('th', hours[i], tr)
    // var hourTH = document.createElement('th')
    // hourTH.textContent = hours[i];
    // tr.appendChild(hourTH);
  }
  //thead.appendChild(tr)
  addElement('th', 'Total', tr);
}

function renderStores() {
  tbody.innerHTML = '';
  for( var i = 0; i < Store.allLocations.length; i++) {
    Store.allLocations[i].render();
  }
}

function renderFooter() {
  tfoot.innerHTML = ''; //this clears the row for content to be added below
  var tr = addElement('tr', '', tfoot);
  addElement('th', 'Hourly Total', tr);

  var grandTotal = 0;

  for( var i = 0; i < hours.length; i++) {
    var hourTotal = 0;
    for( var j = 0; j < Store.allLocations.length; j++) {
      hourTotal += Store.allLocations[j].averageCookiesEachHour[i];

      grandTotal += Store.allLocations[j].averageCookiesEachHour[i];

    }
    addElement('th', hourTotal, tr)
  }
  addElement('th', grandTotal, tr)
}

function handleSubmit(event) { // add a new store
  event.preventDefault(); //prevents default behavior 
  var locationName = event.target.locName.value;
  var min = parseInt(event.target.min.value); //parseInt transfers number value to string
  var max = parseInt(event.target.max.value);
  var avg = parseFloat(event.target.avg.value); //parseFloat rounds the number

  var store = new Store(locationName, min, max, avg);

console.log(store) //to print new store in console
console.log(Store.allLocations); // to see new store in array

store.render();

}

addForm.addEventListener('submit', handleSubmit, )

//Instantiate prototypes to new stores
new Store('Pike Place Market', 22, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Cap Hill', 20, 28, 2.3);
new Store('Alki', 2, 16, 4.6);

renderHeader();
renderStores();
renderFooter();

console.log(Store.allLocations)
//DEMO STOPS HERE

// var main = addElement('main', '', document.body); //creating the element <main>, with no content, in the "body"
// var ul = addElement('ul', '', main)
// addElement('li', 'item 1', ul)
// addElement('li', 'item 2', ul)
// addElement('li', 'item 3', ul);

// var thirdLi = addElement('p', 'football', main);