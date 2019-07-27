import React, { useContext } from 'react'
import { WeatherContext } from '../../utils/WeatherContext'

function CloudCoverage() {
  const { data } = useContext(WeatherContext)
  const currentValue = data.length !== 0 && data[0].data['av_ttl_cld']

  return (
    <div className="cloud-coverage pane">
      <div>
        <div className="value">
          {currentValue} %
        </div>
        <div>Average Total Cloud Coverage</div>
      </div>
    </div>
  )
}

export default CloudCoverage
