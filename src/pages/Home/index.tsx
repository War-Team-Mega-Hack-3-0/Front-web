import React, { useState } from 'react'

import { InsideText } from '../../common/strings'

import { icLamp } from '../../assets/images'

import { ContainerWithNavBar, ProgressBar } from '../../components'
import { Salutation, Overview } from './homeComponents'

import {
  InsideContainer,
  ButtonLamp,
  TextBolder,
  FinancialGoalStatus,
  TextsFinancialGoalStatus,
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

      {/* Componentizar */}
      <FinancialGoalStatus>
        <TextsFinancialGoalStatus>
          <span>Sua meta mensal</span>
          <TextBolder>R$ 15.000</TextBolder>
        </TextsFinancialGoalStatus>
        <ProgressBar percent={70} />
      </FinancialGoalStatus>

      {/* Valores mocados */}
      <SpaceCards />

      <Overview />

    </ContainerWithNavBar>
  )
}
