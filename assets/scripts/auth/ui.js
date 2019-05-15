'use strict'

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
}

const onSignInFailure = responseData => {
  $('h3').html('')
  $('#message').html('Failed to sign in')
}

const onChangePasswordSuccess = responseData => {
  $('h3').html('')
  $('#message').html('Successfully changed password! <br /> <img src="https://media.giphy.com/media/RyXVu4ZW454IM/giphy.gif" width="200px">')
}

const onChangePasswordFailure = responseData => {
  $('h3').html('')
  $('#message').html('Failed to change password')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
