import * as solarPanelsDataGen from './data/solarPanelsDataGenerator'
import React, { useState } from 'react'
import SolarPanels from './components/SolarPanels/SolarPanels'

const solarPanelsDataConfig = solarPanelsDataGen.generateConfig(30)

function App() {
  const [solarPanelsData] = useState(solarPanelsDataGen.generateData(solarPanelsDataConfig))

  return (
    <div className="solar-farm-dashboard">
      <header>
        <h1>Solar Farm <span>Dashboard</span></h1>
      </header>
      <SolarPanels data={solarPanelsData}/>
    </div>
  )
}

export default App
