import { css } from 'emotion'
import { darken } from 'polished'

const primary = '#bfdcf6'
const secondary = '#eaeaea'
const success = '#cbf2cf'
const info = '#cef2f2'
const warning = '#ffe1c6'
const danger = '#ffd0cd'
const light = 'white'
const dark = '#c4c4c4'

const borderInterval = 0.05
const textInterval = 0.6

const borderColor = (clr: string): string => darken(borderInterval, clr)
const textColor = (clr: string): string => darken(textInterval, clr)

const baseAlert = css`
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
  margin-top: 0;
  padding: 1rem;
`

const themedAlert = (clr: string) => css`
  background-color: ${clr};
  border: 1px solid ${borderColor(clr)};
  color: ${textColor(clr)};
`

const alert = (clr: string) => css([baseAlert, themedAlert(clr)])

export default {
  primary: css(alert(primary)),
  secondary: css(alert(secondary)),
  success: css(alert(success)),
  info: css(alert(info)),
  warning: css(alert(warning)),
  danger: css(alert(danger)),
  light: css(alert(light)),
  dark: css(alert(dark)),
}
