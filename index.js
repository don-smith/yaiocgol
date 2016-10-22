const createEnvironment = require('./create-environment')
const displayEnvironment = require('./display-environment')
const getNextGeneration = require('./get-next-generation')

const random = true
let environment = createEnvironment(40, random)

displayEnvironment(environment)

setInterval(() => {
  environment = getNextGeneration(environment)
  displayEnvironment(environment)
}, 125)
