import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { Alert } from '@gargrave/velcrostrip/lib/Alert'

export type AuthorsListProps = {} & RouteComponentProps

export const AuthorsList: React.FC<AuthorsListProps> = React.memo(() => {
  React.useEffect(() => {
    fetch(
      `http://localhost:8080/api/v1/books?include=author&fields[book]=title,author&fields[author]=firstName,lastName`,
    )
  }, [])

  return (
    <>
      <div>Hello, AuthorsList!</div>
      <Alert>Test</Alert>
    </>
  )
})
