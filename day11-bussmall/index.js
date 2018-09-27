'use strict'

var imgElement = document.getElementById('goat');

Goat.allGoats = [];

//Constructor function of Goat objects
function Goat(filePath, goatName) {
  this.imgSource = filePath; //file path
  this.goatName = goatName; //alternative name
  Goat.allGoats.push(this); //pushing all instants(below) of GOATS into array
}

function randomGoat() {
  var randomNumber = Math.floor(Math.random() * Goat.allGoats.length); //round down, random number (0-1) * length of array
  imgElement.src = Goat.allGoats[randomNumber].imgSource; //randomizes image by variable above
  imgElement.alt = Goat.allGoats[randomNumber].goatName; //gives data of "image name" at index ofw
  console.log(imgElement.alt) //prints image name in the console
}

imgElement.addEventListener('click', randomGoat);

var counterButton = document.getElementById('goat');
var counter = 0;

counterButton.addEventListener('click', function() {
  counter++;
  counterButton.innerHTML = counter;
  console.log(counterButton)
});




// GET DOM BY ID
new Goat('img/cruisin-goat.jpg', 'Tom-cruisin-goat');
new Goat('img/kissing-goat.jpg', 'kissing-goat');
new Goat('img/sassy-goat.jpg', 'sassy-goat');
new Goat('img/smiling-goat.jpg', 'smiling-goat');
new Goat('img/sweater-goat.jpg', 'sweater-goat');

randomGoat();
