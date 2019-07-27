import * as solarPanelsDataGen from './data/solarPanelsDataGenerator'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import SolarPanels from './components/SolarPanels/SolarPanels'
import Totals from './components/Totals/Totals'
import useInterval from './utils/useInterval'
import { SolarPanelsContext } from './utils/SolarPanelsContext'

function App({ solarPanelsDataConfig }) {
  const { setData: setSolarPanelsData } = useContext(SolarPanelsContext)

  useInterval(() => {
    setSolarPanelsData(solarPanelsDataGen.generateData(solarPanelsDataConfig))
  }, 10 * 1000)

  return (
    <div className="solar-farm-dashboard">
      <header>
        <h1>Solar Farm <span>Dashboard</span></h1>
      </header>
      <Totals/>
      <SolarPanels/>
    </div>
  )
}

App.propTypes = {
  solarPanelsDataConfig: PropTypes.array.isRequired
}

export default App
