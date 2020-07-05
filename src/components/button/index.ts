import styled from 'styled-components'

import { palletColors } from '../../common/colors'

export const Button = styled.button`
border-radius: 0.5rem;
background-color: ${palletColors.blueGreen};
color: #FFF;
font-size: 1.5rem;
font-weight: 500;
letter-spacing: 0.2px;
padding: 1rem;
width: 100%;
&:disabled {
  background-color: #EBEBEB;
  color: #5D5F65;
}`
