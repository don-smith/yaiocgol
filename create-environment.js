module.exports = createEnvironment

// Recursion FTW !D

function createEnvironment (size, randomise = false) {
  return createRows(size, size, randomise)
}

function createRows (size, count, randomise, rows) {
  rows = rows || []
  if (count === 0) return rows
  rows.push(createRow(size, randomise))
  return createRows(size, --count, randomise, rows)
}

function createRow (count, randomise, row) {
  row = row || []
  if (count === 0) return row
  row.push(randomise ? createRandom() : 0)
  return createRow(--count, randomise, row)
}

function createRandom () {
  return Math.floor(Math.random() * 2)
}
