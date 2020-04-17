import { css } from 'emotion'

const bookCard = css`
  padding: 12px 24px;
`

const bookName = css`
  font-weight: 500;
`

export default () => {
  return {
    bookCard,
    bookName,
  }
}
