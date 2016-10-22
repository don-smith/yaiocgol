const createEnvironment = require('./create-environment')
const displayEnvironment = require('./display-environment')
const getNextGeneration = require('./get-next-generation')

const random = true
const rows = process.argv[2] || 30
const cols = process.argv[3] || 40
let environment = createEnvironment(rows, cols, random)

displayEnvironment(environment)

setInterval(() => {
  environment = getNextGeneration(environment)
  displayEnvironment(environment)
}, 60)
