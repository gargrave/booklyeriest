import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { BookCard } from 'components/books/components'
import { Button, Loader } from 'packages/velcrostrip'
import { useBooksList } from './useBooksList'

export type BooksListProps = {} & RouteComponentProps

export const BooksList: React.FC<BooksListProps> = React.memo(() => {
  const {
    books,
    handleAddBookClick,
    handleBookClick,
    loading,
    styles,
  } = useBooksList()

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>My Books</h2>
        <Button disabled={loading} onClick={handleAddBookClick}>
          Add a Book
        </Button>
      </div>

      {loading ? (
        <Loader overlay={true} size={56} />
      ) : (
        books.map((book) => (
          <BookCard
            book={book}
            key={book.id}
            onClick={() => handleBookClick(book.id)}
          />
        ))
      )}
    </div>
  )
})
