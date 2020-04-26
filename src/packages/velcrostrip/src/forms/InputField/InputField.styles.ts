import { css } from 'emotion'

const BORDER_COLOR = '#ced4da'
const DISABLED_BG_COLOR = '#e6e8ea'

const wrapper = css`
  display: flex;
  flex-flow: column;
  margin-bottom: 1.25rem;
`

const label = css`
  margin-bottom: 0.25rem;
`

const input = css`
  background: white;
  border-radius: 0.25rem;
  border: 1px solid ${BORDER_COLOR};
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  color: #111;
  font-family: inherit;
  font-size: 1rem;
  font-weight: inherit;
  height: 2.25rem;
  line-height: 2.25rem;
  margin: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  transition: border-color 0.1s, background-color 0.1s, color 0.1s;
  white-space: nowrap;
  width: 100%;

  &:disabled {
    background: ${DISABLED_BG_COLOR};
  }
`

export default () => {
  return {
    input,
    label,
    wrapper,
  }
}
