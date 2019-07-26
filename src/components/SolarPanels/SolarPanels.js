import PropTypes from 'prop-types'
import React from 'react'

function SolarPanels({ data }) {
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

SolarPanels.propTypes = {
  data: PropTypes.array.isRequired
}

export default SolarPanels
