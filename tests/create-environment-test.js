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
