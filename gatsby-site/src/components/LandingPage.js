import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import Style from "../scss/landing-page.module.scss"
import buttonStyle from "../scss/button.module.scss"

const LandingPage = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "landingpage.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1440) {
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
            position: "relative",
            overflow: "hidden",
            height: "100vh",
            width: "100vw"
          }}
        >
          <div className={Style.quoteBox}>
            <q>let food be thy medicine and medicine be thy food</q>
            <div width="100%"></div>
            <a href="/Services" className={buttonStyle.button} type="button">
              Book a Session
            </a>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default LandingPage
