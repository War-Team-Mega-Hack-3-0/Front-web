import styled from 'styled-components'

export const TextBolder = styled.span`
font-weight: bolder;`

export const SpaceFinancialCard = styled.div`
margin: 2rem 0 0;`

export const SpaceCards = styled.div`
margin: 2rem 0 0;
@media (min-width: 800px) and (max-width: 2600px){
  display: none;
}`

export const ContainerCharts = styled.section`
display: flex;
flex-direction: column;
gap: 1rem;
@media (min-width: 800px) and (max-width: 2600px){
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
`
