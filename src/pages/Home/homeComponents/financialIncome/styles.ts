import styled from 'styled-components'

import { Card } from '../../../../styles'

export const Container = styled.section`
`
export const ContainerCards = styled.main`
margin: 0.5rem 0 0;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
${Card} {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1rem 0.5rem;
}`
export const MonetaryReference = styled.span`
font-size: 0.8rem;
font-weight: bolder;`

export const ValueCard = styled.span`
font-size: 2rem;
font-weight: bolder;`

export const IndicatorCard = styled.span`
align-self: flex-end;
`
