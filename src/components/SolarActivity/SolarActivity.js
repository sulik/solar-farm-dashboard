import React, { useContext } from 'react'
import { WeatherContext } from '../../utils/WeatherContext'

function SolarActivity() {
  const { data } = useContext(WeatherContext)
  const currentValue = data.length !== 0 && data[0].visDiffDownSolarFlux

  return (
    <div className="solar-activity pane">
      <div>
        <div className="value">
          {currentValue} W / m<sup>2</sup>
        </div>
        <div>Visible Diffuse Down Solar Flux</div>
      </div>
    </div>
  )
}

export default SolarActivity
