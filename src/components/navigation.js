import React, { useContext } from "react"
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Box, Flex, Heading, Link as RebassLink, Text } from "rebass"
import WrapContext from "../utils/wrapContext"
import { FaExternalLinkAlt } from "react-icons/fa"

const Wrap = styled(Box)`
  min-height: 100vh;
  margin-right: 0;
  overflow: ${props => (props.noScoll ? "hidden" : "auto")};
`

const Link = styled(RebassLink)`
  display: block;
  width: fit-content;
  text-decoration: none;
  color: #22D799;
`

const Navigation = () => {
  const {
    allLinkYaml: { edges }
  } = useStaticQuery(graphql`
    query NavQuery {
      allLinkYaml {
        edges {
          node {
            id
            url
            title
          }
        }
      }
    }
  `)
  return (
    <Flex flexDirection="column" alignItems="flex-end">
      {edges.map(({ node }) => (
        <Link as="a" href={node.url} color="green">
          <Flex>
            <Text fontFamily="sUI" pr={1}>
              {node.title}
            </Text>
{/*             <FaExternalLinkAlt color="black" />
 */}          </Flex>
        </Link>
      ))}
    </Flex>
  )
}

export default Navigation
