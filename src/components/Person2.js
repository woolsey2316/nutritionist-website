import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from "../scss/AboutAlison.module.scss"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "person2.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
        height="332px"
        width="450px"
        float="right"
        style={{ display: "block" }}
      />
      <div className={style.specialties}>
        <h3 className={style.heading} >Specialties</h3>
        <p className={style.text}>Digestive Wellness</p>
        <p className={style.text}>Food allergies and Intolerance</p>
        <p className={style.text}>Healthy cooking / meal planning</p>
        <p className={style.text}>Diet and Detoxing</p>
        <p className={style.text}>Elimination diets</p>
      </div>
    </div>
  )
}
