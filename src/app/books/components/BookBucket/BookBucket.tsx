import * as React from 'react'

import { Book } from 'app/books/store'
import { BookCard } from '../BookCard'
import { useBookBucket } from './useBookBucket'

export type BookBucketProps = {
  books: Book[]
  onBookClick: (bookId: string) => void
}

export const BookBucket: React.FC<BookBucketProps> = React.memo((props) => {
  const { books, onBookClick } = props
  const { authorName, styles } = useBookBucket(props)

  return (
    <div className={styles.bookBucket}>
      <div className={styles.authorName}>{authorName}</div>
      {books.map((book) => (
        <BookCard
          book={book}
          key={book.id}
          onClick={() => onBookClick(book.id)}
        />
      ))}
    </div>
  )
})
