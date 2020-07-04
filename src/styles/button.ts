import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { palletColors } from '../common/colors'

export const style = css`
background-color: ${palletColors.pureOrange};
border-radius: 50vh;
color: #FFF;
font-size: 0.9rem;
font-weight: bold;
padding: 1rem;
width: 100%;
text-decoration: none;
&:hover {
  cursor: pointer;
}`

export const Button = styled.button`${style}`
export const LinkStyleButton = styled(Link)`${style}`
