import React, { useContext } from 'react'
import { ConfigContext } from '../../../utils/ConfigContext'

function WeatherApiBadge() {
  const { config } = useContext(ConfigContext)
  const { weatherApiEnabled } = config
  const className = weatherApiEnabled ? 'green' : 'red'
  const text = weatherApiEnabled ? 'Weather API' : 'Weather Mock'

  return (
    <div className={'badge ' + className}>
      {text}
    </div>
  )
}

export default WeatherApiBadge
