import { createGlobalStyle } from "styled-components"
import { colors } from "./theme"
export const Base = createGlobalStyle`
* { box-sizing: border-box; font-weight: 400;}
body {
  margin: 0;
  background: ${colors.primary};
  
}
`
