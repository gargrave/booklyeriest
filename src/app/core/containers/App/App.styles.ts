import { css } from 'emotion'
import { centeredFlex } from 'styles'

const MAX_WIDTH = '800px'

const pageWrapper = () => css`
  margin: auto;
  max-width: ${MAX_WIDTH};
`

const nav = () => css`
  ${centeredFlex}
  margin: 1rem;
`

const navContent = () => css`
  ${centeredFlex}
  flex-flow: row wrap;
  max-width: ${MAX_WIDTH};
`

export default () => {
  return {
    nav: nav(),
    navContent: navContent(),
    pageWrapper: pageWrapper(),
  }
}
