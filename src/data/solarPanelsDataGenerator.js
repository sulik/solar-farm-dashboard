export function generateConfig(length) {
  const makeId = () => Math.random().toString(36).substring(2, 7).toUpperCase()
  const makeRange = (min, max, step) => {
    const start = parseInt(getNumberBetween(min, max))
    return [start, start + step]
  }

  return Array.from({ length: length }).map(() => ({
    id:      makeId(),
    voltage: makeRange(2800, 6000, 500),
    wattage: makeRange(100000, 600000, 200000)
  }))
}

export function generateData(config) {
  return config.map(({ id, voltage, wattage }) => ({
    'id':      id,
    'voltage': parseFloat(getNumberBetween(voltage[0], voltage[1]).toFixed(1)),
    'wattage': parseInt(getNumberBetween(wattage[0], wattage[1]))
  }))
}

function getNumberBetween(min, max) {
  return Math.random() * (max - min + 1) + min
}
