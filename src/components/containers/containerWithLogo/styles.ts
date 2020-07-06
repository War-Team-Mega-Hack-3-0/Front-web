import styled, { css } from 'styled-components'

export const Container = styled.main`
padding: 1rem;
@media (min-width:600px) and (max-width: 800px){
  padding: 1rem 10%;
}
@media (min-width:800px) and (max-width: 1400px){
  padding: 1rem 25%;
}
@media (min-width:1400px) and (max-width: 2600px){
  padding: 1rem 35%;
}`

export const ContainerLogo = styled.div`
display: flex;
justify-content: center;
margin: 3.469375rem 0 3.875rem;`

export const Logo = styled.img`
width: 50%;`

export const Title = styled.h1`
font-size: 1.5rem;
font-weight: 500;
letter-spacing: 0.2px;
margin: 0 0 2.1rem 0`

export const ContainerContent = styled.div``
