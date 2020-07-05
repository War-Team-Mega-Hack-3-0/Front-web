import React from 'react'

import {
  icInitialLetterLogo,
  icEllipsis
} from '../../../../assets/images'

import { MyNavBar } from './styles'

interface IProps {
  fixed: boolean
}

export const Navbar: React.FC<IProps> = ({ fixed }) => {
  return (
    <MyNavBar fixed={fixed}>
      <button style={{ backgroundColor: 'transparent' }}>
        <img src={icEllipsis} alt="" />
      </button>

      <img src={icInitialLetterLogo} alt="" />
    </MyNavBar>
  )
}
