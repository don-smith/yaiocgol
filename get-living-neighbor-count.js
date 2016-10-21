module.exports = (rowId, colId, environment) => {
  const neighborCoords = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1], // eslint-disable-line no-multi-spaces
    [1, -1],  [1, 0],  [1, 1]  // eslint-disable-line no-multi-spaces
  ]

  const livingArray = neighborCoords.map(coord => {
    const row = environment[rowId + coord[0]]
    return row && row[colId + coord[1]]
  })

  return livingArray.reduce((acc, next) => acc + (next ? 1 : 0), 0)
}
