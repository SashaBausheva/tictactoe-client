'use strict'

const store = require('../store')
const gameLogic = require('./game-logic')

const onFailure = () => {
  $('#message').fadeIn('fast')
  $('#message').html('Sorry, something went wrong!')
}

const onShowFailure = () => {
  $('#past-game-message').fadeIn('fast')
  $('#past-game-message').html(`This game doesn't exist or it's not yours to look at!`)
  $('#past-game-message').delay(3000).fadeOut('fast')
}

const onGetGamesSuccess = (gameData) => {
  store.games = gameData.games.length
  if (!store.games) {
    $('#game-number-message').fadeIn('fast')
    $('#game-number-message').text(`You haven't played yet! Come on, have some fun!`)
    $('#game-number-message').delay(4000).fadeOut('fast')
  } else if (store.games === 1) {
    $('#game-number-message').fadeIn('fast')
    $('#game-number-message').text(`You've only played one game! You need more practice!`)
    $('#game-number-message').delay(4000).fadeOut('fast')
  } else if (store.games < 10) {
    $('#game-number-message').fadeIn('fast')
    $('#game-number-message').text(`You've played ${store.games} games. Not nearly enough!`)
    $('#game-number-message').delay(4000).fadeOut('fast')
  } else if (store.games < 50) {
    $('#game-number-message').fadeIn('fast')
    $('#game-number-message').text(`You've played ${store.games} games. Time for an international tic-tac-toe tournament!`)
    $('#game-number-message').delay(4000).fadeOut('fast')
  } else {
    $('#game-number-message').fadeIn('fast')
    $('#game-number-message').text(`You've played ${store.games} games. Quite frankly, I'm concerned for your sanity. Get some sleep. Or a life.`)
    $('#game-number-message').delay(4000).fadeOut('fast')
  }
}

const onCreateGameSuccess = (gameData) => {
  $('#sign-in-message').html('')
  store.turn = 1
  store.gameID = gameData.game.id
  store.cells = gameData.game.cells
  store.player = 'x'
  store.over = gameData.game.over
  $('#gameboard').fadeIn('fast')
  $('#game-status').fadeIn('fast')
  $('.box').empty()
  document.getElementById('message').style.display = 'none'
  $('#message').text(`It's ${store.player}'s turn!`)
  $('#message').fadeIn('fast')
  $('#game-id-message').text(`Your current game ID: ${store.gameID}`)
  $('#game-id-message').fadeIn('fast')
}

const onUpdateGameSuccess = (playerTurn, cell) => {
  $(cell).text(`${store.player}`)
  gameLogic.gameBoard[store.id] = store.player
  store.cells = gameLogic.gameBoard
  if (gameLogic.winningCombos(gameLogic.gameBoard)) {
  } else if (store.player === 'x') {
    store.player = 'o'
    document.getElementById('message').style.display = 'none'
    $('#message').fadeIn('fast')
    $('#message').html(`It's ${store.player}'s turn!`)
  } else {
    store.player = 'x'
    document.getElementById('message').style.display = 'none'
    $('#message').fadeIn('fast')
    $('#message').html(`It's ${store.player}'s turn!`)
  }
}

// show past game in the small gameboard
const onShowSuccess = responseData => {
  const gameInfo = responseData.game.cells
  let cellIndex = 0
  gameInfo.forEach(function (element) {
    const cellId = 'small-' + cellIndex
    const cell = document.getElementById(cellId)
    $(cell).html(element)
    cellIndex++
  })
}

module.exports = {
  onUpdateGameSuccess,
  onCreateGameSuccess,
  onGetGamesSuccess,
  onFailure,
  onShowSuccess,
  onShowFailure
}
