import { css } from 'emotion'

import { inputWrapper } from 'packages/velcrostrip'
import { crudForm, formButtons } from 'styles'

const bookForm = css`
  ${crudForm};
`

const buttons = css`
  ${formButtons};
  margin-top: 1.25rem;
`

export default () => {
  return {
    bookForm,
    buttons,
    inputWrapper: inputWrapper(),
  }
}
