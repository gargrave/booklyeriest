import { css } from 'emotion'

const bookBucket = css`
  & + & {
    margin-top: 20px;
  }
`

const authorName = css`
  font-size: 1.25rem;
  font-weight: 500;
  padding-left: 2px;
  margin-bottom: 4px;
`

export default () => {
  return {
    authorName,
    bookBucket,
  }
}
