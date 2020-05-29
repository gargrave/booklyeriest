import { css } from 'emotion'

const authorCard = () => css`
  padding: 12px 24px !important;
`

const authorName = () => css`
  font-weight: 500;
`

export default () => {
  return {
    authorCard: authorCard(),
    authorName: authorName(),
  }
}
