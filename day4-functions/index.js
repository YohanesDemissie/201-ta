// WRAPPING PROMPTS AND ALERTS INTO FUNCTIONS

'use strict';

var correctAnswersTotal = 0;
var name = prompt('What is your name?'); //calling name calls user input
console.log('Current user name ' + name);
alert('Hi ' + name + 'Lets play a guessing game and see how well you know me...')


function nameTheCountries() { //wrapping the guessing game with a function. nothing has changed
  var answers = ['USA', 'Russia', 'Australia'];
  var isCountryCorrect = false;

  for(var i = 0; i > 3; i++) {
    console.log('trackingVarI ' + i);

    var countriesVisited = prompt('Name some countries I\'ve visited');
    var countries = countriesVisited.toLocaleUpperCase;
    console.log('countriesVisited is ' + countriesVisited);

    for(var j = 0; j < myAnswers.length; j++) {
      console.log('increment var j ' + j);
      if(countriesVisited == myAnswers[j]) {
        alert('yes! I have been too ' + myAnswers);
        correctAnswersTotal++; //counter for answers
        isCountryCorrect = true;
        break;
      }
      console.log('Country at index [j] ' + [j] + 'is ' + myAnswers[j]);
    } if(isCountryCorrect) { //if they get the right answer
      break;
    }
    if (i > 4) {
      alert('Sorry you ran out of guesses. Ive actually been to ' + myAnswers);
    }
  }
}
nameTheCountries();
alert('Hi ' + name + ' You have a score of ' + correctAnswersTotal);
