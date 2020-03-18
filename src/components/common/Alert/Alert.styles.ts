import { css } from 'emotion'
import { darken, tint } from 'polished'

import { colors } from '../styles'
import { AlertType, AlertProps, AlertState } from './Alert'

type Props = Required<Pick<AlertProps, 'transitionTime' | 'type'>>

type AlertStyles = {
  alert: string
  closeButton: string
}

type ThemeOverrides = {
  bgOffset?: number
  borderOffset?: number
  textOffset?: number
}

const getOverrides = (type: AlertType): ThemeOverrides => {
  if (type === AlertType.light) {
    return {
      borderOffset: 0.06,
      textOffset: 0.6,
    }
  }

  return {}
}

const makeAlertStyles = (props: Props, state: AlertState) => {
  const { transitionTime, type } = props
  const { dismissed } = state
  const overrides = getOverrides(type)

  const baseColor = colors.theme[type]
  const bgOffset = overrides.bgOffset || 0.75
  const borderOffset = overrides.borderOffset || 0.035
  const textOffset = overrides.textOffset || 0.3

  const bgColor = tint(bgOffset, baseColor)
  const borderColor = darken(borderOffset, bgColor)
  const textColor = darken(textOffset, baseColor)

  return css`
    /* basic Alert styles */
    border-radius: 0.25rem;
    margin-bottom: 1.5rem;
    margin-top: 0;
    opacity: ${dismissed ? 0 : 1};
    padding: 1rem;
    position: relative;
    transition: opacity ${transitionTime}ms ease;

    /* theme styles */
    background-color: ${bgColor};
    border: 1px solid ${borderColor};
    color: ${textColor};
  `
}

const closeButton = css`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.5rem;
  height: 100%;
  padding: 0 1.25rem;
  position: absolute;
  right: 0;
  top: 0;
`

const getStyles = (props: Props, state: AlertState): AlertStyles => {
  const alert = makeAlertStyles(props, state)

  return {
    alert,
    closeButton,
  }
}

export default getStyles
