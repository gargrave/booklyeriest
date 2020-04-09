import { css } from 'emotion'

const authorName = () => css`
  font-weight: 500;
`

export default () => {
  return {
    authorName: authorName(),
  }
}
