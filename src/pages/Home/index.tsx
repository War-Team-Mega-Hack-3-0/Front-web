import React, { useState } from 'react'

import { InsideText } from '../../common/strings'

import { icLamp } from '../../assets/images'

import { ContainerWithNavBar, ProgressBar } from '../../components'
import { Salutation } from './salutation'

import {
  InsideContainer,
  ButtonLamp,
  TextBolder,
  FinancialGoalStatus,
  TextsFinancialGoalStatus
} from './styles'

export const Home: React.FC = () => {
  return (
    <ContainerWithNavBar>
      {/* fazer funcao para saber qual parte do dia é em salutation */}
      <Salutation />

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

      <FinancialGoalStatus>

        <TextsFinancialGoalStatus>
          <span>Sua meta mensal</span>
          <TextBolder>R$ 15.000</TextBolder>
        </TextsFinancialGoalStatus>

        <ProgressBar percent={75} />

      </FinancialGoalStatus>

    </ContainerWithNavBar>
  )
}
