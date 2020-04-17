import { css } from 'emotion'

const authorCard = css`
  padding: 12px 24px;
`

const authorName = css`
  font-weight: 500;
`

export default () => {
  return {
    authorCard,
    authorName,
  }
}
