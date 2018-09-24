'use strict'

'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var globalTable = document.getElementById('table'); //grabbing id "table" from markup file

function Store (locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.locationName = locationName,
  this.minCustomersPerHour = minCustomersPerHour,
  this.maxCustomersPerHour = maxCustomersPerHour,
  this.avgCookiesPerSale = avgCookiesPerSale,
  this.avgCookiesSoldPerHour = [];

  Store.locationName.push(this);
}

Store.locationName = [];

Store.prototype.getCustomerPerHour = function () { //revisit this section with clear video
  return Math.floor(Math.random() * 
    (this.maxCustomersPerHour - this.minCustomersPerHour + 1) +
    this.minCustomersPerHour);
}

Store.prototype.getAvgCookiesSold = function () {
  return Math.round((this.getCustomerPerHour() * this.avgCookiesPerSale + 1) /
    this.getCustomerPerHour());
}

Store.prototype.getAvgCookiesSoldPerHour = function () {
  var cookiesArray = [];

  for(var i = 0; i < hours.length; i++) {
    cookiesArray[i] = this.getAvgCookiesSold()
    console.log(cookiesArray)
  }
  return cookiesArray;
}




// END OF NEW DEMO

var pikePlace = {
  locationName: 'Pike Place Market',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerSale: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,

  calcCustomersEachHour: function() {
    for(var i = 0; i < hours.length; i++) {
      console.log(this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour)))
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour)); //pushing "random" function with min/max customers into "customersEachHour" array
    }
  },

  calcCookiesEachHour: function() {
    this.calcCustomersEachHour(); //looping through "hours" array to ... look above for further clarity
    for(var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale); //multiplying "avaerageCookieSales" by "customersEachHour" to calculate sales per hour
      this.cookiesEachHour.push(oneHour); //pushing value above to "cookiesEachHour" array
      this.totalDailyCookies += oneHour; //accumulating total cookie sales by adding up all hourly sales
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theUl = document.getElementById('pike'); //manipulating "pike" ID in the DOM which is an unordered in this case
    for (var i = 0; i < hours.length; i++) { //looping through 'hours' array
      var liEl = document.createElement('li'); //creating element "li" in ID above

      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies'; //concatenating each index in "hours" array with ": " and each index in "cookiesEachHour" array
      theUl.appendChild(liEl); // under the hood, appending "li" created element with adult "ul" element
    }
    liEl = document.createElement('li'); //creating the 'li' element in JS    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies.';
    theUl.appendChild(liEl); //final append

  }
}

var seaTacAirport = {
  locationName: 'SeaTac Airport',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerSale: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,

  calcCustomersEachHour: function () {
    for (var i = 0; i < hours.length; i++) {
      console.log(this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour)))
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour)); //pushing "random" function with min/max customers into "customersEachHour" array
    }
  },

  calcCookiesEachHour: function () {
    this.calcCustomersEachHour(); //looping through "hours" array to ... look above for further clarity
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale); //multiplying "avaerageCookieSales" by "customersEachHour" to calculate sales per hour
      this.cookiesEachHour.push(oneHour); //pushing value above to "cookiesEachHour" array
      this.totalDailyCookies += oneHour; //accumulating total cookie sales by adding up all hourly sales
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theUl = document.getElementById('seaTacAirport'); //manipulating "pike" ID in the DOM which is an unordered in this case
    for (var i = 0; i < hours.length; i++) { //looping through 'hours' array
      var liEl = document.createElement('li'); //creating element "li" in ID above

      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies'; //concatenating each index in "hours" array with ": " and each index in "cookiesEachHour" array
      theUl.appendChild(liEl); // under the hood, appending "li" created element with adult "ul" element
    }
    liEl = document.createElement('li'); //creating the 'li' element in JS    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies.';
    theUl.appendChild(liEl); //final append

  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var allShops = [pikePlace, seaTacAirport];

function renderAllShops() {
  for (var i = 0; i < allShops.length; i++) {
    allShops[i].render()
  }
};
renderAllShops();

