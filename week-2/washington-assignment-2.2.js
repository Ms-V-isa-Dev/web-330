/*
============================================
; Title:  Exercise 2.2
; Author: Professor Krasso
; Date:   28 February 2020
; Modified by: Verlee Washington
; Description: Creating prototype patterns based
; on prototypal inheritance.
;===========================================
*/

// Formatted header
var header = require('../Washington-header.js');

/*
 Expected output:
 The person's full name is 'John Doe.'
 The person's age is '43.'
*/

// start program
var person = {
  getAge: function () {
    console.log("The person's full name is '" + age.fullName + ".'" + "\n"
    + "The person's age is '" + this.age + ".'");
  }
};

var age = Object.create(person, {
  "age": {
  "value": "43",
  enumerable: true
  },
  "fullName": {
    "value": "John Doe"
  }
});
age.getAge();
// end program
