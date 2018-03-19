const WIDTH = 22;
const HEIGHT = 60;
const LIFECELL = '*';
const NOLIFECELL = ' ';

var myBoard = createBoard();
fillBoard(myBoard);
printBoard(myBoard);
setInterval(function () {
  nextGeneration(myBoard);
  printBoard(myBoard);
}, 500);

function createBoard() {
  var board = [];
  for (var i = 0; i < WIDTH; i++) {
    board[i] = [];
  }

  return board;
}

function printBoard(board) {
  console.clear();
  for (var i = 0; i < WIDTH; i++) {
    var row = board[i].join('');
    console.log(row);
  }
}

function fillBoard(board) {
  for (var i = 0; i < WIDTH; i++) {
    for (var j = 0; j < HEIGHT; j++) {
      if (Math.random() > 0.5) {
        board[i][j] = LIFECELL;
      } else {
        board[i][j] = NOLIFECELL;
      }
    }
  }
}

function nextGeneration(board) {
  var newBoard = [];
  for (var i = 0; i < WIDTH; i++) {
    newBoard[i] = [];
    for (var j = 0; j < HEIGHT; j++) {
      if (mustLive(board, i, j)) {
        newBoard[i][j] = LIFECELL;
      } else {
        newBoard[i][j] = NOLIFECELL;
      }
    }
  }

  for (var m = 0; m < WIDTH; m++) {
    for (var n = 0; n < HEIGHT; n++) {
      board[m][n] = newBoard[m][n];
    }
  }
}

function mustLive(board, i, j) {
  if (board[i][j] == LIFECELL) {
    if (numberOfNeighbours(board, i, j) == 2 || numberOfNeighbours(board, i, j) == 3) {
      return true;
    }

    return false;
  } else {
    if (numberOfNeighbours(board, i, j) == 3) {
      return true;
    }

    return false;
  }
}

function numberOfNeighbours(board, i, j) {
  var number = 0;
  for (var k = -1; k < 2; k++) {
    for (var m = -1; m < 2; m++) {
      var p = i + k;
      var n = j + m;
      if ((p < 0 || n < 0) || (n == HEIGHT || p == WIDTH)) {
        continue;
      }

      if (k == 0 && m == 0) continue;
      if (board[p][n] == LIFECELL) {
        number++;
      }
    }
  }

  return number;
}
