import styled from 'styled-components'

import { palletColors } from '../../common/colors'

export const Input = styled.input`
border: 2px solid transparent;
border-radius: 0.5rem;
font-weight: 500;
padding: 1rem;
width: 100%;
&:focus {
  outline: none;
  border: 2px solid ${palletColors.blueGreen}
}
&::placeholder {
  color: #A2A6AF;
  opacity: 1;
}`
