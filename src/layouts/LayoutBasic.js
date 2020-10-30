import React from "react"
import Menu from "../components/Menu/Menu"
export default function LayoutBasic(props) {
  const { children, menuColor } = props

  return (
    <>
      <Menu bgColor={menuColor} />
      {children}
    </>
  )
}
