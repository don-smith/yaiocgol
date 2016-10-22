const getLivingNeighborCount = require('./get-living-neighbor-count')

module.exports = getNextState

function getNextState (row, col, environment) {
  const neighborCount = getLivingNeighborCount(row, col, environment)
  return getState(environment[row][col], neighborCount)
}

function getState (alive, neighborCount) {
  if (alive && neighborCount > 1 && neighborCount < 4) return 1
  if (!alive && neighborCount === 3) return 1
  return 0
}
