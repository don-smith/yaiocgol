const test = require('tape')

const createEnvironment = require('../create-environment')

test('create environment', (t) => {
  const expected = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]
  const actual = createEnvironment(5)
  t.deepEqual(actual, expected, 'created a 5x5 environment')
  t.end()
})

test('create randomised environment', (t) => {
  const randomised = createEnvironment(5, true)
  const foundSome = randomised.some(row => row.some(item => !!item))
  t.true(foundSome, 'random alive cells were created')
  t.end()
})
