import * as solarPanelsDataGen from './data/solarPanelsDataGenerator'
import Dashboard from './Dashboard'
import React from 'react'
import weatherForecastMock from './data/weatherForecastMock'
import { appConfig } from './config'
import { ConfigContextProvider } from './utils/ConfigContext'
import { getTotals, prepareWeatherData } from './utils/data'
import { SolarPanelsContextProvider } from './utils/SolarPanelsContext'
import { WeatherContextProvider } from './utils/WeatherContext'

const solarPanelsDataConfig = solarPanelsDataGen.generateConfig(30)

function App() {
  const solarPanelsInitialData = solarPanelsDataGen.generateData(solarPanelsDataConfig)
  const solarPanelsHistoryData = solarPanelsDataGen.generateHistoryData(solarPanelsDataConfig, 50)
  const solarPanelsInitialTotals = solarPanelsHistoryData.map(item => getTotals(item))
  const weatherInitialData = prepareWeatherData(weatherForecastMock.entries)

  return (
    <ConfigContextProvider config={appConfig}>
      <SolarPanelsContextProvider
        data={solarPanelsInitialData}
        totals={solarPanelsInitialTotals}>
        <WeatherContextProvider data={weatherInitialData}>
          <Dashboard solarPanelsDataConfig={solarPanelsDataConfig}/>
        </WeatherContextProvider>
      </SolarPanelsContextProvider>
    </ConfigContextProvider>
  )
}

export default App
