import React from 'react'

import { ContainerWithNavBar } from '../../components'
import { Salutation } from './salutation'

import { TextBolder } from './styles'

export const Home: React.FC = () => {
  return (
    <ContainerWithNavBar>
      <Salutation />

    </ContainerWithNavBar>
  )
}
