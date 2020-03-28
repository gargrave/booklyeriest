import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Alert } from '@gargrave/velcrostrip/lib/Alert'

export type AuthorsListProps = {} & RouteComponentProps

export const AuthorsList: React.FC<AuthorsListProps> = React.memo(() => {
  return (
    <>
      <div>Hello, AuthorsList!</div>
      <Alert>Test</Alert>
    </>
  )
})
