"use strict"
const readlineSync = require('readline-sync');

function Calculator() {
  this.read = function () {
    this.a = readlineSync.question('Enter the first number \n');
    this.b = readlineSync.question('Enter the second number \n')
  };

  this.sum = function () {
    return +this.a + +this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

function Accumulator(startingValue) {
  this.value = +startingValue;

  this.read = function () {
    this.value += +readlineSync.question('Enter number to sum ');
  };
}

var accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
