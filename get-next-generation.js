const createEnvironment = require('./create-environment')
const getNextState = require('./get-next-state')

module.exports = getNextGeneration

function getNextGeneration (environment) {
  return environment.map((row, r) => {
    return row.map((cell, c) => {
      return getNextState(r, c, environment)
    })
  })
}
