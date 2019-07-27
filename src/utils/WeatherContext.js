import MorePropTypes from '../utils/MorePropTypes'
import PropTypes from 'prop-types'
import React, { createContext, useState } from 'react'

export const WeatherContext = createContext({})

export const WeatherContextProvider = ({ data: initialData, children }) => {
  const [data, setData] = useState(initialData)

  return (
    <WeatherContext.Provider value={{ data, setData }}>
      {children}
    </WeatherContext.Provider>
  )
}

WeatherContextProvider.propTypes = {
  children: MorePropTypes.children.isRequired,
  data:     PropTypes.array.isRequired
}
