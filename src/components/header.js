import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import Style from "../scss/header.module.scss"

const Header = ({ title }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "wood.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={Style.mainImage}
          fluid={imageData}
          style={{
            // Defaults are overwrite-able by setting one or each of the following:
            backgroundSize: "cover",
            height: "200px",
            width: "100vw",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 className={Style.title}>{title}</h1>
        </BackgroundImage>
      )
    }}
  />
)

export default Header
