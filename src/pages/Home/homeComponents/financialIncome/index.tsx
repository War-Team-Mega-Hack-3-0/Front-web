import React from 'react'

import { Card } from '../../../../styles'

import { icArrowUp, icArrowDown } from '../../../../assets/images'

import {
  Container,
  ContainerCards,
  MonetaryReference,
  ValueCard,
  IndicatorCard
} from './styles'

export const FinancialIncome: React.FC = () => (
  <Container>
    <h1>Receitas</h1>

    <ContainerCards>
      <Card clear>
        <MonetaryReference>R$</MonetaryReference>
        <ValueCard>300</ValueCard>
        hoje<br />
        <IndicatorCard>
          <img src={icArrowUp} alt="" />
        </IndicatorCard>
      </Card>

      <Card clear>
        <MonetaryReference>R$</MonetaryReference>
        <ValueCard>200</ValueCard>
        Na Semana<br />
        <IndicatorCard>
          <img src={icArrowDown} alt="" />
        </IndicatorCard>
      </Card>

      <Card clear>
        <MonetaryReference>R$</MonetaryReference>
        <ValueCard>10k</ValueCard>
        No Mês<br />
        <IndicatorCard>
          <img src={icArrowUp} alt="" />
        </IndicatorCard>
      </Card>

    </ContainerCards>

  </Container>
)
