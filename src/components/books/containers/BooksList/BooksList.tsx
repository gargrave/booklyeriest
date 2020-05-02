import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from '@reach/router'

import { BookCard } from 'components/books/components'
import {
  fetchBooks,
  getBooks,
  getBooksRequestPending,
} from 'components/books/store'
import { Loader } from 'packages/velcrostrip'
import { useInitialRender } from 'utils'

export type BooksListProps = {} & RouteComponentProps

export const BooksList: React.FC<BooksListProps> = React.memo(() => {
  const { isInitialRender } = useInitialRender()

  const dispatch = useDispatch()
  const books = useSelector(getBooks)
  const loading = useSelector(getBooksRequestPending) || isInitialRender

  const refetchBooks = React.useCallback(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  React.useEffect(() => {
    refetchBooks()
  }, [refetchBooks])

  return (
    <>
      <div>Hello, BooksList!</div>

      {loading ? (
        <Loader size={56} />
      ) : (
        books.map((book) => <BookCard book={book} key={book.id} />)
      )}
    </>
  )
})
