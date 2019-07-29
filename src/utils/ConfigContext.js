import MorePropTypes from './MorePropTypes'
import PropTypes from 'prop-types'
import React, { createContext, useState } from 'react'

export const ConfigContext = createContext({})

export const ConfigContextProvider = props => {
  const { children, config: initialConfig } = props
  const [solarPanelsInterval, setSolarPanelsInterval] = useState(initialConfig.solarPanelsInterval)
  const [weatherInterval, setWeatherInterval] = useState(initialConfig.weatherInterval)
  const [weatherApiEnabled, setWeatherApiEnabled] = useState(initialConfig.weatherApiEnabled)
  const config = { solarPanelsInterval, weatherInterval, weatherApiEnabled }

  return (
    <ConfigContext.Provider value={{ config, setSolarPanelsInterval, setWeatherInterval, setWeatherApiEnabled }}>
      {children}
    </ConfigContext.Provider>
  )
}

ConfigContextProvider.propTypes = {
  children: MorePropTypes.children.isRequired,
  config:   PropTypes.object.isRequired
}
