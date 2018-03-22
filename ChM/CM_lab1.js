"use strict"
const readlineSync = require('readline-sync');

class Matrix {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.matrix = [];
  }
    fillByUser() {
      for (let i = 0; i < this.row; i++) {
        this.matrix[i] = [];
        for (let j = 0; j < this.column; j++) {
          this.matrix[i][j] = readlineSync.question('Enter the ' + (i + 1) + ':' + (j + 1) + ' element ');
        }
      }
    }
    print() {
      for (let i = 0; i < this.row; i++) {
        console.log(this.matrix[i].join(' '));
      }
      console.log('\n');
    }
  }

const matrixOperation = {
  'sum' : function(m1, m2) {
    const bufMatrix = new Matrix(m1.row, m1.column);
    for (let i = 0; i < m1.row; i++) {
      bufMatrix.matrix[i] = [];
      for (let j = 0; j < m1.column; j++) {
        bufMatrix.matrix[i][j] = +m1.matrix[i][j] + +m2.matrix[i][j];
      }
    }
    return bufMatrix;
  },

  'multOnNum' : function(mat, k) {
    const bufMatrix = new Matrix(mat.row, mat.column);
    for (let i = 0; i < mat.row; i++) {
      bufMatrix.matrix[i] = [];
      for (let j = 0; j < mat.column; j++) {
        bufMatrix.matrix[i][j] = mat.matrix[i][j] * k;
      }
    }
    return bufMatrix;
  },

  'transponate' : function (m) {
    const bufMatrix = new Matrix(m.row, m.column)
    for (var i = 0; i < m.row; i++) {
      for (var j = 0; j < m.column; j++) {
        bufMatrix.matrix[i][j] = bufMatrix.matrix[j][i]
      }
    }
    return bufMatrix;
  }
}

//user interface
function user() {
  let index = readlineSync.question();
  if (index == 'sum') {
    const matrix1 = new Matrix(readlineSync.question('Enter the number of rows '), //initial first matrix
    readlineSync.question('Enter the number of columns '));
    matrix1.fillByUser();
    matrix1.print();
    const matrix2 = new Matrix(readlineSync.question('Enter the number of rows '), //initial second matrix
    readlineSync.question('Enter the number of columns '));
    matrix2.fillByUser();
    matrix2.print();
    console.log('Summed matrix is:');                          //summing
    const sumMatrix = matrixOperation.sum(matrix1, matrix2);
    sumMatrix.print();
  } else if (index == 'multiple -n') {
    const matrix1 = new Matrix(readlineSync.question('Enter the number of rows '), //initial first matrix
    readlineSync.question('Enter the number of columns '));
    matrix1.fillByUser();
    matrix1.print();
    const mulOnNum = matrixOperation.multOnNum(matrix1,        // multiplying on number
    readlineSync.question('Enter the number to multiply '));
    console.log('Multiplyed on a number matrix:');
    mulOnNum.print();
  }
  return user();
}

user();
