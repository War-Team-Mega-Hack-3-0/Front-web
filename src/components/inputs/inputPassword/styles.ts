import styled from 'styled-components'

import { palletColors } from '../../../common/colors'

export const ContainerToAddIconInInput = styled.div`
border: 2px solid transparent; 
align-content: center;
align-items: center;
background-color: #FFF;
border-radius: 0.5rem;
display: flex;
padding-right: 1rem;
input {
  &:focus {
    border: 2px solid transparent; 
  }
}
&:focus-within {
  border: 2px solid ${palletColors.blueGreen}
}`

export const TransparentButton = styled.button`
background-color: transparent;
`
