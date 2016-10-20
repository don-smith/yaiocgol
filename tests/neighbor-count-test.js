const test = require('tape')

const testCells = require('./sample-neighborhoods')
const getLivingNeighborCount = require('../get-living-neighbor-count')

test('get count of living neighbors', (t) => {
  const expected = 3
  const actual = getLivingNeighborCount(testCells.aliveWith3Neighbors)
  t.equal(actual, expected, 'found 3 neighbors')
  t.end()
})
