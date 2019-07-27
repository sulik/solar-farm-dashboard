import './scss/index.scss'
import * as solarPanelsDataGen from './data/solarPanelsDataGenerator'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import weatherForecastMock from './data/weatherForecastMock'
import { SolarPanelsContextProvider } from './utils/SolarPanelsContext'
import { WeatherContextProvider } from './utils/WeatherContext'

const solarPanelsDataConfig = solarPanelsDataGen.generateConfig(30)

function Index() {
  const solarPanelsInitialData = solarPanelsDataGen.generateData(solarPanelsDataConfig)
  const weatherInitialData = weatherForecastMock.entries

  return (
    <SolarPanelsContextProvider data={solarPanelsInitialData}>
      <WeatherContextProvider data={weatherInitialData}>
        <App solarPanelsDataConfig={solarPanelsDataConfig}/>
      </WeatherContextProvider>
    </SolarPanelsContextProvider>
  )
}

ReactDOM.render(<Index/>, document.getElementById('root'))
