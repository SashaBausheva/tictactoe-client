'use strict'

const store = require('../store')
const gameLogic = require('./game-logic')

const onFailure = () => {
  $('#message').html('something went wrong!')
}

const onCreateGameSuccess = (gameData) => {
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
  $('#message').html('')
  $('#message').html('Game Over! It is a tie!')

  store.over = true
}

const onWinnerSuccess = playerTurn => {
  $('#message').html('')
  $('#message').html(`Game Over! Player ${playerTurn} wins!`)

  store.over = true
}

const onUpdateGameSuccess = (playerTurn, cell) => {
  if (store.over) {
    $('#message').html(`Sorry, the game is over!`)
    return
  }
  if (store.cells[store.id]) {
    $('#message').html('Sorry, this cell is taken!')
  } else {
    $(cell).text(`${store.player}`)
    gameLogic.gameBoard[store.id] = store.player
    store.cells = gameLogic.gameBoard
    if (gameLogic.winningCombos(gameLogic.gameBoard)) {
    } else if (gameLogic.isBoardFull(store.turn)) {
      onTieSuccess()
      // api.STUFF HERE
      //   .then HERE
      //   .catch HERE
    } else if (store.player === 'x') {
      store.player = 'o'
      $('#message').html(`It's ${store.player}'s turn!`)
    } else {
      store.player = 'x'
      $('#message').html(`It's ${store.player}'s turn!`)
    }
  }
}

module.exports = {
  onTieSuccess,
  onWinnerSuccess,
  onUpdateGameSuccess,
  onCreateGameSuccess,
  onResetGameSuccess,
  onFailure
}
