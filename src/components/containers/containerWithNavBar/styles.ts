import styled from 'styled-components'

import { IMenuHeaderFixed } from './navbar/styles'

export const Container = styled.section`
padding: 1rem;
height: 100vh;
width: 100vw;
overflow-x: hidden;`

export const Content = styled.main`
margin: 2rem 0 0;
${({ fixed }: IMenuHeaderFixed) => fixed ? 'margin: 3.8rem 0 0;' : ''}`
