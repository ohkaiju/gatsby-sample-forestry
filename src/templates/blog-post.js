import React from "react";
import { graphql, Link as GLink } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Gallery from "../components/gallery";
import styled from "styled-components";
import Layout from "../components/layout";
import {
  FacebookShareButton,
  TwitterShareButton,
  TumblrShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  TumblrIcon,
  EmailIcon,
} from "react-share";

const Link = styled(GLink)`
  text-decoration: none;
`;
const ShareButton = styled.button`
  padding: 0 0.2em;
  width: fit-content;
  background: none;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Section = styled.section`
  width: 100%;
  padding: 4px;
  @media (min-width: 768px) {
    width: 50%;
    padding: 4px 8px;
  }
`;

const Back = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Social = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BlogPostTemplate = ({ data: { mdx } }) => {
  const images = [];
  mdx.frontmatter.photos.forEach((e) => {
    images.push({
      id: e.childImageSharp.id,
      fluid: e.childImageSharp.fluid,
    });
  });
  return (
    <Layout>
      <Container>
        <Section>
          <Back>
            <Link to="/">
              <p>Retour</p>
            </Link>
          </Back>
          <h3>{mdx.frontmatter.title}</h3>
          <Social>
            <ShareButton as={FacebookShareButton} url={"#"}>
              <FacebookIcon size={32} round={true} />
            </ShareButton>
            <ShareButton as={TwitterShareButton} width="3em" url={"#"}>
              <TwitterIcon size={32} round={true} />
            </ShareButton>
            <ShareButton as={TumblrShareButton} width="3em" url={"#"}>
              <TumblrIcon size={32} round={true} />
            </ShareButton>
            <ShareButton as={EmailShareButton} width="3em" url={"#"}>
              <EmailIcon size={32} round={true} />
            </ShareButton>
          </Social>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Section>
        <Section>
          <Gallery edges={images} />
        </Section>
      </Container>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
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
`;
