import * as React from 'react'

import { Loader, LoaderShape } from '../Loader'
import { StyleTheme } from '../styles'

import getStyles from './Button.styles'

type ButtonType = 'button' | 'submit' | 'reset'

// TODO: button sizes
export type ButtonProps = {
  block?: boolean
  buttonType?: ButtonType
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  outline?: boolean
  type?: StyleTheme
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({
    block = false,
    buttonType = 'button',
    children,
    disabled = false,
    loading = false,
    onClick,
    outline = false,
    type = StyleTheme.Primary,
  }) => {
    const styles = React.useMemo(
      () => getStyles({ block, disabled, loading, outline, type }),
      [block, disabled, loading, outline, type],
    )

    return (
      <button
        className={styles.button}
        disabled={disabled || loading}
        onClick={onClick}
        type={buttonType as ButtonType}
      >
        <span className={styles.buttonChildren}>{children}</span>
        <Loader
          baseColor="white"
          className={styles.buttonLoader}
          innerSize={3}
          shape={LoaderShape.SingleRing}
          size={20}
        />
      </button>
    )
  },
)
