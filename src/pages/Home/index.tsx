import React from 'react'

import { ContainerWithNavBar } from '../../components'
import {
  Salutation,
  InsideUser,
  FinancialGoalStatus,
  Overview,
  FinancialIncome,
  RentsByPlatform
} from './homeComponents'

import {
  SpaceCards,
  SpaceFinancialCard,
  ContainerCharts
} from './styles'

export const Home: React.FC = () => {
  return (
    <ContainerWithNavBar>
      {/* fazer funcao para saber qual parte do dia é em salutation */}
      <Salutation />
      <InsideUser />

      {/* Valores mocados */}
      <FinancialGoalStatus />
      <SpaceFinancialCard />

      <ContainerCharts>

        {/* Valores mocados */}
        <Overview />
        <SpaceCards />

        {/* Valores mocados */}
        <FinancialIncome />
        <SpaceCards />

        <RentsByPlatform />

      </ContainerCharts>
    </ContainerWithNavBar>
  )
}
