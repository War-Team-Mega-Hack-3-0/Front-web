import { css, createGlobalStyle } from 'styled-components'

const reset = css`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Rubik', sans-serif;
}

ol, ul {
 list-style: none;
}
`
export const Reset = createGlobalStyle`${reset}`
