import React, { useContext } from "react";
import { Link as GLink, useStaticQuery, graphql } from "gatsby";
import theme from "../styles/theme";
import { Base } from "../styles/base";
import styled, { ThemeProvider } from "styled-components";
import WrapContext from "../utils/wrapContext";
import Navigation from "./navigation";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-right: 0;
  overflow: ${(props) => (props.noScoll ? "hidden" : "auto")};

  padding: 16px 4px;
  @media (min-width: 768px) {
    padding: 16px 32px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 4px 4px;
  @media (min-width: 768px) {
    padding: 4px 8px;
  }
`;

const Main = styled.div`
  height: max-content;
`;

const SLink = styled(GLink)`
  display: block;
  width: fit-content;
  text-decoration: none;
`;
const Title = styled.h1`
  text-decoration: none;
  font-weight: 400;
`;

const Layout = ({ children }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const context = useContext(WrapContext);
  return (
    <ThemeProvider theme={theme}>
      <Wrap noScroll={context.modal !== ""}>
        <Base />
        <Header>
          <SLink to="/">
            <Title id="top">{siteMetadata.title}</Title>
          </SLink>
          <Navigation />
        </Header>
        <Main as="main" bg="primary" border="pink">
          {children}
        </Main>
      </Wrap>
    </ThemeProvider>
  );
};

export default Layout;
