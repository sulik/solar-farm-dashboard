import Chart from '../common/Chart/Chart'
import React, { useContext } from 'react'
import { WeatherContext } from '../../utils/WeatherContext'

function SolarActivity() {
  const { data } = useContext(WeatherContext)
  const currentValue = data.length !== 0 && data[0].visDiffDownSolarFlux

  return (
    <div className="solar-activity pane">
      <Chart
        data={data}
        dataKey="visDiffDownSolarFlux"
        name="Diff Down Solar Flux"
        unit="W/m²"/>
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
