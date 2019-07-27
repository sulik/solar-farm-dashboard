import React, { useContext } from 'react'
import { SolarPanelsContext } from '../../utils/SolarPanelsContext'

function SolarPanels() {
  const { data } = useContext(SolarPanelsContext)

  return (
    <div className="solar-panels">
      {data.map(panel => (
        <div className="solar-panel" key={panel.id}>
          <div className="title">{panel.id}</div>
          <div className="details">
            <span>{panel.voltage.toFixed(1)} V</span>
            <span>{panel.wattage} W</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SolarPanels
