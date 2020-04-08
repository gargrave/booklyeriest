import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from '@reach/router'

import { Alert } from '@gargrave/velcrostrip/lib/Alert'
import { Button } from '@gargrave/velcrostrip/lib/Button'

import { fetchAuthors, getAuthors } from 'components/authors/store'
import { fetchBooks, getBooks } from 'components/books/store'

export type AuthorsListProps = {} & RouteComponentProps

export const AuthorsList: React.FC<AuthorsListProps> = React.memo(() => {
  const dispatch = useDispatch()
  const authors = useSelector(getAuthors)
  const books = useSelector(getBooks)

  console.log({ books, authors })

  const fetchAllTheThings = () => {
    dispatch(fetchAuthors())
    dispatch(fetchBooks())
  }

  React.useEffect(() => {
    dispatch(fetchAuthors())
  }, [dispatch])

  return (
    <>
      <div>Hello, AuthorsList!</div>
      <Alert>Test</Alert>

      <Button onClick={fetchAllTheThings}>Test</Button>
    </>
  )
})
