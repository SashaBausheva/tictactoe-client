'use strict'

// const store = require('../store')
const gameLogic = require('./game-logic')
const store = require('../store')
const ui = require('./ui')
const api = require('./api')
// const getFormFields = require('../../../lib/get-form-fields')

document.getElementById('gameboard').style.display = 'none'
document.getElementById('game-status').style.display = 'none'
document.getElementById('game-buttons').style.display = 'none'

const onCreateGames = event => {
  event.preventDefault()
  gameLogic.gameBoard = ['', '', '', '', '', '', '', '', '']
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.Failure)
  // store.player is undefined here
}

const onUpdateGame = event => {
  event.preventDefault()
  const id = event.target.id
  const cell = event.target
  store.id = id
  if (!gameLogic.gameBoard[id]) {}
  api.updateGame(store.id, store.player, store.over)
    .then(ui.onUpdateGameSuccess(store.id, cell))
    .catch(ui.onFailure)
  store.turn++
  console.log(store.cells)
  // console.log(store.over)
}

module.exports = {
  onUpdateGame,
  onCreateGames
}
