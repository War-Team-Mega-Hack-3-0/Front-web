import React from 'react'

import { useFixMenuOnScroll } from '../../../customHooks/useFixMenu'

import { Navbar } from './navbar'

import { Container, Content } from './styles'

export const ContainerWithNavBar: React.FC = ({ children }) => {
  const { isSticky, mainElement } = useFixMenuOnScroll()
  return (
    <Container ref={mainElement}>
      <Navbar fixed={isSticky} />

      <Content fixed={isSticky}>
        {children}
      </Content>

    </Container>
  )
}
