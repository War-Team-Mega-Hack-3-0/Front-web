import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const TextBolder = styled.span`
font-weight: bolder;`

// component
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
// component

export const FinancialGoalStatus = styled.div`
margin: 1.6rem 0 0;
overflow: hidden;
`

export const TextsFinancialGoalStatus = styled.div`
font-size: 0.9rem;
display: flex;
justify-content: space-between;
margin: 0 0 .5rem;
`
