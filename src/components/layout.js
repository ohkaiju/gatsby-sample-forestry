import React, { useContext } from "react"
import { Link as GLink, useStaticQuery, graphql } from "gatsby"
import theme from "../styles/theme"
import { Base } from "../styles/base"
import styled, { ThemeProvider } from "styled-components"
import { Box, Flex, Heading, Link } from "rebass"
import WrapContext from "../utils/wrapContext"
import Navigation from './navigation'
const Wrap = styled(Flex)`
  flex-direction: column;
  min-height: 100vh;
  margin-right: 0;
  overflow: ${props => (props.noScoll ? "hidden" : "auto")};
`
const Main = styled(Box)`
height: max-content;
`

const SLink = styled(Link)`
  display: block;
  width: fit-content;
  text-decoration: none;
`
const Title = styled(Heading)`
  text-decoration: none;
  font-weight: 400;
`

const Layout = ({ children }) => {
  const {
    site: { siteMetadata }
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const context = useContext(WrapContext)
  return (
    <ThemeProvider theme={theme}>
      <Wrap width={1} p={[1, 3, 4]} noScroll={context.modal !== ""}>
        <Base />
        <Flex width={1} p={[1,2]} justifyContent="space-between" alignItems="baseline">
          <SLink as={GLink} to="/">
            <Title as="h1" id="top" fontFamily="sUI" color="secondary">
              {siteMetadata.title}
            </Title>
          </SLink>
          <Navigation />
        </Flex>
        <Main as="main" width={1} bg="primary" border="pink">
          {children}
        </Main>
      </Wrap>
    </ThemeProvider>
  )
}

export default Layout
