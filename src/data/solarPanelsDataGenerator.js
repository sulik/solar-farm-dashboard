import moment from 'moment'

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

export function generateData(config, definedTime) {
  return config.map(({ id, voltage, wattage }) => ({
    'id':      id,
    'time':    definedTime || moment().format('HH:mm:ss MMM DD'),
    'voltage': Math.round(getNumberBetween(voltage[0], voltage[1]) * 10) / 10,
    'wattage': Math.floor(getNumberBetween(wattage[0], wattage[1]))
  }))
}

export function generateHistoryData(config, length) {
  return Array.from({ length: length }).map((item, i) => {
    const time = moment().subtract(i * 10, 'seconds').format('HH:mm:ss MMM DD')
    return generateData(config, time)
  })
}

function getNumberBetween(min, max) {
  return Math.random() * (max - min + 1) + min
}
