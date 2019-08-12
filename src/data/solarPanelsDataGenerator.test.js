import moment from 'moment'
import { generateConfig, generateData, getNumberBetween } from './solarPanelsDataGenerator'

describe('getNumberBetween', () => {
  it('returns number between min and max accordingly', () => {
    let number = getNumberBetween(1, 1000)
    expect(number).toBeGreaterThanOrEqual(1)
    expect(number).toBeLessThan(1001)

    number = getNumberBetween(-1000, 0)
    expect(number).toBeGreaterThanOrEqual(-1000)
    expect(number).toBeLessThan(1)
  })

  it('returns NaN if min or max is undefined', () => {
    let number = getNumberBetween(1)
    expect(number).toBeNaN()

    number = getNumberBetween(undefined, 1000)
    expect(number).toBeNaN()
  })
})

describe('generateConfig', () => {
  it('returns config with correct length', () => {
    let config = generateConfig(10)
    expect(config).toHaveLength(10)

    config = generateConfig(-10)
    expect(config).toHaveLength(0)
  })

  it('returns config with correct props and data types', () => {
    const config = generateConfig(10)

    config.forEach(item => (
      expect(item).toEqual({
        id:      expect.any(String),
        voltage: expect.any(Array),
        wattage: expect.any(Array)
      })
    ))
  })
})

describe('generateData', () => {
  it('returns data with correct props and data types', () => {
    const config = generateConfig(10)
    const data = generateData(config)

    data.forEach(solarPanel => {
      expect(solarPanel).toEqual({
        id:      expect.any(String),
        time:    expect.any(String),
        voltage: expect.any(Number),
        wattage: expect.any(Number)
      })
    })
  })

  it('returns data with defined time if defined', () => {
    const config = generateConfig(10)
    const time = moment().format('HH:mm:ss MMM DD')
    const data = generateData(config, time)

    data.forEach(solarPanel => (
      expect(solarPanel).toEqual({
        id:      expect.any(String),
        time:    time,
        voltage: expect.any(Number),
        wattage: expect.any(Number)
      })
    ))
  })
})
