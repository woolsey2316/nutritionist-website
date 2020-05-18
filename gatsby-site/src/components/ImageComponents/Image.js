import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 290) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }
      
      const imageSizes = image.node.childImageSharp.fixed;
      return (
        <div>
          <Img 
            alt={props.filename}
            fixed={imageSizes}
          />
        </div>
      );
    }}
  />
)