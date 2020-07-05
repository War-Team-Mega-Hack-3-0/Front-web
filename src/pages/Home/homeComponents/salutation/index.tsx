import React from 'react'

import { DividerNameSalutation, TextBolder } from './styles'

export const Salutation: React.FC = () => {
  return (
    <h1>
      Bom dia, Glaucio<br />
      <DividerNameSalutation />
      <TextBolder>
        Você está indo muito<br />
      bem em sua meta.
      </TextBolder>
    </h1>
  )
}
