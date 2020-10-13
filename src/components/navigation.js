import React, { useContext } from "react";
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Box, Flex, Heading, Link as RebassLink, Text } from "rebass";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Link = styled.a`
  display: block;
  width: fit-content;
  text-decoration: none;
  color: #22d799;
`;

const Navigation = () => {
  const {
    allLinkYaml: { edges },
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
  `);
  return (
    <Nav>
      {edges.map(({ node }) => (
        <Link href={node.url}>
          <p>{node.title}</p>
        </Link>
      ))}
    </Nav>
  );
};

export default Navigation;
