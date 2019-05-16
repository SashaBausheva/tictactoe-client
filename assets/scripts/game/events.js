'use strict'

// const store = require('../store')
const gameLogic = require('./game-logic')
const store = require('../store')
const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields')

let playerTurn

const isCellFree = id => {
  let free
  if (document.getElementById(id).innerHTML === '') {
    free = true
  } else {
    free = false
  }
  return free
}

const onUpdateGame = event => {
  event.preventDefault()
  if (store.over) {
    $('#message').html('Sorry, this game is over!')
    return
  }
  const id = event.target.id
  if (isCellFree(id)) {
    if (playerTurn === 'x') {
      playerTurn = 'o'
    } else {
      playerTurn = 'x'
    }
  } else {
    console.log('cant do that')
    return
  }
  store.turn++
  // console.log('new store turn' + store.turn)
  document.getElementById(id).innerHTML = playerTurn
  gameLogic.gameBoard[id] = playerTurn
  if (gameLogic.winningCombos(gameLogic.gameBoard)) {
    ui.onWinnerSuccess(playerTurn)
    // api.STUFF HERE
    //   .then HERE
    //   .catch HERE
  } else if (gameLogic.isBoardFull(store.turn)) {
    ui.onTieSuccess()
    // api.STUFF HERE
    //   .then HERE
    //   .catch HERE
  }
}

module.exports = {
  onUpdateGame
}
