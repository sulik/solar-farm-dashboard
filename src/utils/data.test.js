import solarPanelsDataMock from '../data/solarPanelsDataMock'
import weatherForecastMock from '../data/weatherForecastMock'
import { apiConfig } from '../config'
import { getTotals, getWeatherData, prepareWeatherData } from './data'

describe('prepareWeatherData', () => {
  it('returns data with correct props and data types', () => {
    const data = prepareWeatherData(weatherForecastMock.entries)

    data.forEach(item => {
      expect(item).toEqual({
        avgTotalCloudCoverage: expect.any(Number),
        visDiffDownSolarFlux:  expect.any(Number),
        time:                  expect.any(String)
      })
    })
  })
})

describe('getTotals', () => {
  it('returns correct total values', () => {
    const totals = getTotals(solarPanelsDataMock)
    const time = solarPanelsDataMock[0].time

    expect(totals.time).toBe(time)
    expect(totals.energy).toBe(749)
    expect(totals.power).toBe(12498)
  })
})

describe('getWeatherData', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      new Promise((resolve) => {
        resolve({ json: () => ({ ...weatherForecastMock }) })
      })
    )
  })

  afterEach(() => {
    global.fetch.mockRestore()
  })

  it('fetches data from weather forecast api', async() => {
    const response = await getWeatherData()

    expect(response).toEqual(weatherForecastMock)
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch.mock.calls[0][0])
      .toEqual(`${apiConfig.weatherApiUrl}?apikey=${apiConfig.weatherApiKey}&count=18&lat=49.5&lon=-50.5&var=av_swsfcdown%2Cav_ttl_cld`)
  })
})
