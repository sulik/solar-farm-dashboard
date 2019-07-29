import moment from 'moment'
import qs from 'query-string'
import { apiConfig } from '../config'

export function prepareWeatherData(data) {
  return data.map(item => ({
    avgTotalCloudCoverage: Math.round(item.data.av_ttl_cld * 10000) / 100,
    visDiffDownSolarFlux:  Math.floor(item.data.av_swsfcdown),
    time:                  moment(item.axes.time).format('HH:mm MMM DD')
  }))
}

export function getTotals(data) {
  const time = data[0].time
  const power = Math.floor(
    data.map(item => item.wattage).reduce((total, currentValue) => total + currentValue) / 1000
  )
  const energy = Math.floor((power * 60) / 1000)

  return { time, power, energy }
}

export async function getWeatherData() {
  const queryString = qs.stringify({
    apikey: apiConfig.weatherApiKey,
    count:  18,
    lat:    49.5,
    lon:    -50.5,
    var:    'av_swsfcdown,av_ttl_cld'
  })
  const url = `${apiConfig.weatherApiUrl}?${queryString}`

  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error)
      alert(error)
    })
}
