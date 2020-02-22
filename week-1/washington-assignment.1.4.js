/*
============================================
; Title:  Exercise 1.4
; Author: Verlee Washington
; Date:   21 February 2020
; Modified by:
; Description: Duck Typing known as interfaces
;===========================================
*/

// Formatted header
var header = require('../Washington-header.js');

// Start program
function Car(model){
  this.Model = model;
}
Car.prototype.start = function() {
  console.log("Car added to the racetrack!");
 };

function Truck(model, year){
  this.Model = model;
  this.Year = year;
}
Truck.prototype.start = function() {
  console.log("Truck added to the racetrack!");
 };

function Jeep(model, year, color){
  this.Model = model;
  this.Year = year;
  this.Color = color;
}
Jeep.prototype.start = function() {
  console.log("Jeep added to the racetrack!");
 };

var racetrack = [];

var car = new Car("Camery, Toyota");
var truck = new Truck("Silverado, Chevrolet");
var jeep = new Jeep("Wrangler Sport, Jeep");

function driveIt(vehicle){
  vehicle.start();
  racetrack.push(vehicle);
}

driveIt(car);
driveIt(truck);
driveIt(jeep);

// Output
console.log("\n" + "-- The following vehicles have been "
+ "added to the racetrack --")
for (var i = 0; i < racetrack.length; i++){
  console.log(racetrack[i].constructor.name + ": " + racetrack[i].Model);
}

// End Program
