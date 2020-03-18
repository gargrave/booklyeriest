import * as React from 'react'
import { cx } from 'emotion'

import styles from './Alert.styles'

export enum AlertType {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  info = 'info',
  warning = 'warning',
  danger = 'danger',
  light = 'light',
  dark = 'dark',
}

export type AlertProps = {
  type?: AlertType
}

export const Alert: React.FC<AlertProps> = React.memo(
  ({ children, type = AlertType.primary }) => {
    return <div className={cx(styles[type])}>{children}</div>
  },
)
