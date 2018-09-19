// BOOLEAN 

var myBool = false;

var nonStrict = 1 == '1'; //instead lets use strict euqls, below
var strict = 1 == '1'; //false because one in an integer and the other a string
var strict = 1 === 1; //true because same data types

// if (condition) {
//   condition is not defined
// } //do somthing

var myNumber = false;

var bar = 10;
var foo = 5;
var result = foo > bar;

if(result) {
  console.log('this is true!'); //will print perfectly fine
}