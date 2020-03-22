import * as React from 'react'

import { StyleTheme } from '../styles'

import getStyles from './Button.styles'

// TODO: loader buttons (requires Loader)
// TODO: button sizes
// TODO: link buttons
// TODO: a11y stuffs
// TODO: just take text instead of children
export type ButtonProps = {
  block?: boolean
  disabled?: boolean
  onClick: () => void
  outline?: boolean
  type?: StyleTheme
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({
    block = false,
    children,
    disabled = false,
    onClick,
    outline = false,
    type = StyleTheme.Primary,
  }) => {
    const styles = React.useMemo(() => getStyles({ block, outline, type }), [
      block,
      outline,
      type,
    ])

    return (
      <button className={styles.button} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    )
  },
)
