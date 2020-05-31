import { css } from 'emotion'

export const centeredFlex = css`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const listViewWrapper = () => css`
  min-height: 256px;
  padding-bottom: 32px;
  position: relative;
`

export const crudForm = css`
  position: relative;
`

export const formButtons = css`
  align-items: center;
  display: flex;
  justify-content: space-between;

  button {
    flex: 1 0;
  }
`
