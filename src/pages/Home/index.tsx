import React, { useState } from 'react'

import { InsideText } from '../../common/strings'

import { icLamp } from '../../assets/images'

import { ContainerWithNavBar, ProgressBar } from '../../components'
import { Salutation, FinancialGoalStatus, Overview } from './homeComponents'

import {
  InsideContainer,
  ButtonLamp,
  SpaceCards
} from './styles'

export const Home: React.FC = () => {
  return (
    <ContainerWithNavBar>
      {/* fazer funcao para saber qual parte do dia é em salutation */}
      <Salutation />

      {/* Componentizar */}
      <InsideContainer>
        <h3>{InsideText}</h3>
        <ButtonLamp to="/cuelim">
          <img
            src={icLamp}
            alt="uma lampada branca em um quadrado de cor azul"
            title="uma lampada branca em um quadrado de cor azul"
          />
        </ButtonLamp>
      </InsideContainer>

      {/* Valores mocados */}
      <FinancialGoalStatus/>

      <SpaceCards />

      {/* Valores mocados */}
      <Overview />

    </ContainerWithNavBar>
  )
}
