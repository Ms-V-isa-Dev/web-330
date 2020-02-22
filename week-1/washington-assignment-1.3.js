/*
============================================
; Title:  Exercise 1.3
; Author: Verlee Washington
; Date:   21 February 2020
; Modified by:
; Description: Refresher on function class and
; object literals
;===========================================
*/

// Formatted header
var header = require('../Washington-header.js');

// Start program
console.log("-- DISPLAYING CELL PHONE DETAILS --");

function CellPhone(cellP){
  this.cellP = cellP;
  this.Manufacturer = "Royole";
  this.Model = "FlexPai";
  this.Color = "Ocean Blue";
  this.Price = "$1,200.00";

  this.getPrice = function(){
    return "Price: " + this.Price;
  };

  this.getModel = function(){
    return "Model: " + this.Model;
  };

  this.getDetails = function(){
    return "Manufacturer: " + this.Manufacturer + "\n" + this.getModel() + "\n"
     + "Color: " + this.Color + "\n" + this.getPrice();
  };
}
var cellP = new CellPhone(5);

// Output
console.log(cellP.getDetails());

// End program
