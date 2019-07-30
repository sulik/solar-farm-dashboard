import * as solarPanelsDataGen from './data/solarPanelsDataGenerator'
import Configuration from './components/Configuration/Configuration'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import SolarPanels from './components/SolarPanels/SolarPanels'
import Totals from './components/Totals/Totals'
import useInterval from './utils/useInterval'
import Weather from './components/Weather/Weather'
import weatherForecastMock from './data/weatherForecastMock'
import { ConfigContext } from './utils/ConfigContext'
import { getWeatherData, prepareWeatherData } from './utils/data'
import { SolarPanelsContext } from './utils/SolarPanelsContext'
import { WeatherContext } from './utils/WeatherContext'

function App({ solarPanelsDataConfig }) {
  const { setData: setSolarPanelsData } = useContext(SolarPanelsContext)
  const { setData: setWeatherData } = useContext(WeatherContext)
  const { config, setWeatherApiEnabled } = useContext(ConfigContext)

  useInterval(() => {
    setSolarPanelsData(solarPanelsDataGen.generateData(solarPanelsDataConfig))
  }, config.solarPanelsInterval)

  useInterval(async() => {
    const weatherData = config.weatherApiEnabled ? await getWeatherData() : weatherForecastMock
    if (weatherData) setWeatherData(prepareWeatherData(weatherData.entries))
    else setWeatherApiEnabled(false)
  }, config.weatherInterval)

  return (
    <div className="solar-farm-dashboard">
      <header>
        <h1>Solar Farm <span>Dashboard</span></h1>
        <Configuration/>
      </header>
      <div className="overview">
        <Totals/>
        <Weather
          chartName="Diff Down Solar Flux"
          dataKey="visDiffDownSolarFlux"
          name="Visible Diffuse Down Solar Flux"
          unit="W/m²"/>
        <Weather
          chartName="Cloud Coverage"
          dataKey="avgTotalCloudCoverage"
          name="Average Total Cloud Coverage"
          unit="%"/>
      </div>
      <SolarPanels/>
    </div>
  )
}

App.propTypes = {
  solarPanelsDataConfig: PropTypes.array.isRequired
}

export default App
