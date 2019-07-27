import PropTypes from 'prop-types'
import React from 'react'
import { getTotals } from '../../utils/data'

function Totals({ data }) {
  const { power, energy } = getTotals(data)

  return (
    <div className="totals">
      <h2>Total</h2>
      <div className="details">
        <div>
          <div className="value">
            {power} kW
          </div>
          <div>Total Power</div>
        </div>
        <div>
          <div className="value">
            {energy} kWh
          </div>
          <div>Total Energy</div>
        </div>
      </div>
    </div>
  )
}

Totals.propTypes = {
  data: PropTypes.array.isRequired
}

export default Totals
