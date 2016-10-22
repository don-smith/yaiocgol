// * create a random environment
// * display environment
//
// * create new environment
//
// * determine number of living neighbors
// add new state of cell to new environment
// * repeat for next cell
//
// * display environment

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
