import moment from 'moment'

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
  const energy = Math.floor((power * 60))

  return { time, power, energy }
}
