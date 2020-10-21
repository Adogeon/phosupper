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
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const placeholderPath = "topic-2.webp"

const Image = ({ path }) => {
  if (!path) path = placeholderPath

  const data = useStaticQuery(graphql`
    query {
      allImage: allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const resultEdge = data.allImage.edges.filter(({ node }) => {
    return node.relativePath === path
  })

  const resultNode = resultEdge[0]?.node

  if (!resultNode?.childImageSharp?.fluid) {
    return <div> Can't find image</div>
  }

  return <Img fluid={resultNode.childImageSharp.fluid} />
}

export default Image
