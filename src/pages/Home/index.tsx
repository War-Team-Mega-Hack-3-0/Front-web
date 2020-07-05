import React from 'react'

import { ContainerWithNavBar } from '../../components'
import {
  Salutation,
  InsideUser,
  FinancialGoalStatus,
  Overview
} from './homeComponents'

import {
  SpaceCards
} from './styles'

export const Home: React.FC = () => {
  return (
    <ContainerWithNavBar>
      {/* fazer funcao para saber qual parte do dia é em salutation */}
      <Salutation />

      <InsideUser/>

      {/* Valores mocados */}
      <FinancialGoalStatus/>
      <SpaceCards />

      {/* Valores mocados */}
      <Overview />
      <SpaceCards />

    </ContainerWithNavBar>
  )
}
