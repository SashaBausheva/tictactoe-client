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

const onCreateGames = event => {
  api.createGame()
  event.preventDefault()
  if (!playerTurn) {
    ui.onShowGameBoardSuccess()
    ui.onNextTurnSuccess('x')
  } else {
    playerTurn = 'x'
    gameLogic.gameBoard = ['', '', '', '', '', '', '', '', '']
    ui.onResetGameSuccess() // after this we have playerTurn=x and turn=0
  }
  /// api stuff there
}

const onUpdateGame = event => {
  event.preventDefault()
  if (store.turn === 0) {
    ui.onNextTurnSuccess('o')
  } else {
    console.log(playerTurn)
    ui.onNextTurnSuccess(playerTurn)
  }
  if (store.over) {
    $('#message').html('Sorry, this game is over!')
    return
  }
  const id = event.target.id
  if (isCellFree(id)) {
    if (playerTurn === 'x' && store.turn !== 0) {
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
    playerTurn = 'x'
    // api.STUFF HERE
    //   .then HERE
    //   .catch HERE
  } else if (gameLogic.isBoardFull(store.turn)) {
    ui.onTieSuccess()
    playerTurn = 'x'
    // api.STUFF HERE
    //   .then HERE
    //   .catch HERE
  }
}

module.exports = {
  onUpdateGame,
  onCreateGames
}
