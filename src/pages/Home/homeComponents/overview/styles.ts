import styled, { css } from 'styled-components'

export const OverViewData = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height: 5rem;
`

interface IItemOverview {
  notFirst?: boolean
}
export const ItemOverview = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${({ notFirst }: IItemOverview) => notFirst ? css`border-left: 2px solid` : ''}
`
export const ValueOverview = styled.span`
font-weight: bold;
font-size: 1.5rem;
margin: 0 0 .15rem;
`
