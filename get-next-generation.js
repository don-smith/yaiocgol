const createEnvironment = require('./create-environment')
const getNextState = require('./get-next-state')

module.exports = getNextGeneration

function getNextGeneration (environment) {
  const nextGeneration = createEnvironment(environment.length)
  environment.forEach((row, r) => {
    row.forEach((cell, c) => {
      nextGeneration[r][c] = getNextState(r, c, environment)
    })
  })
  return nextGeneration
}
