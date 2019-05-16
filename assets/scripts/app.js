'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // your JS code goes here
  $('#sign-up-btn').on('click', function () {
    $('#sign-in').fadeOut('fast')
    $('#sign-up').delay(150).fadeIn('fast')
  })
  $('#sign-in-btn').on('click', function () {
    $('#sign-up').fadeOut('fast')
    $('#sign-in').delay(150).fadeIn('fast')
  })
  $('#change-password-btn').on('click', function () {
    $('#change-password').fadeIn('fast')
    $('#changePasswordModalTitle').html('Change Password')
  })
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('.box').on('click', gameEvents.onUpdateGame)
  $('#create-games').on('click', gameEvents.onCreateGames)
  $('#get-games').on('click', gameEvents.onGetGames)
})
