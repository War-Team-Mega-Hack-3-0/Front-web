import React from 'react'

import { InsideText } from '../../../../common/strings'
import { icLamp } from '../../../../assets/images'

import { InsideContainer, ButtonLamp } from './styles'

export const InsideUser: React.FC = () => (
  <InsideContainer>
    <h3>{InsideText}</h3>
    <ButtonLamp to="/insides">
      <img
        src={icLamp}
        alt="uma lampada branca em um quadrado de cor azul"
        title="uma lampada branca em um quadrado de cor azul"
      />
    </ButtonLamp>
  </InsideContainer>
)
