import { css } from 'emotion'
import { shade } from 'polished'

import { button } from './mixins.styles'

const orange = '#ff851b'

const defaultButton = css`
  background-color: #ff0000;
`

export default {
  button: css([button, defaultButton]),
  disabled: css`
    background: lightgray;
    color: darkgray;
  `,
  type1: css`
    background: ${orange};
  `,
  type2: css`
    background: ${shade(0.15, orange)};
  `,
}
