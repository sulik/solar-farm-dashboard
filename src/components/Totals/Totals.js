import React, { useContext } from 'react'
import { SolarPanelsContext } from '../../utils/SolarPanelsContext'

function Totals() {
  const { totals } = useContext(SolarPanelsContext)
  const { power, energy } = totals

  return (
    <div className="totals pane">
      <h2>Total</h2>
      <div className="details">
        <div>
          <div className="value">
            {power} kW
          </div>
          <div>Total Power</div>
        </div>
        <div>
          <div className="value">
            {energy} kWh
          </div>
          <div>Total Energy</div>
        </div>
      </div>
    </div>
  )
}

export default Totals
