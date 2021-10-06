/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var board = new Board({'n': n});
  var length = n;
  board.togglePiece(0, 0);
  for (var i = 1; i < length; i++) {
    board.togglePiece(i, i);
  }
  var returnArray = Object.values(board.attributes);
  returnArray.pop();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(Object.values(board.attributes)));
  return returnArray;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({'n': n});

  var solutionCount = 0;
  var length = n;
  var rookCounter = 0;

  var findSolution = function(row) {

    if (row === n && rookCounter === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < length; i++) {
      board.togglePiece(row, i);
      rookCounter++;
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(row, i);
        rookCounter--;
      } else {
        findSolution(row + 1);
        board.togglePiece(row, i);
        rookCounter--;
      }
    }
  };


  findSolution(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({'n': n});
  var solutionCount = 0;
  var length = n;
  var queenCounter = 0;
  var returnArray = 0;

  var findSolution = function(row) {
    if (n === 1) {
      return [1];
    }

    if (row === n && queenCounter === n) {
      returnArray = Object.values(board.attributes);
      returnArray.pop();
      solutionCount++;
      console.log('Single solution for ' + n + ' queens:', JSON.stringify(Object.values(board.attributes)));
      return returnArray;
    }

    for (var i = 0; i < length; i++) {
      board.togglePiece(row, i);
      queenCounter++;
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(row, i);
        queenCounter--;
      } else {
        return findSolution(row + 1);
        board.togglePiece(row, i);
        queenCounter--;
      }
    }
  };
  var solution = findSolution(0);
  return solution;

};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({'n': n});

  var solutionCount = 0;
  var length = n;
  var queenCounter = 0;

  var findSolution = function(row) {

    if (row === n && queenCounter === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < length; i++) {
      board.togglePiece(row, i);
      queenCounter++;
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(row, i);
        queenCounter--;
      } else {
        findSolution(row + 1);
        board.togglePiece(row, i);
        queenCounter--;
      }
    }
  };


  findSolution(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


