import { css } from 'emotion'

const header = () => css`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const headerTitle = () => css`
  font-size: 1.5rem;
  margin: 0;
`

export default () => {
  return {
    header: header(),
    headerTitle: headerTitle(),
  }
}
