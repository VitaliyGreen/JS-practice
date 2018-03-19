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

var calculator = new Calculator;
calculator.read();
console.log('The sum is ' + calculator.sum());
console.log('The multiple is ' + calculator.mul());
