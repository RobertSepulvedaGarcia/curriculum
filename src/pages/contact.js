import React from "react"
import LayoutBasic from "../layouts/LayoutBasic"
import ContactForm from "../components/ContactForm/ContactForm"

export default function contact() {
  return (
    <LayoutBasic menuColor="rgba(102,205,170,0.2)">
      <ContactForm />
    </LayoutBasic>
  )
}
