import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Gallery from "../components/gallery.js"
import Layout from '../components/layout'
import { Heading } from "rebass"

const IndexPage = () => {
  const {
    allMarkdownRemark: { edges }
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                photos {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const images = []
  edges.forEach(e => {
    images.push({
      id: e.node.id,
      link: e.node.fields.slug,
      fluid: e.node.frontmatter.photos[0].childImageSharp.fluid,
      figcaption: e.node.frontmatter.title
    })
  })
  return (
    <Layout>
      <Gallery edges={images} />
    </Layout>
  )
}

export default IndexPage
