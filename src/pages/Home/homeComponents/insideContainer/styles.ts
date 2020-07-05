import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const InsideContainer = styled.article`
display: flex;
margin: 1.5rem 0 0;
font-size: 0.85rem;`

export const ButtonLamp = styled(Link)`
background-color: transparent;
bottom: 1.5px;
margin: 0 0 0 0.4rem;
position: relative;
&:focus {
  outline: dotted;
  border: 2px solid;
}`
