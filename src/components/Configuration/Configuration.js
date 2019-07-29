import React, { useState } from 'react'
import { ReactComponent as Icon } from '../../assets/icon-config.svg'

function Configuration() {
  const [open, setOpen] = useState(false)

  const handleOnClick = () => {
    setOpen(!open)
  }

  return (
    <div className="configuration">
      <button onClick={handleOnClick}>
        <Icon/>
        Configuration
      </button>
    </div>
  )
}

export default Configuration
