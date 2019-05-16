'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#sign-in-message').html('Signed up successfully! <br /> <img src="https://media.giphy.com/media/RyXVu4ZW454IM/giphy.gif" width="200px">')
  document.getElementById('sign-up').style.display = 'none'
  document.getElementById('sign-in').style.display = 'block'
  document.getElementById('sign-up-btn').style.display = 'none'
  setTimeout(() => $('#sign-in-message').text(''), 2000)
}

const onSignUpFailure = responseData => {
  $('#sign-in-message').html('Failed to sign up')
}

const onSignInSuccess = responseData => {
  $('#sign-in-message').html('Signed in successfully! <br /> <img src="https://media.giphy.com/media/RyXVu4ZW454IM/giphy.gif" width="200px">')
  document.getElementById('game-buttons').style.display = 'block'
  document.getElementById('sign-in').style.display = 'none'
  document.getElementById('sign-in-btn').style.display = 'none'
  document.getElementById('sign-up-btn').style.display = 'none'
  document.getElementById('change-password-btn').style.display = 'inline'
  document.getElementById('sign-out-btn').style.display = 'inline'
  setTimeout(() => $('#sign-in-message').text(''), 2000)

  store.user = responseData.user
}

const onSignInFailure = responseData => {
  $('#sign-in-message').html('Failed to sign in')
  setTimeout(() => $('#sign-in-message').text(''), 2000)
}

const onChangePasswordSuccess = responseData => {
  $('#changePasswordModalTitle').html('Password changed successfully!')
  setTimeout(() => $('#changePasswordModalTitle').text('Change Again?'), 2000)
}

const onChangePasswordFailure = responseData => {
  $('#changePasswordModalTitle').html('Failed!')
  setTimeout(() => $('#changePasswordModalTitle').text('Change Password'), 2000)
}

const onSignOutSuccess = () => {
  $('#sign-in-message').html('Signed out successfully! <br /> <img src="https://media.giphy.com/media/RyXVu4ZW454IM/giphy.gif" width="200px">')
  document.getElementById('game-buttons').style.display = 'none'
  document.getElementById('sign-in').style.display = 'block'
  document.getElementById('sign-in-btn').style.display = 'inline'
  document.getElementById('sign-up-btn').style.display = 'inline'
  document.getElementById('change-password-btn').style.display = 'none'
  document.getElementById('sign-out-btn').style.display = 'none'
  document.getElementById('gameboard').style.display = 'none'
}

const onSignOutFailure = () => {
  $('#sign-in-message').html('Failed to sign out')
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
