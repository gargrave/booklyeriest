import * as React from 'react'

import { Alert, AlertType } from './Alert'

const unDismissStyles: React.CSSProperties = {
  cursor: 'pointer',
  fontSize: '1.1rem',
  fontWeight: 500,
}

const AlertExamples: React.FC = () => {
  const [dismissed, setDismissed] = React.useState(false)

  const handleAlertDismissed = () => {
    setDismissed(true)
  }

  const handleUnDismiss = () => {
    setDismissed(false)
  }

  return (
    <>
      <Alert>This is the default alert (Primary).</Alert>
      <Alert type={AlertType.success}>This is a Success alert.</Alert>
      <Alert type={AlertType.secondary}>This is a Secondary alert.</Alert>
      <Alert type={AlertType.info}>This is an Info alert.</Alert>
      <Alert type={AlertType.warning}>This is a Warning alert.</Alert>
      <Alert type={AlertType.danger}>This is a Danger alert.</Alert>
      <Alert type={AlertType.light}>This is a Light alert.</Alert>
      <Alert type={AlertType.dark}>This is a Dark alert.</Alert>

      <hr />
      <h3>Dismissable</h3>
      {dismissed ? (
        <div onClick={handleUnDismiss} style={unDismissStyles}>
          Alert dismissed! Click here to bring it back!
        </div>
      ) : (
        <Alert dismissable={true} onDismiss={handleAlertDismissed}>
          Click the button to hide me!
        </Alert>
      )}
    </>
  )
}

export default AlertExamples
