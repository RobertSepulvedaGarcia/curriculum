import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
export default function Seo({ titulo, description, meta, lang }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || data.site.siteMetadata.description
  return (
    <>
      <Helmet
        htmlAttributes={{ lang }}
        title={titulo}
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        meta={[
          {
            name: "Description",
            content: metaDescription,
          },
          {
            name: "og:title",
            content: titulo,
          },
          {
            name: "og:description",
            content: metaDescription,
          },
          {
            name: "og:type",
            content: "website",
          },
          {
            name: "twitter:card",
            content: "summary",
          },
          {
            name: "twitter:creator",
            content: data.site.siteMetadata.author,
          },
          {
            name: "twitter:title",
            content: titulo,
          },
          {
            name: "twitter:description",
            content: metaDescription,
          },
        ].concat(meta)}
      />
    </>
  )
}

Seo.defaultProps = {
  lang: "es",
  meta: [],
  description: "",
}

Seo.propTypes = {
  titulo: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}
