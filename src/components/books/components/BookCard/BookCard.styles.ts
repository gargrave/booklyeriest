import { css } from 'emotion'

const bookCard = css`
  padding: 12px 24px !important;
`

const bookName = css`
  font-weight: 500;
`

const authorName = css`
  color: #666;
`

export default () => {
  return {
    authorName,
    bookCard,
    bookName,
  }
}
