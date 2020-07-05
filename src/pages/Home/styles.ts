import styled, { css } from 'styled-components'

import { palletColors } from '../../common/colors'

export const ContainerScreen = styled.section`
padding: 1rem;
height: 100vh;
width: 100vw;
overflow-x: hidden;
`

interface IMenuHeaderFixed {
  fixed: boolean
}

const fixedMenu = css`
box-shadow: 2px 2px 2px black;
width: 100vw;
position: absolute;
top: 0;
left: 0;
animation: moveDown 0.5s ease-in-out;
padding: 1rem;`

export const NavBar = styled.header`
background-color: ${palletColors.backGroundBlue};
display: flex;
justify-content: space-between;

${({ fixed }: IMenuHeaderFixed) => fixed ? fixedMenu : ''}

@keyframes moveDown {
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
}`

export const Content = styled.main`
margin: 2rem 0 0;
${({ fixed }: IMenuHeaderFixed) => fixed ? 'margin: 3.rem 0 0;' : ''}
`
