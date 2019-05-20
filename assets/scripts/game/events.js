'use strict'

// const store = require('../store')
const gameLogic = require('./game-logic')
const store = require('../store')
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

// First, hide the elements that shouldn't show on the page when first loaded
document.getElementById('gameboard').style.display = 'none'
document.getElementById('game-status').style.display = 'none'
document.getElementById('game-buttons').style.display = 'none'
document.getElementById('message').style.display = 'none'
document.getElementById('show-game-div').style.display = 'none'

const onCreateGames = event => {
  event.preventDefault()
  gameLogic.gameBoard = ['', '', '', '', '', '', '', '', ''] // empty the board
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.Failure)
  // API retrieves new game object via POST
  // It is passed to ui.CreateGameSuccess which stores parts of it in store
  // Stored parts can now be used in onUpdateGame on next turn
}

const onUpdateGame = event => {
  event.preventDefault()
  // get ID of the div cell where the player has clicked
  store.id = event.target.id
  // cell is the div itself. It will be passed to api to ui later
  const cell = event.target
  // If the cell with the div's ID is already full but it's not game over yet
  if (store.cells[store.id] && !store.over) {
    document.getElementById('message').style.display = 'none'
    $('#message').fadeIn('fast')
    $('#message').html('Sorry, this cell is taken!')
  // If the game isn't over yet (and the cell is NOT taken)
  } else if (!store.over) {
    api.updateGame(store.id, store.player, store.over) // The 3 values API requires
      .then(ui.onUpdateGameSuccess(store.id, cell))
      .catch(ui.onFailure)
    store.turn++ // This turn is over, switching to next turn
  } else {
    document.getElementById('message').style.display = 'none'
    $('#message').fadeIn('fast')
    $('#message').html(`Sorry, the game's over!`)
  }
}

// index: get all games
const onGetGames = event => {
  event.preventDefault()
  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onFailure)
}

// show one game requested by ID
const onShowGame = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.showGame(formData)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

module.exports = {
  onUpdateGame,
  onCreateGames,
  onGetGames,
  onShowGame
}
