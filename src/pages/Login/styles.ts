import styled from 'styled-components'

import { palletColors } from '../../common/colors'

export const SpaceBetweenInputs = styled.div`
margin-top: 1rem;`

export const SpaceAfterInputs = styled.div`
margin-top: 1.5625rem;`

export const ContainerOptionsLogin = styled.div`
font-weight: 500;
display: flex;
justify-content: center;
a {
  color: #fff;
}`

export const ContainerButton = styled.div`
margin: 3.75rem 0 1.5rem;`

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

export const TextCenter = styled.span`
text-align: center;
a {
  color: ${palletColors.blueGreen};
  text-decoration: none;
}`
