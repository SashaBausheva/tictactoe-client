'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('h3').html('')
  $('#message').html('Signed up successfully! <br /> <img src="https://media.giphy.com/media/RyXVu4ZW454IM/giphy.gif" width="200px">')
}

const onSignUpFailure = responseData => {
  $('h3').html('')
  $('#message').html('Failed to sign up')
}

const onSignInSuccess = responseData => {
  $('h3').html('')
  $('#message').html('Signed in successfully! <br /> <img src="https://media.giphy.com/media/RyXVu4ZW454IM/giphy.gif" width="200px">')

  store.user = responseData.user
}

const onSignInFailure = responseData => {
  $('h3').html('')
  $('#message').html('Failed to sign in')
}

const onChangePasswordSuccess = responseData => {
  $('#change-pw-message').html('<br />Password changed successfully!')
}

const onChangePasswordFailure = responseData => {
  $('#change-pw-message').html('<br />Failed!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
