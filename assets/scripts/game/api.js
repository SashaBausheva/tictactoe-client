'use strict'

const config = require('../config')
const store = require('../store')

// const update = gameID => {
//   const id = formData.example.id
//   return $.ajax({
//     url: config.apiUrl + '/examples/' + id,
//     method: 'PATCH',
//     data: {
//       "game": {
//         "cell": {
//           "index": 0,
//           "value": "x"
//         },
//         "over": false
//       }
// },
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const createGame = () => {
  // console.log('create game is invoked')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

module.exports = {
  createGame
}
