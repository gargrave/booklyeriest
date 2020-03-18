import * as React from 'react'
import { cx } from 'emotion'

import styles from './Button.styles'

export type ButtonProps = {
  className?: string
  disabled?: boolean
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({ children, className, disabled, onClick }) => {
    return (
      <button
        className={cx(styles.button, className, {
          [styles.disabled]: disabled,
        })}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    )
  },
)
