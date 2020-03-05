import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'
import Style from '../scss/footer.module.scss'


const Footer = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "wood.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
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
          Tag="footer"
          fluid={imageData}
          style={{
            // Defaults are overwrite-able by setting one or each of the following:
            height: '298px',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
          }}
        >
        <p className={Style.description}>500 Terry Francois Street

        San Francisco, CA 94158
      
        info@mysite.com</p>
        <div className={Style.line}/>
        <p className={Style.description}>Allison Knight</p>
        <div className={Style.line}/>
        <p className={Style.description}>Telephone</p>
        </BackgroundImage>
      )
    }}
  />
)

export default Footer
