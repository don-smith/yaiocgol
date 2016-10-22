const test = require('tape')

const createEnvironment = require('../create-environment')

test('create square environment', (t) => {
  const expected = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]
  const actual = createEnvironment(5, 5)
  t.deepEqual(actual, expected, 'created a 5x5 environment')
  t.end()
})

test('create rectangle environment', (t) => {
  const expected = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]
  const actual = createEnvironment(3, 5)
  t.deepEqual(actual, expected, 'created a 5x3 environment')
  t.end()
})

test('create randomised environment', (t) => {
  const randomised = createEnvironment(5, 8, true)
  const foundSome = randomised.some(row => row.some(item => !!item))
  t.true(foundSome, 'random alive cells were created')
  t.end()
})
