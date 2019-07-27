import MorePropTypes from './MorePropTypes'
import PropTypes from 'prop-types'
import React, { createContext, useState } from 'react'
import { getTotals } from './data'

export const SolarPanelsContext = createContext({})

export const SolarPanelsContextProvider = props => {
  const { children, data: initialData } = props
  const [contextData, setContextData] = useState({ data: initialData, totals: getTotals(initialData) })
  const { data, totals } = contextData

  const setData = data => {
    setContextData({
      data,
      totals: getTotals(data)
    })
  }

  return (
    <SolarPanelsContext.Provider value={{ data, totals, setData }}>
      {children}
    </SolarPanelsContext.Provider>
  )
}

SolarPanelsContextProvider.propTypes = {
  children: MorePropTypes.children.isRequired,
  data:     PropTypes.array.isRequired
}
