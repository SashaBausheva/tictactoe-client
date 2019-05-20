'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#sign-in-message').html('Signed up successfully!')
  $('#sign-in-message').fadeIn('slow')
  document.getElementById('sign-up').style.display = 'none'
  document.getElementById('sign-in').style.display = 'block'
  setTimeout(() => $('#sign-in-message').fadeOut('slow'), 3000)
  $('form').trigger('reset')
}

const onSignUpFailure = responseData => {
  $('#sign-in-message').html('Failed to sign up')
  $('#sign-in-message').fadeIn('slow')
  $('form').trigger('reset')
  setTimeout(() => $('#sign-in-message').fadeOut('slow'), 3000)
}

const onSignInSuccess = responseData => {
  $('#sign-in-message').html('Signed in successfully!')
  $('#sign-in-message').fadeIn('slow')
  document.getElementById('game-buttons').style.display = 'block'
  document.getElementById('sign-in').style.display = 'none'
  document.getElementById('sign-in-btn').style.display = 'none'
  document.getElementById('sign-up-btn').style.display = 'none'
  document.getElementById('change-password-btn').style.display = 'inline'
  document.getElementById('sign-out-btn').style.display = 'inline'
  setTimeout(() => $('#sign-in-message').fadeOut('slow'), 3000)
  $('form').trigger('reset')

  store.user = responseData.user
}

const onSignInFailure = responseData => {
  $('#sign-in-message').html('Failed to sign in')
  $('#sign-in-message').fadeIn('fast')
  setTimeout(() => $('#sign-in-message').fadeOut('fast'), 3000)
  $('form').trigger('reset')
}

const onChangePasswordSuccess = responseData => {
  document.getElementById('changePasswordModalTitle').style.display = 'none'
  $('#changePasswordModalTitle').fadeIn('fast')
  $('#changePasswordModalTitle').html('Password changed successfully!')
  setTimeout(() => $('#changePasswordModalTitle').text('Change Again?'), 3000)
  $('form').trigger('reset')
}

const onChangePasswordFailure = responseData => {
  document.getElementById('changePasswordModalTitle').style.display = 'none'
  $('#changePasswordModalTitle').fadeIn('fast')
  $('#changePasswordModalTitle').html('Failed to change password. Try again?')
  setTimeout(() => $('#changePasswordModalTitle').text('Change Password'), 3000)
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#sign-in-message').html('Signed out successfully!')
  $('#sign-in-message').fadeIn('slow')
  setTimeout(() => $('#sign-in-message').fadeOut('slow'), 2000)
  document.getElementById('message').style.display = 'none'
  document.getElementById('game-status').style.display = 'none'
  document.getElementById('game-buttons').style.display = 'none'
  document.getElementById('sign-in').style.display = 'block'
  document.getElementById('sign-in-btn').style.display = 'inline'
  document.getElementById('sign-up-btn').style.display = 'inline'
  document.getElementById('change-password-btn').style.display = 'none'
  document.getElementById('sign-out-btn').style.display = 'none'
  document.getElementById('gameboard').style.display = 'none'
  document.getElementById('show-game-div').style.display = 'none'
  document.getElementById('game-id-message').style.display = 'none'
  $('form').trigger('reset')
}

const onSignOutFailure = () => {
  $('#sign-in-message').html('Failed to sign out')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
