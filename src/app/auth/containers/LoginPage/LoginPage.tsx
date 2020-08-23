import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { LoginForm } from 'app/auth/components'
import { Card } from 'packages/velcrostrip'
import { FormTitle } from 'styles/components'
import { useLoginPage } from './useLoginPage'

const St = {
  Title: FormTitle,
}

export type LoginPageProps = RouteComponentProps

export const LoginPage: React.FC<LoginPageProps> = () => {
  const { handleSubmit, loading } = useLoginPage()

  return (
    <Card>
      <St.Title>Login</St.Title>
      <LoginForm loading={loading} onSubmit={handleSubmit} />
    </Card>
  )
}
