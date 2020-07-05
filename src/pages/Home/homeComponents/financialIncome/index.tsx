import React from 'react'

import { Card } from '../../../../styles'

import { icArrowUp, icArrowDown } from '../../../../assets/images'

import {
  Container,
  ContainerCards,
  MonetaryReference,
  ValueCard
} from './styles'

export const FinancialIncome: React.FC = () => (
  <Container>
    <h1>Receitas</h1>

    <ContainerCards>
      <Card clear>
        <MonetaryReference>R$</MonetaryReference>
        <ValueCard>300</ValueCard>
        hoje<br />
        <span style={{ alignSelf: 'flex-end' }}>
          <img src={icArrowUp} alt="" />
        </span>
      </Card>

      <Card clear>
        <MonetaryReference>R$</MonetaryReference>
        <ValueCard>200</ValueCard>
        Na Semana<br />
        <span style={{ alignSelf: 'flex-end' }}>
          <img src={icArrowDown} alt="" />
        </span>
      </Card>

      <Card clear>
        <MonetaryReference>R$</MonetaryReference>
        <ValueCard>10k</ValueCard>
        No Mês<br />
        <span style={{ alignSelf: 'flex-end' }}>
          <img src={icArrowUp} alt="" />
        </span>
      </Card>

    </ContainerCards>

  </Container>
)
