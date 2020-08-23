import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { useLogoutPage } from './useLogoutPage'

export type LogoutPageProps = RouteComponentProps

export const LogoutPage: React.FC<LogoutPageProps> = React.memo(() => {
  useLogoutPage()

  return <div>Hello, LogoutPage!</div>
})
