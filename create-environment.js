module.exports = createEnvironment

// Recursion FTW !D

function createEnvironment (size) {
  return createRows(size, size)
}

function createRows (size, count, rows) {
  rows = rows || []
  if (count === 0) return rows
  rows.push(createRow(size))
  return createRows(size, --count, rows)
}

function createRow (count, previousItems) {
  previousItems = previousItems || []
  if (count === 0) return previousItems
  previousItems.push(0)
  return createRow(--count, previousItems)
}
