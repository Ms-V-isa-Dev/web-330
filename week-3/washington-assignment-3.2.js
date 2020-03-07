/*
============================================
; Title:  Exercise 3.2
; Author: Professor Krasso
; Date:   7 March 2020
; Modified by: Verlee Washington
; Description: The Factory Pattern
;===========================================
*/

// Formatted header
var header = require('../Washington-header.js');

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}


// adding extended function class for Oracle with defaulted values
function Oracle(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "o-secr3t";
  this.server = properties.server || "localhost:5000";
  this.version = properties.version || "8.2g"
}

// adding extended function class for Informix with defaulted values
function Informix(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "in-secr3t";
  this.server = properties.server || "localhost:3000";
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    }
    if (properties.databaseType === "MySql"){
        this.databaseClass = MySql;
    }

    // updating factory create database method to include new objects
    if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    }
    if (properties.databaseType === "Informix") {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

// add database factory object and call create database function
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "admin",
  password: "Oadmin"
});


// add database factory object and call create database function
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "default",
  password: "Inadmin"
});

// I ran out of time playing with this trying to format it.
// output
console.log(oracle);
console.log(informix);

// end program
