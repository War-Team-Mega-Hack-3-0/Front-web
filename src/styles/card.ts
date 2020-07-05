import styled from 'styled-components'

import { palletColors } from '../common/colors'

interface IProps {
  clear?: boolean
}

export const Card = styled.div`
width: 100%;
border-radius: 0.5rem;
background-color:${({ clear }: IProps) => clear ? palletColors.alternativeColorCard : '#2E3147'};
padding: .5rem;`
