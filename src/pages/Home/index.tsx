import React from 'react'

import { icInitialLetterLogo, icEllipsis } from '../../assets/images'

import {
  ContainerScreen,
  NavBar,
  Content
} from './styles'

export const Home: React.FC = () => (
  <ContainerScreen>
    <NavBar>
      <img src={icEllipsis} alt=""/>

      <img src={icInitialLetterLogo} alt="" />
    </NavBar>

    <Content>

      <h1>
        <span style={{ fontWeight: 'lighter' }}>
          Bom dia, Glaucio<br />
        </span>
        <div style={{ marginTop: '0.37rem' }} />
        <span style={{ fontWeight: 'bolder' }}>
          Você está indo muito<br />
          bem em sua meta.
        </span>
      </h1>

    </Content>

  </ContainerScreen>
)
