import styled from 'styled-components'

import { palletColors } from '../../common/colors'

export const Container = styled.main`
padding: 1rem;`

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.469375rem 0 3.875rem;
`

export const Logo = styled.img`
width: 50%;`

export const Title = styled.h1`
font-size: 1.5rem;
font-weight: 500;
letter-spacing: 0.2px;
margin: 0 0 2.1rem 0`

// exportar isso daqui
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
margin: 3.75rem 0 1.5rem;
`

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
