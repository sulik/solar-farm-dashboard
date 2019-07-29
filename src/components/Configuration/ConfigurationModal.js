import React, { useContext } from 'react'
import { ConfigContext } from '../../utils/ConfigContext'

function ConfigurationModal({ open }) {
  const { config, setSolarPanelsInterval, setWeatherInterval, setWeatherApiEnabled } = useContext(ConfigContext)

  const handleOnSolarPanelsIntervalChange = event => {
    setSolarPanelsInterval(parseInt(event.target.value))
  }
  const handleOnWeatherIntervalChange = event => {
    setWeatherInterval(parseInt(event.target.value))
  }
  const handleOnWeatherApiEnabledChange = async(event) => {
    setWeatherApiEnabled(event.target.checked)
  }

  return open && (
    <div className="modal">
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
          Use real weather API
        </label>
      </div>
    </div>
  )
}

export default ConfigurationModal
