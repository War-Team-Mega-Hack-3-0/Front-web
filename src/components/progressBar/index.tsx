import React from 'react'

import { ProgressContainer, ProgressMark } from './styles'

interface IProps {
  percent: number
}

export const ProgressBar: React.FC<IProps> = ({ percent }) => (
  <ProgressContainer>
    <ProgressMark percent={percent} />
  </ProgressContainer>
)

ProgressBar.defaultProps = {
  percent: 10
}
