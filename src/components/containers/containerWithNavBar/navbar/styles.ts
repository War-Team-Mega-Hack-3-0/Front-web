import styled, { css } from 'styled-components'

import { palletColors } from '../../../../common/colors'

export interface IMenuHeaderFixed {
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

export const MyNavBar = styled.header`
background-color: ${palletColors.backGroundBlue};
display: flex;
justify-content: space-between;
/* flex-direction: row-reverse; - usar isso na responsividade */

${({ fixed }: IMenuHeaderFixed) => fixed ? fixedMenu : ''}

@keyframes moveDown {
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
}`
