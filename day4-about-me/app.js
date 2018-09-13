'use strict';
// JOHNS DEMO FROM LECTURE

function squareNum(num) { //this function is recognized globally
  var squared = num * num; //this variable is only recognizable locally
  return squared
}

var numbers = [2, 7 ,9 , 15, 156];

for(var i = 0; i < numbers.length; i++) {
  let square = squareNum(numbers[i])
  console.log(i, numbers[i]); //this will print the index and the squared value
  // return squareNum(i);
}

//out here we can not communicate or call the variable "squared"
// the function is a reference to functionality of the local function above to use globally like we're doing below
var one = squareNum(7);
console.log(one);
var two = squareNum(2);
console.log(two);

