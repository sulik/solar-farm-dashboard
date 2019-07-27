import './scss/index.scss'
import * as solarPanelsDataGen from './data/solarPanelsDataGenerator'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { SolarPanelsContextProvider } from './utils/SolarPanelsContext'

const solarPanelsDataConfig = solarPanelsDataGen.generateConfig(30)

function Index() {
  const solarPanelsInitialData = solarPanelsDataGen.generateData(solarPanelsDataConfig)

  return (
    <SolarPanelsContextProvider data={solarPanelsInitialData}>
      <App solarPanelsDataConfig={solarPanelsDataConfig}/>
    </SolarPanelsContextProvider>
  )
}

ReactDOM.render(<Index/>, document.getElementById('root'))
