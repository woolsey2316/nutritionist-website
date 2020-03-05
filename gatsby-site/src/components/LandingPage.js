import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'
import Style from '../scss/LandingPage.module.scss'
import buttonStyle from '../scss/button.module.scss'

const LandingPage = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "landingpage.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4120) {
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
            backgroundSize: 'cover',
            height: '100vh',
            width: '100vw',
            backgroundRepeat: 'no-repeat',
          }}
        >
        <div className={Style.quoteBox}>
          <q>let food be thy medicine and medicine be thy food</q>
          <div width="100%"></div>
          <button className={buttonStyle.button} type="button">Book a Session</button>
        </div>
        </BackgroundImage>
      )
    }}
  />
)

export default LandingPage