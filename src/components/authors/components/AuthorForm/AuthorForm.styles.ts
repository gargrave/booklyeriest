import { css } from 'emotion'

import { crudForm } from 'styles'

const authorForm = css`
  ${crudForm}
`

export default () => {
  return {
    authorForm,
  }
}
