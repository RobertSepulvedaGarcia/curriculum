import React from "react"
import Menu from "../components/Menu/Menu"
export default function LayoutBasic(props) {
  const { children, menuColor } = props

  return typeof window !== `undefined` ? (
    <>
      <Menu bgColor={menuColor} />
      {children}
    </>
  ) : null
}
