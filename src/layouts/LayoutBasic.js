import React from "react"
import Menu from "../components/Menu/Menu"
import "./LayoutBasic.scss"
export default function LayoutBasic(props) {
  const { children, menuColor } = props

  return (
    <div className="prueba">
      <Menu bgColor={menuColor} />
      {children}
    </div>
  )
}
