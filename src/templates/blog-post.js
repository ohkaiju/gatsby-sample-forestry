import React from "react"
import { graphql, Link as GLink } from "gatsby"
import { Box, Button, Flex, Heading, Image, Link as RLink, Text } from "rebass"
import Gallery from "../components/gallery"
import styled from "styled-components"
import Layout from "../components/layout"
import {
  FacebookShareButton,
  TwitterShareButton,
  TumblrShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  TumblrIcon,
  EmailIcon
} from "react-share"

const Link = styled(RLink)`
  text-decoration: none;
`
const ShareButton = styled(Button)`
  padding: 0 0.2em;
  width: fit-content;
  background: none;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const Content = styled(Text)`
  max-width: 36em;
`

const BlogPostTemplate = ({ data: { markdownRemark } }) => {
  const images = []
  markdownRemark.frontmatter.photos.forEach(e => {
    images.push({
      id: e.childImageSharp.id,
      fluid: e.childImageSharp.fluid
    })
  })
  const shareUrl = `http://yveslebras.com/${markdownRemark.fields.slug}`
  return (
    <Layout>
      <Flex width={1} flexWrap="wrap">
        <Box width={[1, 1, 1 / 2, 1 / 2]} p={[1, 2]} pr={[1, 2, 4]}>
          <Flex width={1} justifyContent="flex-end" alignItems="flex-end">
            <Link as={GLink} color="secondary" to="/">
              <Text fontFamily="sUI">Retour</Text>
            </Link>
          </Flex>
          <Heading
            as="h3"
            color="secondary"
            fontWeight={"heading"}
            fontFamily="sUI"
          >
            {markdownRemark.frontmatter.title}
          </Heading>
          <Flex width={1} justifyContent="flex-end">
            <ShareButton as={FacebookShareButton} url={shareUrl}>
              <FacebookIcon size={32} round={true} />
            </ShareButton>
            <ShareButton as={TwitterShareButton} width="3em" url={shareUrl}>
              <TwitterIcon size={32} round={true} />
            </ShareButton>
            <ShareButton as={TumblrShareButton} width="3em" url={shareUrl}>
              <TumblrIcon size={32} round={true} />
            </ShareButton>
            <ShareButton as={EmailShareButton} width="3em" url={shareUrl}>
              <EmailIcon size={32} round={true} />
            </ShareButton>
          </Flex>
          <Content
            fontFamily="sUI"
            color="secondary"
            dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
          />
        </Box>
        <Box width={[1, 1, 1 / 2, 1 / 2]}>
          <Gallery edges={images} />
        </Box>
      </Flex>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        photos {
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
