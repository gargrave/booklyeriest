import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { BookBucket } from 'app/books/components'
import { Button, Loader } from 'packages/velcrostrip'
import { ListView, PageHeaderContainer, PageTitle } from 'styles/components'
import { useBooksList } from './useBooksList'

const St = {
  Container: ListView,
  Header: PageHeaderContainer,
  Title: PageTitle,
}

export type BooksListProps = {} & RouteComponentProps

export const BooksList: React.FC<BooksListProps> = React.memo(() => {
  const { books, handleAddBookClick, handleBookClick, loading } = useBooksList()
  const sortedAuthorKeys = Object.keys(books).sort()

  return (
    <St.Container>
      <St.Header>
        <St.Title>My Books</St.Title>
        <Button disabled={loading} onClick={handleAddBookClick}>
          Add a Book
        </Button>
      </St.Header>

      {loading ? (
        <Loader overlay={true} size={56} />
      ) : (
        <>
          {sortedAuthorKeys.map((authorKey) => (
            <BookBucket
              books={books[authorKey]}
              key={authorKey}
              onBookClick={handleBookClick}
            />
          ))}
        </>
      )}
    </St.Container>
  )
})
