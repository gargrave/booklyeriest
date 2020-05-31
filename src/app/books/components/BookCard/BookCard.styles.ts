import { css } from 'emotion'

const bookCard = css`
  padding: 12px 24px !important;
`

const bookName = css`
  font-weight: 500;
`

const subText = css`
  color: #666;
`

const sortBy = css`
  ${subText};
  font-size: 0.9rem;
`

export default () => {
  return {
    bookCard,
    bookName,
    sortBy,
    subText,
  }
}
