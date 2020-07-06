import React from 'react'

import { titleBusinessTips, describeBusinessTips } from '../../common/strings'

import { ContainerWithNavBar } from '../../components'

import { Title, SpaceTitleParagraph } from './styles'

export const BusinessTips: React.FC = () => (
  <ContainerWithNavBar>
    <Title>{titleBusinessTips}</Title>
    <SpaceTitleParagraph />
    <p dangerouslySetInnerHTML={{ __html: describeBusinessTips }} />
  </ContainerWithNavBar>
)
