const test = require('tape')

const getNextState = require('../get-next-state')
const sampleNeighborhoods = require('./sample-neighborhoods')

test('get next state: under 2: dies', (t) => {
  const expected = 0
  const actual = getNextState(1, 1, sampleNeighborhoods.aliveWith1Neighbor)
  t.equal(actual, expected, 'dead')
  t.end()
})

test('get next state: alive with 2: alive', (t) => {
  const expected = 1
  const actual = getNextState(1, 1, sampleNeighborhoods.aliveWith2Neighbors)
  t.equal(actual, expected, 'alive')
  t.end()
})

test('get next state: alive with 5: dead', (t) => {
  const expected = 0
  const actual = getNextState(1, 1, sampleNeighborhoods.aliveWith5Neighbors)
  t.equal(actual, expected, 'dead')
  t.end()
})

test('get next state: dead with 3: alive', (t) => {
  const expected = 1
  const actual = getNextState(1, 1, sampleNeighborhoods.deadWith3Neighbors)
  t.equal(actual, expected, 'alive')
  t.end()
})
