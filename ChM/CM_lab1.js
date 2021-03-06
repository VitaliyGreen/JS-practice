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

  'sub' : function(m1, m2) {
    const bufMatrix = new Matrix(m1.row, m1.column);
    for (let i = 0; i < m1.row; i++) {
      bufMatrix.matrix[i] = [];
      for (let j = 0; j < m1.column; j++) {
        bufMatrix.matrix[i][j] = +m1.matrix[i][j] - +m2.matrix[i][j];
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
    const bufMatrix = new Matrix(m.column, m.row);
    for (let i = 0; i < bufMatrix.row; i++) {
      bufMatrix.matrix[i] = [];
      for (let j = 0; j < bufMatrix.column; j++) {
        bufMatrix.matrix[i][j] = m.matrix[j][i];
      }
    }
    return bufMatrix;
  },

  'multiply' : function(m1, m2) {
    const bufMatrix = new Matrix(m1.row, m2.column);
    for (let i = 0; i < m1.row; i++) {
      bufMatrix.matrix[i] = [];
    }
    for (let k = 0; k < m1.row; k++) {
      for ( let i = 0; i < m2.column; i++) {
        let temp = 0;
        for (let j = 0; j < m1.column; j++) {
          temp += m1.matrix[i][j] * m2.matrix[j][k];
        }
        bufMatrix.matrix[i][k] = temp;
      }
    }
    return bufMatrix;
  },

  'determinate' : function(m) {
    const bufMatrix = new Matrix(m.row, m.column);
    let denom = 1, exchanges = 0;
    for (var i = 0; i < m.row; ++i) {
      bufMatrix.matrix[i] = [];
      for (var j = 0; j < m.row; ++j) {
        bufMatrix.matrix[i][j] = m.matrix[i][j];
      }
     }
     bufMatrix.print();
    for (var i = 0; i < m.row-1; ++i) {
      var maxN = i, maxValue = Math.abs(bufMatrix.matrix[i][i]);
      for (var j = i+1; j < m.row; ++j) {
        var value = Math.abs(bufMatrix.matrix[j][i]);
        if (value > maxValue) {
          maxN = j;
          maxValue = value;
        }
      }
      if (maxN > i) {
        var temp = bufMatrix.matrix[i];
        bufMatrix.matrix[i] = bufMatrix.matrix[maxN];
        bufMatrix.matrix[maxN] = temp;
        ++exchanges;
      } else {
        if (maxValue == 0) return maxValue;
      }
      var value1 = bufMatrix.matrix[i][i];
      for (var j = i+1; j < m.row; ++j) {
        var value2 = bufMatrix.matrix[j][i];
        bufMatrix.matrix[j][i] = 0;
        for (var k = i+1; k < m.row; ++k) {
          bufMatrix.matrix[j][k] = (bufMatrix.matrix[j][k]*value1-bufMatrix.matrix[i][k]*value2)/denom;
        }
      }
      denom = value1;
    }
    if (exchanges%2) {
      return -bufMatrix.matrix[m.row - 1][m.row - 1];
    } else {
      return bufMatrix.matrix[m.row - 1][m.row - 1];
    }
  }
}

const commandList = 'List of commands :\n sum\n sub\n multiple -m -n\n transponate';

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
    if (matrix1.row != matrix2.row || matrix1.column != matrix2.column) {    //whether matrixes are the same
      console.log('Uncorrect input\n');
    } else {
      console.log('Summed matrix is:');                          //summing
      const sumMatrix = matrixOperation.sum(matrix1, matrix2);
      sumMatrix.print();
    }
  } else if (index == 'multiple -n') {
    const matrix1 = new Matrix(readlineSync.question('Enter the number of rows '), //initial first matrix
    readlineSync.question('Enter the number of columns '));
    matrix1.fillByUser();
    matrix1.print();
    const mulOnNum = matrixOperation.multOnNum(matrix1,        // multiplying on number
    readlineSync.question('Enter the number to multiply '));
    console.log('Multiplyed on a number matrix is:');
    mulOnNum.print();
  } else if (index == 'transponate') {
    const matrix1 = new Matrix(readlineSync.question('Enter the number of rows '), //initial first matrix
    readlineSync.question('Enter the number of columns '));
    matrix1.fillByUser();
    matrix1.print();
    const transpMatrix = matrixOperation.transponate(matrix1);      //transponating
    console.log('Transponated matrix is:');
    transpMatrix.print();
  } else if (index == 'multiple -m') {
    const matrix1 = new Matrix(readlineSync.question('Enter the number of rows '), //initial first matrix
    readlineSync.question('Enter the number of columns '));
    matrix1.fillByUser();
    matrix1.print();
    const matrix2 = new Matrix(readlineSync.question('Enter the number of rows '), //initial second matrix
    readlineSync.question('Enter the number of columns '));
    matrix2.fillByUser();
    matrix2.print();
    if (matrix1.row == matrix2.column && matrix1.column == matrix2.row) {    //whether matrixes are the same
      console.log('Multiplyed matrix is:');
      const multedMatrix = matrixOperation.multiply(matrix1, matrix2);
      multedMatrix.print();
    } else {
      console.log('Uncorrect input\n');
    }
  } else if (index == 'det') {
    const matrix1 = new Matrix(readlineSync.question('Enter the number of rows '), //initial first matrix
    readlineSync.question('Enter the number of columns '));
    matrix1.fillByUser();
    matrix1.print();
    const det = matrixOperation.determinate(matrix1);
    console.log('Determinate is: ' + det);
  } else if (index == 'q') {
    process.exit(-1);
  } else if ('?') {
    console.log(commandList);
  } else {
    console.log('Uncorrect command');
    console.log(commandList);
  }
  return user();
}

user();
