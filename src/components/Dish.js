import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
      file(relativePath: { eq: "dish.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Salad Dish"
        style={{ marginLeft: "12%", display: "relative"}}
      />
  )
}