import React, { useContext } from 'react'
import weatherForecastMock from '../../data/weatherForecastMock'
import { animated, useTransition, config as springConfig } from 'react-spring'
import { ConfigContext } from '../../utils/ConfigContext'
import { getWeatherData, prepareWeatherData } from '../../utils/data'
import { WeatherContext } from '../../utils/WeatherContext'

function ConfigurationModal({ open }) {
  const { config, setSolarPanelsInterval, setWeatherInterval, setWeatherApiEnabled } = useContext(ConfigContext)
  const { setData: setWeatherData } = useContext(WeatherContext)
  const transitions = useTransition(open, null, {
    from:   { opacity: 0, y: -4 },
    enter:  { opacity: 1, y: 0 },
    leave:  { opacity: 0, y: -4 },
    config: springConfig.stiff
  })
  const translateY = y => `translate3d(0,${y}%,0)`

  const handleOnSolarPanelsIntervalChange = event => {
    const value = parseInt(event.target.value)
    if (value) setSolarPanelsInterval(value)
  }

  const handleOnWeatherIntervalChange = event => {
    const value = parseInt(event.target.value)
    if (value) setWeatherInterval(value)
  }

  const handleOnWeatherApiEnabledChange = async(event) => {
    setWeatherApiEnabled(event.target.checked)
    const weatherData = event.target.checked ? await getWeatherData() : weatherForecastMock
    if (weatherData) setWeatherData(prepareWeatherData(weatherData.entries))
    else setWeatherApiEnabled(false)
  }

  return transitions.map(({ item, key, props: { opacity, y } }) => item && (
    <animated.div
      className="modal"
      key={key}
      style={{ opacity, transform: y.interpolate(translateY) }}>
      <div className="option">
        <label htmlFor="solar-panels-interval">
          Solar panels update interval
        </label>
        <input
          id="solar-panels-interval"
          onChange={handleOnSolarPanelsIntervalChange}
          type="text"
          value={config.solarPanelsInterval}/>
      </div>
      <div className="option">
        <label htmlFor="weather-interval">
          Weather forecast update interval
        </label>
        <input
          id="weather-interval"
          onChange={handleOnWeatherIntervalChange}
          type="text"
          value={config.weatherInterval}/>
      </div>
      <div className="option checkbox">
        <input
          checked={config.weatherApiEnabled}
          id="weather-api-enabled"
          onChange={handleOnWeatherApiEnabledChange}
          type="checkbox"/>
        <label htmlFor="weather-api-enabled">
          Enable real weather API
        </label>
      </div>
    </animated.div>
  ))
}

export default ConfigurationModal
