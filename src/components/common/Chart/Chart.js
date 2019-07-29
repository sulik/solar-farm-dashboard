import PropTypes from 'prop-types'
import React from 'react'
import { XAxis, LineChart, Tooltip, Line, ResponsiveContainer } from 'recharts'

function Chart({ data, dataKey, height = 50, name, unit, width = '100%' }) {
  return (
    <ResponsiveContainer
      height={height}
      width={width}>
      <LineChart
        data={data}>
        <XAxis
          dataKey="time"
          hide/>
        <Tooltip
          labelStyle={{ color: '#000' }}/>
        <Line
          dataKey={dataKey}
          dot={false}
          name={name}
          stroke="#25b6e0"
          type="monotone"
          unit={unit}/>
      </LineChart>
    </ResponsiveContainer>
  )
}

Chart.propTypes = {
  data:     PropTypes.array.isRequired,
  dataKey:  PropTypes.string.isRequired,
  height:   PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name:     PropTypes.string,
  unit:     PropTypes.string,
  width:    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Chart
