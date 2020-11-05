import React from "react"
import LayoutBasic from "../layouts/LayoutBasic"
import ContactForm from "../components/ContactForm/ContactForm"
import Seo from "../components/Seo/Seo"
export default function contact() {
  return (
    <LayoutBasic menuColor="rgba(102,205,170,0.2)">
      <Seo titulo="Contactame" />
      <ContactForm />
    </LayoutBasic>
  )
}
