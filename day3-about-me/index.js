'use strict';


 var color = prompt('what is your favorite color');

 // IF STATEMENT EXACTLY SAME AS SWITCH CASE BELOW

// if (color === 'red') // if color is equal to in 
// {
//   alert('How\'d you know? That is my favorite color');
// } else if (color === 'blue') {
//   alert('That is a cool color but not my favorite.');
// } else {
//   alert('Sorry that is not it. My favorite color is actually red')
// }

// ###### SWITCH CASE EXACT SAME AS IF STATEMENT ABOVE

switch(color){
    case 'red': // is it red (it referring to color)
        alert('How\'d you know? That is my favorite color');
        console.log('it\'s red');
        break;

    case 'blue': // is it blue
        console.log('That is a cool color but not my favorite.');
        break;
    default:
        alert('Sorry that is not it. My favorite color is actually red');
        break;
}

// ARRAYS DEMO FOR POP PUSH


var myArray = [1, 4, 11, 67, 44, 54];
var secondArray = [];
var thirdArray = new Array();

secondArray.push('Josie');
secondArray.push('Belle');

console.log(secondArray); //this will print the two names above in the browser console.
console.log(myArray); //this will print the numbers as is above

var lastItem = myArray.pop(); //this will remove the last index "54" and push to "lastItem" array
console.log(myArray); //this will print my array without the last index "54"
console.log(lastItem) // this will print "54"

myArray.push('mildred');
console.log(myArray);

console.log(myArray.length);

// FOR LOOP DMEO
// run a for loop for as many times as you specify

//for(define a variable; time the loop will run; increment variable){


//} // when the increment variable gets activated

// for(var i = 0; i < myArray.length; i--) // myArray.length is equal to 6
// {
//     // console.log('array index: ' + myArray[i])
// }

// for(var i = 0; i <= myArray.length -1; i++)
// {

// }

// while loop
// while(condition is met)
// {
// do the thing
// modify the condition
// }

var number = 11;

while (number <= 10) {
  console.log(number);
  number++
}
// do..while loop

do {
  console.log(number);
} while (number <= 10)

var answer = prompt('what is your fav color');

number = 0;
while (number <= 10) {
  if (answer === 'red') {
    break;
  }
}

// break - use this keyword to leave a loop without any consequences