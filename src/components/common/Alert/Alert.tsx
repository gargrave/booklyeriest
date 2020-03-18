import * as React from 'react'

import getStyles from './Alert.styles'

const noop = () => void 0

export const getAlertTestId = (type: AlertType) => `alert--${type}`
export const TEST_ID_ALERT_CLOSE_BTN = 'alert__closeButton'
export const DEFAULT_TRANSITION_TIME = 250

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
  dismissable?: boolean
  onDismiss?: () => void
  transitionTime?: number
  type?: AlertType
}

export type AlertState = {
  dismissed: boolean
  showing: boolean
}

export const Alert: React.FC<AlertProps> = React.memo(
  ({
    children,
    dismissable = false,
    onDismiss = noop,
    transitionTime = DEFAULT_TRANSITION_TIME,
    type = AlertType.primary,
  }) => {
    const [state, setState] = React.useState<AlertState>({
      dismissed: false,
      showing: true,
    })
    const [showing, setShowing] = React.useState(true)

    const testId = React.useMemo(() => getAlertTestId(type), [type])

    const styles = React.useMemo(
      () => getStyles({ transitionTime, type }, state),
      [state, transitionTime, type],
    )

    const handleClick = React.useCallback(() => {
      setState({ ...state, dismissed: true })
      setTimeout(() => {
        setShowing(false)
        onDismiss()
      }, transitionTime)
    }, [onDismiss, state, transitionTime])

    return showing ? (
      <div className={styles.alert} data-testid={testId} role="alert">
        {children}
        {dismissable && (
          <button
            aria-label="Close"
            className={styles.closeButton}
            data-testid={TEST_ID_ALERT_CLOSE_BTN}
            onClick={handleClick}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        )}
      </div>
    ) : null
  },
)
