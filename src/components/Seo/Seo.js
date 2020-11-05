import React from "react"
import Helmet from "react-helmet"
export default function Seo({ titulo }) {
  return (
    <div>
      <Helmet>
        <title>{titulo}</title>
      </Helmet>
    </div>
  )
}
