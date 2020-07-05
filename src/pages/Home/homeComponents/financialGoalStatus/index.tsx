import React from 'react'

import { FinancialGoalStatusContainer, TextsFinancialGoalStatus } from './styles'
import { TextBolder } from '../../styles'
import { ProgressBar } from '../../../../components'

export const FinancialGoalStatus: React.FC = () => (
  <FinancialGoalStatusContainer>
    <TextsFinancialGoalStatus>
      <span>Sua meta mensal</span>
      <TextBolder>R$ 15.000</TextBolder>
    </TextsFinancialGoalStatus>
    <ProgressBar percent={70} />
  </FinancialGoalStatusContainer>
)
