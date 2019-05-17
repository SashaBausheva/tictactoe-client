'use strict'

const store = require('../store')
const gameLogic = require('./game-logic')

const onFailure = () => {
  $('#message').html('something went wrong!')
}

const onGetGamesSuccess = (gameData) => {
  console.log('this function is working')
  store.games = gameData.games.length
  console.log('number of games' + store.games)
  if (!store.games) {
    $('#game-number-message').fadeIn('fast')
    $('#game-number-message').text(`You haven't played yet! Come on, have some fun!`)
    $('#game-number-message').delay(3000).fadeOut('fast')
  } else if (store.games < 10) {
    $('#game-number-message').fadeIn('fast')
    $('#game-number-message').text(`You've played ${store.games} games. Not nearly enough!`)
    $('#game-number-message').delay(3000).fadeOut('fast')
  } else if (store.games < 50) {
    $('#game-number-message').fadeIn('fast')
    $('#game-number-message').text(`You've played ${store.games} games. Time for an international tic-tac-toe championship!`)
    $('#game-number-message').delay(3000).fadeOut('fast')
  } else {
    $('#game-number-message').fadeIn('fast')
    $('#game-number-message').text(`You've played ${store.games} games. You are insane. Get some sleep. Or a life.`)
    $('#game-number-message').delay(3000).fadeOut('fast')
  }
}

const onCreateGameSuccess = (gameData) => {
  store.turn = 1
  store.gameID = gameData.game.id
  store.cells = gameData.game.cells
  store.player = 'x'
  store.over = gameData.game.over
  document.getElementById('gameboard').style.display = 'block'
  document.getElementById('game-status').style.display = 'block'
  $('.box').empty()
  $('#message').text(`It's ${store.player}'s turn!`)
}

const onResetGameSuccess = () => {
  console.log(store)
  $('.box').html('')
  $('#message').html(`It's player x's turn!`)
  store.over = false
  store.turn = 0
}

const onTieSuccess = () => {
  $('#message').html('Game Over! It is a tie!')
  store.over = true
}

const onUpdateGameSuccess = (playerTurn, cell) => {
  $(cell).text(`${store.player}`)
  gameLogic.gameBoard[store.id] = store.player
  store.cells = gameLogic.gameBoard
  if (gameLogic.winningCombos(gameLogic.gameBoard)) {
  } else if (gameLogic.isBoardFull(store.turn)) {
    onTieSuccess()
  } else if (store.player === 'x') {
    store.player = 'o'
    $('#message').html(`It's ${store.player}'s turn!`)
  } else {
    store.player = 'x'
    $('#message').html(`It's ${store.player}'s turn!`)
  }
}

module.exports = {
  onTieSuccess,
  onUpdateGameSuccess,
  onCreateGameSuccess,
  onResetGameSuccess,
  onGetGamesSuccess,
  onFailure
}
