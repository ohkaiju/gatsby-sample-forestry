import React, { useContext } from "react";
import { Link } from "gatsby";
import Image from "gatsby-image/withIEPolyfill";
import styled from "styled-components";
import WrapContext from "../utils/wrapContext";

const Grid = styled.div`
  column-gap: 0;
  column-count: 2;
  @media (min-width: 768px) {
    column-count: 3;
  }
`;

const Figure = styled.figure`
  margin: 0;
  break-inside: avoid;
  position: relative;
  display: block;
  padding: 4px;
  &:hover {
    figcaption {
      opacity: 1;
      transition: 0.2s;
    }
  }
  @media (min-width: 768px) {
    padding: 8px;
  }
`;

const Figcaption = styled.figcaption`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 16px;
  left: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: white;
`;

const Modal = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 8px;
  background-color: white;
  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const Gallery = ({ edges }) => {
  const context = useContext(WrapContext);
  return (
    <Grid>
      {edges.map((node, i) => {
        const isClick = context.modal === node.id;
        const noClick = context.modal === "";
        const toggle = () =>
          isClick ? context.setModal("") : context.setModal(node.id);
        return (
          <Figure key={node.id}>
            {/* is Album */}
            {node.link ? (
              <Link to={node.link}>
                <Image fluid={node.fluid} />
                <Figcaption>{node.figcaption}</Figcaption>
              </Link>
            ) : (
              /* is Click */
              <div onClick={toggle}>
                {isClick ? (
                  <Modal>
                    <Image
                      style={{ width: "100%" }}
                      big={isClick}
                      fluid={node.fluid}
                      objectFit="contain"
                      alt={node.figcaption}
                    />
                  </Modal>
                ) : noClick ? (
                  /* is Photo */
                  <Image
                    //big={isClick}
                    fluid={node.fluid}
                    alt={node.figcaption}
                  />
                ) : (
                  <></>
                )}
                {node.figcaption && <Figcaption>{node.figcaption}</Figcaption>}
              </div>
            )}
          </Figure>
        );
      })}
    </Grid>
  );
};

export default Gallery;
