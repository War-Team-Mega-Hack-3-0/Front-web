import React from 'react'

import { LogoSvg } from '../../../assets/images'

import { Container, ContainerLogo, Logo, Title, ContainerContent } from './styles'

interface IProps {
  title: string
}

export const ContainerWithLogo: React.FC<IProps> = ({ title, children }) => {
  return (
    <Container>
      <ContainerContent>

        <ContainerLogo>
          <Logo src={LogoSvg} alt="Logo da decision" title="Logo da decision" />
        </ContainerLogo>

        <Title dangerouslySetInnerHTML={{ __html: title }} />

        {children}

      </ContainerContent>

    </Container >
  )
}
