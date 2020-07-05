import styled, { css } from 'styled-components'

export const ProgressContainer = styled.div`
background-color: #2E3147;
border-radius: .5rem;
width: 100%;
height: .4rem;`

interface IProgressMark {
  percent: number
}
export const ProgressMark = styled.div`
height: .4rem;
border-radius: .5rem;
background-color: #2EC9F0;
animation: movementProgressMark 1.5s ease-in-out;
@keyframes movementProgressMark {
  from {
    width: 0%;
  }
  to {
    ${({ percent }: IProgressMark) => css`width: ${percent}%`}
  }
}
${({ percent }: IProgressMark) => css`width: ${percent}%`}`
