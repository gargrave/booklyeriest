import * as React from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from '@reach/router'

import { Alert } from '@gargrave/velcrostrip/lib/Alert'
import { Button } from '@gargrave/velcrostrip/lib/Button'

import { fetchBooks } from 'components/books/store'

export type AuthorsListProps = {} & RouteComponentProps

export const AuthorsList: React.FC<AuthorsListProps> = React.memo(() => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  return (
    <>
      <div>Hello, AuthorsList!</div>
      <Alert>Test</Alert>

      <Button onClick={() => dispatch(fetchBooks())}>Test</Button>
    </>
  )
})
