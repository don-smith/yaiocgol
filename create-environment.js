module.exports = createEnvironment

// Recursion FTW !D

function createEnvironment (numRows, numCols, randomise = false) {
  return createRows(numRows, numCols, numRows, randomise)
}

function createRows (numRows, numCols, progress, randomise, rows) {
  rows = rows || []
  if (progress === 0) return rows
  rows.push(createRow(numCols, randomise))
  return createRows(numRows, numCols, --progress, randomise, rows)
}

function createRow (progress, randomise, row) {
  row = row || []
  if (progress === 0) return row
  row.push(randomise ? createRandom() : 0)
  return createRow(--progress, randomise, row)
}

function createRandom () {
  return Math.floor(Math.random() * 2)
}
