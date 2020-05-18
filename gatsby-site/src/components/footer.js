import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import Style from "../scss/footer.module.scss"
import SocialMediaQuilt from "../components/SocialMediaQuilt"

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
            height: "298px",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            display: "flex",
            justifyContent: "space-around",
            alignContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div className={Style.flexItemOne}>
            <p className={Style.description}>
              <span>500 Terry Francois Street</span>
            </p>
            <p className={Style.description}>
              <span>San Francisco, CA 94158</span>
            </p>
            <p className={Style.description}>
              <span>info@mysite.com</span>
            </p>
          </div>
          <div className={Style.line} />
          <div className={Style.flexItemTwo}>
            <p className={Style.title}>ALISON KNIGHT</p>
            <p className={Style.description}>Nutritionist</p>
          </div>
          <div className={Style.line} />
          <div>
          <p className={Style.description}>Tel: 123-456-7890</p>
          
          <SocialMediaQuilt colour="white" />
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default Footer
