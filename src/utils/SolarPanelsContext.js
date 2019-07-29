import MorePropTypes from './MorePropTypes'
import PropTypes from 'prop-types'
import React, { createContext, useState } from 'react'
import { getTotals } from './data'

export const SolarPanelsContext = createContext({})

export const SolarPanelsContextProvider = props => {
  const { children, data: initialData, totals: initialTotals } = props
  const initialContextData = { data: initialData, totals: initialTotals }
  const [contextData, setContextData] = useState(initialContextData)
  const { data, totals } = contextData

  const setData = data => {
    if (totals.length === 50) totals.shift()
    setContextData({
      data,
      totals: [...totals, getTotals(data)]
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
  data:     PropTypes.array.isRequired,
  totals:   PropTypes.array.isRequired
}
