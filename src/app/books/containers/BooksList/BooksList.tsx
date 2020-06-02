import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import { BookBucket } from 'app/books/components'
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
  const sortedAuthorKeys = Object.keys(books).sort()

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
    </div>
  )
})
