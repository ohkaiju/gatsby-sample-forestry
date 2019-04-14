import React, { forwardRef, useContext } from "react"
import { Link } from "gatsby"
import Image from "gatsby-image/withIEPolyfill"
import { Box, Flex, Text } from "rebass"
import { style } from "styled-system"
import { colors, theme } from "../styles/theme"
import styled from "styled-components"
import { useTrail, animated } from "react-spring"
import WrapContext from "../utils/wrapContext"

const columnCount = style({
  prop: "columnCount",
  key: "columnCount"
})
const columnGap = style({
  prop: "columnGap",
  key: "columnGap"
})

const Grid = styled(Box)`
  column-gap: 0;
  ${columnCount}
`

Grid.defaultProps = {
  columnCount: [2,3, 2, 3],
}

const Figure = styled(
  animated(
    forwardRef((props, ref) => (
      <Box {...props} ref={ref} as="figure" p={[1,2]} />
    ))
  )
)`
  margin: 0;
  break-inside: avoid;
  position: relative;
  display: block;
  &:hover {
    figcaption {
      opacity: 1;
      transition: 0.2s;
    }
  }
`

const Figcaption = styled(
  forwardRef((props, ref) => (
    <Text
      {...props}
      as="figcaption"
      fontFamily="sUI"
      fontSize={1}
      color="primary"
      p={3}
      ref={ref}
    />
  ))
)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const Modal = styled(Flex)`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${colors.primary};
`

const Gallery = ({ edges, columns }) => {
  const trail = useTrail(edges.length, {
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  const context = useContext(WrapContext)
  return (
    <Grid columnCount={columns} bg="primary">
      {trail.map((style, i) => {
        const edge = edges[i]
        const isClick = context.modal === edge.id
        const noClick = context.modal === ""
        const toggle = () =>
          isClick ? context.setModal("") : context.setModal(edge.id)
        return (
          <Figure style={style} key={edge.id}>
            {/* is Album */}
            {edge.link ? (
              <Link to={edge.link}>
                <Image fluid={edge.fluid} />
                <Figcaption>{edge.figcaption}</Figcaption>
              </Link>
            ) : (
              /* is Click */
              <Box onClick={toggle}>
                {isClick ? (
                  <Modal p={[2, 4]}>
                    <Image
                      style={{ width: "100%" }}
                      big={isClick}
                      fluid={edge.fluid}
                      objectFit="contain"
                      alt={edge.figcaption}
                    />
                  </Modal>
                ) : noClick ? (
                  /* is Photo */
                  <Image
                    big={isClick}
                    fluid={edge.fluid}
                    alt={edge.figcaption}
                  />
                ) : (
                  <></>
                )}
                {edge.figcaption && <Figcaption>{edge.figcaption}</Figcaption>}
              </Box>
            )}
          </Figure>
        )
      })}
    </Grid>
  )
}

export default Gallery
