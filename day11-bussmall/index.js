'use strict'

var imgElement = document.getElementById('goat');

Goat.allGoats = [];

//Constructor function of Goat objects
function Goat(filePath, goatName) {
  this.imgSource = filePath;
  this.goatName = goatName;
  Goat.allGoats.push(this);
}

function randomGoat() {
  var randomNumber = Math.floor(Math.random() * Goat.allGoats.length); //round down, random number (0-1) * length of array
  imgElement.src = Goat.allGoats[randomNumber].imgSource;
  imgElement.alt = Goat.allGoats[randomNumber].goatName;
  console.log(imgElement.alt)
}


// random generator to determine



imgElement.addEventListener('click', randomGoat);

// GET DOM BY ID
new Goat('img/cruisin-goat.jpg', 'Tom-cruisin-goat');
new Goat('img/cruisin-goat.jpg', 'Tom-cruisin-goat');
new Goat('img/kissing-goat.jpg', 'kissing-goat');
new Goat('img/sassy-goat.jpg', 'sassy-goat');
new Goat('img/smiling-goat.jpg', 'smiling-goat');
new Goat('img/sweater-goat.jpg', 'sweater-goat');

randomGoat();
