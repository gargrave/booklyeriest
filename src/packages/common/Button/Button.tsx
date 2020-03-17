import * as React from 'react'
import { cx } from 'emotion'

import styles from './Button.styles'

export type ButtonProps = {
  disabled?: boolean
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({ children, disabled, onClick }) => {
    return (
      <button
        className={cx(styles.button, { [styles.disabled]: disabled })}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    )
  },
)
