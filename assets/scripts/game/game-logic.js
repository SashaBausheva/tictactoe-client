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
store.turn = 0

const isBoardFull = turnNumber => {
  if (turnNumber === 9) {
    store.over = true
    return true
  } else {
    store.over = false
    return false
  }
}
const winningCombos = gameBoard => {
  if ((gameBoard[0] && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) ||
  (gameBoard[3] && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) ||
  (gameBoard[6] && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) ||
  (gameBoard[0] && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) ||
  (gameBoard[1] && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) ||
  (gameBoard[2] && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) ||
  (gameBoard[0] && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) ||
  (gameBoard[2] && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6])) {
    store.over = true
    console.log('over' + store.over)
    document.getElementById('message').style.display = 'none'
    $('#message').fadeIn('fast')
    $('#message').html(`Game over! Amazing player ${store.player} wins!`)
    return true
  } else if (store.turn === 9) {
    document.getElementById('message').style.display = 'none'
    $('#message').fadeIn('fast')
    $('#message').html(`iiiit's a tie!`)
    store.over = true
    return true
  } else {
    store.over = false
    console.log('game is not over')
  }
}

module.exports = {
  gameBoard,
  winningCombos,
  isBoardFull
}
