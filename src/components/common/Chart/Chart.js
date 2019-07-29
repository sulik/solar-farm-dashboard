import PropTypes from 'prop-types'
import React from 'react'
import { XAxis, LineChart, Tooltip, Line, ResponsiveContainer } from 'recharts'

function Chart({ data, dataKey, name }) {
  return (
    <ResponsiveContainer
      height={50}
      width="100%">
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
          type="monotone"/>
      </LineChart>
    </ResponsiveContainer>
  )
}

Chart.propTypes = {
  data:     PropTypes.array.isRequired,
  dataKey:  PropTypes.string.isRequired,
  name:     PropTypes.string
}

export default Chart
