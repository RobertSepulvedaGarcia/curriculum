import React from "react"
import LayoutBasic from "../layouts/LayoutBasic"
import Info from "../components/Info/Info"
import SobreMi from "../components/SobreMi/SobreMi"
import "./Index.scss"
export default function index() {
  return (
    <LayoutBasic menuColor="rgba(102,205,170,0.2)">
      <Info />
      <SobreMi />
    </LayoutBasic>
  )
}
