module.exports = neighborhood => {
  const neighborCoords = [
    [0, 0], [0, 1], [0, 2],
    [1, 0],         [1, 2], // eslint-disable-line no-multi-spaces
    [2, 0], [2, 1], [2, 2]
  ]

  return neighborCoords.map(coord => !!neighborhood[coord[0]][coord[1]])
    .reduce((acc, next) => acc + (next ? 1 : 0), 0)
}
