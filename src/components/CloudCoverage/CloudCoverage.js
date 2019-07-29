import Chart from '../common/Chart/Chart'
import React, { useContext, useMemo } from 'react'
import { WeatherContext } from '../../utils/WeatherContext'

function CloudCoverage() {
  const { data } = useContext(WeatherContext)
  const validData = useMemo(() => data.filter(item => item.avgTotalCloudCoverage), [data])
  const currentValue = validData.length !== 0 && validData[0].avgTotalCloudCoverage

  return (
    <div className="cloud-coverage pane">
      <Chart
        data={validData}
        dataKey="avgTotalCloudCoverage"
        name="Cloud Coverage"
        unit="%"/>
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
