'use-strict'

const store = require('../store')

// gameboard = ['', '', '', '', '', '', '', '', ''] 9 elements total

// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]

// Winning combinations:

// row1 = [0, 1, 2]
// row2 = [3, 4, 5]
// row3 = [6, 7, 8]
// column1 = [0, 3, 6]
// column2 = [1, 4, 7]
// column3 = [2, 5, 8]
// diag1 = [0, 4, 8]
// diag2 = [2, 4, 6]

const gameBoard = ['', '', '', '', '', '', '', '', '']

const winningCombos = gameboard => {
  if ((gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') ||
  (gameBoard[3] === gameBoard[4] === gameBoard[5]) ||
  (gameBoard[6] === gameBoard[7] === gameBoard[8]) ||
  (gameBoard[0] === gameBoard[3] === gameBoard[6]) ||
  (gameBoard[1] === gameBoard[4] === gameBoard[7]) ||
  (gameBoard[2] === gameBoard[5] === gameBoard[8]) ||
  (gameBoard[0] === gameBoard[4] === gameBoard[8]) ||
  (gameBoard[2] === gameBoard[4] === gameBoard[6])) {
    console.log('we have a winner!')
  }
}

module.exports = {
  gameBoard,
  winningCombos
}
