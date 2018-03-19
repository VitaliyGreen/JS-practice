"use strict"
const readlineSync = require('readline-sync');

function Calculator() {

  var operations = {
    '-': function (a, b) {
      return +a - +b;
    },
    '+': function (a, b) {
      return +a + +b;
    }
  }

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

  this.calculate = function (str) {
    const split = str.split(' ');
    const a = split[0];
    const op = split[1];
    const b = split[2];

    if (isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return operations[op](a, b);
  };

  this.addMethod = function (name, func) {
    operations[name] = func;
  }
}

function Accumulator(startingValue) {
  this.value = +startingValue;

  this.read = function () {
    this.value += +readlineSync.question('Enter number to sum ');
  };
}

var calculator = new Calculator;
calculator.addMethod('*', function (a, b) {
  return +a * +b;
});
calculator.addMethod('**', function (a, b) {
  return Math.pow(+a, +b);
});
console.log(calculator.calculate('2 * 3'));
console.log(calculator.calculate('2 ** 3'));
