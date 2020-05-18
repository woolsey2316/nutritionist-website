import React from "react"
import Style from "../scss/marker.module.scss"

const Marker = props => {
  const { color, name } = props
  return (
    <div>
      <div
        className={Style.pin}
        style={{ backgroundColor: color, cursor: "pointer" }}
        title={name}
      />
      <div className={Style.pulse} />
    </div>
  )
}

export default Marker
