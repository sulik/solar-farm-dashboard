import Chart from '../common/Chart/Chart'
import PropTypes from 'prop-types'
import React, { useContext, useMemo } from 'react'
import WeatherApiBadge from './WeatherApiBadge'
import { WeatherContext } from '../../utils/WeatherContext'

function Weather({ chartName, dataKey, name, unit }) {
  const { data } = useContext(WeatherContext)
  const validData = useMemo(() => data.filter(item => item[dataKey]), [data, dataKey])
  const currentValue = validData.length !== 0 && validData[0][dataKey]

  return (
    <div className="weather pane has-badge">
      <WeatherApiBadge/>
      <Chart
        data={validData}
        dataKey={dataKey}
        name={chartName}
        unit={unit}/>
      <div>
        <div className="value">
          {currentValue} {unit}
        </div>
        <div>{name}</div>
      </div>
    </div>
  )
}

Weather.propTypes = {
  chartName: PropTypes.string.isRequired,
  dataKey:   PropTypes.string.isRequired,
  name:      PropTypes.string.isRequired,
  unit:      PropTypes.string.isRequired
}

export default Weather
