import { css } from 'emotion'

const bookName = () => css`
  font-weight: 500;
`

export default () => {
  return {
    bookName: bookName(),
  }
}
