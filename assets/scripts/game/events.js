'use strict'

// const store = require('../store')
const gameLogic = require('./game-logic')
// const getFormFields = require('../../../lib/get-form-fields')

let playerTurn

const onUpdateGame = event => {
  event.preventDefault()
  const id = event.target.id
  if (playerTurn === 'x') {
    playerTurn = 'o'
  } else {
    playerTurn = 'x'
  }
  document.getElementById(id).innerHTML = playerTurn
  gameLogic.gameBoard[id] = playerTurn
  gameLogic.winningCombos()
}

module.exports = {
  onUpdateGame
}
