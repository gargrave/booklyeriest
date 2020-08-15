import * as React from 'react'

import { Book } from 'app/books/store'
import { ListViewBucketContainer, ListViewBucketKey } from 'styles/components'
import { BookCard } from '../BookCard'
import { useBookBucket } from './useBookBucket'

const St = {
  Bucket: ListViewBucketContainer,
  Key: ListViewBucketKey,
}

export type BookBucketProps = {
  books: Book[]
  onBookClick: (bookId: string) => void
}

export const BookBucket: React.FC<BookBucketProps> = React.memo((props) => {
  const { books, onBookClick } = props
  const { authorName } = useBookBucket(props)

  return (
    <St.Bucket>
      <St.Key>{authorName}</St.Key>
      {books.map((book) => (
        <BookCard
          book={book}
          key={book.id}
          onClick={() => onBookClick(book.id)}
        />
      ))}
    </St.Bucket>
  )
})
