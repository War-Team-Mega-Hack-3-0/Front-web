import { css, createGlobalStyle } from 'styled-components'

import { palletColors } from '../common/colors'

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

body {   
  background-color: ${palletColors.backGroundBlue};
  color: #FFF;
}

ol, ul {
 list-style: none;
}
`
export const Reset = createGlobalStyle`${reset}`
