import Chart from '../common/Chart/Chart'
import React, { useContext } from 'react'
import { WeatherContext } from '../../utils/WeatherContext'

function CloudCoverage() {
  const { data } = useContext(WeatherContext)
  const currentValue = data.length !== 0 && data[0].avgTotalCloudCoverage

  return (
    <div className="cloud-coverage pane">
      <Chart
        data={data}
        dataKey="avgTotalCloudCoverage"
        name="Cloud Coverage"/>
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
