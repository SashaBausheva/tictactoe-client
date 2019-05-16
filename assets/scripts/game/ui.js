'use strict'

const store = require('../store')

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

module.exports = {
  onTieSuccess,
  onWinnerSuccess
}
