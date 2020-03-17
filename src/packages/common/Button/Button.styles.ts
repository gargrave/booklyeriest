import { css } from 'emotion'
import { button } from './mixins.styles'

const defaultButton = css`
  background-color: pink;
`

export default {
  button: css([button, defaultButton]),
  disabled: css`
    background: lightgray;
    color: darkgray;
  `,
}
