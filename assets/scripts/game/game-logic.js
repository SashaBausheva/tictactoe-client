'use-strict'

const store = require('../store')

// gameboard = ['', '', '', '', '', '', '', '', ''] 9 elements

// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]

// Winning combinations:

// [0, 1, 2] - row 1
// [3, 4, 5] - row 2
// [6, 7, 8] - row 3
// [0, 3, 6] - col 1
// [1, 4, 7] - col 2
// [2, 5, 8] - col 3
// [0, 4, 8] - diag 1
// [2, 4, 6] - diag 2

const gameBoard = ['', '', '', '', '', '', '', '', '']
store.turn = 0

// const isBoardFull = turnNumber => {
//   if (turnNumber === 9) {
//     store.over = true
//     return true
//   } else {
//     store.over = false
//     return false
//   }
// }

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
    $('#message').html(`Game Over: Player ${store.player} wins!`)
    return true
    // Whoever hits one of the listed winning combos on this turn wins
  } else if (store.turn === 9) {
    document.getElementById('message').style.display = 'none'
    $('#message').fadeIn('fast')
    $('#message').html(`Game Over: It's a tie!`)
    store.over = true
    return true
    // Valid turns: 0-8. Turn 9 means the board is full, so it's a tie
  } else {
    store.over = false
    return false
    // Winning combos haven't been hit, and the board isn't full yet
  }
}

module.exports = {
  gameBoard,
  winningCombos
}
