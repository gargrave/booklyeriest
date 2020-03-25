import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

export type AuthorsListProps = {} & RouteComponentProps

export const AuthorsList: React.FC<AuthorsListProps> = React.memo(() => {
  return <div>Hello, AuthorsList!</div>
})
