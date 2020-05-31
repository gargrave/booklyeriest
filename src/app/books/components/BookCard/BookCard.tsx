import * as React from 'react'

import { Book } from 'app/books/store'
import { Card, CardProps } from 'packages/velcrostrip'
import { useBookCard } from './useBookCard'

export type BookCardProps = {
  book: Book
  showAuthor?: boolean
} & CardProps

export const BookCard: React.FC<BookCardProps> = React.memo((props) => {
  const { book, onClick, showAuthor = false } = props
  const { sortBy } = book
  const { authorName, styles } = useBookCard(props)

  return (
    <Card className={styles.bookCard} hoverable={true} onClick={onClick}>
      <div className={styles.bookName}>{book.title}</div>
      {sortBy && <div className={styles.sortBy}>Sorted by: {sortBy}</div>}
      {showAuthor && <div className={styles.subText}>{authorName}</div>}
    </Card>
  )
})
