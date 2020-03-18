import * as React from 'react'

import { Alert, AlertType } from './Alert'

const AlertExamples: React.FC = () => {
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
    </>
  )
}

export default AlertExamples
