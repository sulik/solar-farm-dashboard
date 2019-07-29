import Chart from '../common/Chart/Chart'
import React, { useContext, useMemo } from 'react'
import WeatherApiBadge from '../common/WeatherApiBadge/WeatherApiBadge'
import { WeatherContext } from '../../utils/WeatherContext'

function SolarActivity() {
  const { data } = useContext(WeatherContext)
  const validData = useMemo(() => data.filter(item => item.visDiffDownSolarFlux), [data])
  const currentValue = validData.length !== 0 && validData[0].visDiffDownSolarFlux

  return (
    <div className="solar-activity pane has-badge">
      <WeatherApiBadge/>
      <Chart
        data={validData}
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
