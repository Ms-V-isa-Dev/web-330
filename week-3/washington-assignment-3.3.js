/*
============================================
; Title:  Exercise 3.3
; Author: Professor Krasso
; Date:   7 March 2020
; Modified by: Verlee Washington
; Description: The Singleton Pattern
;===========================================
*/

// Formatted header
var header = require('../Washington-header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program
var DatabaseSingleton = (function() {
  var instance;
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }

  return {
    getInstance: function() {
      if (!instance) {
         instance = createInstance();
      }
       return instance;
    }
  }
  })();

  function databaseSingletonTest()
  {
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s ", oracle === postgres);
  }

  // output
  // calling database Singleton test function
  databaseSingletonTest();
  /*
  function databaseInit() {
    var databaseInstance1 = DatabaseSingleton.getInstance();
    var databaseInstance2 = DatabaseSingleton.getInstance();
    console.log("One database instance? " + (databaseInstance1 === databaseInstance2));
  }
  databaseInit();
*/

// end program
