'use strict'

const store = require('../store')

const onShowGameBoardSuccess = () => {
  document.getElementById('gameboard').style.display = 'block'
  document.getElementById('game-status').style.display = 'block'
}

const onResetGameSuccess = () => {
  $('.box').html('')
  $('#message').html(`It's player x's turn!`)
  store.over = false
  store.turn = 0
}

const onTieSuccess = () => {
  $('#message').html('')
  $('#message').html('Game Over! It is a tie!')

  store.over = true
}

const onWinnerSuccess = playerTurn => {
  $('#message').html('')
  $('#message').html(`Game Over! Player ${playerTurn} wins!`)

  store.over = true
}

const onNextTurnSuccess = playerTurn => {
  $('#message').html('')
  $('#message').html(`It's player ${playerTurn}'s turn!`)
}

module.exports = {
  onTieSuccess,
  onWinnerSuccess,
  onNextTurnSuccess,
  onShowGameBoardSuccess,
  onResetGameSuccess
}
