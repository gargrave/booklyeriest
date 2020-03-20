import { css, cx } from 'emotion'
import { shade, tint, transparentize } from 'polished'

import { colors } from '../styles'
import { ButtonProps } from './Button'

type Props = Required<Pick<ButtonProps, 'block' | 'outline' | 'type'>>

/**
 * Basic/default styling for all buttons.
 * These styles will apply to all buttons, regardless of overrides and themes from props.
 *
 * Note that these need to be applied separately from the other calculated styles,
 * and not composed with any styled-components helpers, so that they do not lose
 * their static name to extended styles.
 */
const button = () => {
  const height = `2.25rem`

  return css`
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: 1rem;
    font-weight: inherit;
    height: ${height};
    line-height: ${height};
    padding: 0 0.75em;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;

    &:focus {
      outline: none;
    }

    &:disabled {
      cursor: default;
      opacity: 0.65;
    }

    & + & {
      margin-left: 8px;
    }
  `
}

/**
 * Styling for a button's give theme (the `type` prop).
 * This will set the base styling for the Button as well as
 * applying variants of the base styling to various pseudo-classes.
 */
const themedButton = (props: Props) => {
  const { type } = props

  const color = colors.theme[type]
  const colorInterval = 0.1
  const shadow = transparentize(0.5, tint(colorInterval, color))

  /** Helper to generate a darker or lighter color variant based on the offset */
  const offsetColor = (offset: number): string => {
    if (offset < 0) return shade(offset * -colorInterval, color)
    if (offset > 0) return tint(offset * colorInterval, color)
    return color
  }

  /** Helper to set BG and border colors for a given offset */
  const colorState = (offset = 0): string => {
    return css`
      background-color: ${offsetColor(offset)};
      border-color: ${offsetColor(offset)};
      border-bottom-color: ${offsetColor(offset - 1)};
    `
  }

  return css`
    ${colorState()}
    color: white;

    &:hover {
      ${colorState(-1)}
      color: white;
    }

    &:active {
      ${colorState(-2)}
      color: white;
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem ${shadow};
      color: white;
    }

    &:disabled {
      ${colorState(2)}
      color: white;
    }
  `
}

/**
 * Styling overrides for "outline" type buttons.
 * This changes the button's "idle" state to use the base theme color
 * for text and border, and transparent for the background color.
 * All other states are inherited from the base theme.
 */
const outlineButton = (props: Props) => {
  const { type } = props
  const color = colors.theme[type]

  return css`
    &,
    &:focus:not(:hover) {
      background-color: transparent;
      border-color: ${color};
      color: ${color};
    }
  `
}

/**
 * Block-style overrides
 * This causes a button to horizontally fill the parent container.
 * Multiple block-style buttons can be placed inside a container and will fill the
 * container together, so long as the parent has `display: flex` applied to it.
 */
const blockButton = () => css`
  display: block;
  width: 100%;
`

export default (props: Props) => {
  const baseButtonStyles = button()

  const theme = themedButton(props)
  const outline = props.outline && outlineButton(props)
  const block = props.block && blockButton()

  return {
    button: [baseButtonStyles, cx(theme, outline, block)].join(' '),
  }
}
