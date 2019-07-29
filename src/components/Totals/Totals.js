import Chart from '../../utils/Chart'
import React, { useContext } from 'react'
import { SolarPanelsContext } from '../../utils/SolarPanelsContext'

function Totals() {
  const { totals } = useContext(SolarPanelsContext)
  const { power, energy } = totals[totals.length - 1]

  return (
    <div className="totals pane">
      <h2>Total</h2>
      <Chart
        data={totals}
        dataKey="energy"
        height="100%"
        name="Energy"
        unit="kWh"/>
      <div className="details">
        <div>
          <div className="value">
            {power} kW
          </div>
          <div>Total Power</div>
        </div>
        <div>
          <div className="value">
            {energy} MWh
          </div>
          <div>Total Energy</div>
        </div>
      </div>
    </div>
  )
}

export default Totals
