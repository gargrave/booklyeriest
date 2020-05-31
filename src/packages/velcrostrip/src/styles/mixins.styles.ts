import { css } from 'emotion'

export const centeredFlex = css`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const inputWrapper = () => css`
  display: flex;
  flex-flow: column;
  margin-bottom: 1.25rem;
`

export const pinnedAbsolute = css`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`
