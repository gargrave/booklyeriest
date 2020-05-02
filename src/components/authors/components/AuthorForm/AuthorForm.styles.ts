import { css } from 'emotion'

import { crudForm, formButtons } from 'styles'

const authorForm = css`
  ${crudForm}
`

const buttons = css`
  ${formButtons}
`

export default () => {
  return {
    authorForm,
    buttons,
  }
}
