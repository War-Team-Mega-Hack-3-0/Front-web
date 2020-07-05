import styled, { css } from 'styled-components'

const ContainerFlex = css`
display: flex; 
flex-direction: column;
align-items: center;
width: 100%;`

export const Container = styled.main`
padding: 1rem;
/* @media screen and (max-width:600px){
  ${ContainerFlex}
} */
/* 
@media screen and (max-width:768px){
  ${ContainerFlex}
}
@media screen and (max-width:900px){
  ${ContainerFlex}
}
@media screen and (max-width:1024px){
  ${ContainerFlex}
}
@media screen and (max-width:1200px){
  ${ContainerFlex}
}
@media screen and (max-width:1600px){
  ${ContainerFlex}
} */
`

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

export const ContainerContent = styled.div`
/* @media screen and (max-width:600px){
  width: 80%;
}
@media screen and (max-width:768px){
  width: 80%;
}
@media screen and (max-width:900px){
  width: 80%;
}
@media screen and (max-width:1024px){
  width: 55%;
}
@media screen and (max-width:1200px){
  width: 55%;
}
@media screen and (max-width:1600px){
  width: 45%;
} */
`
