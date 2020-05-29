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
  const { authorName, styles } = useBookCard(props)

  return (
    <Card className={styles.bookCard} hoverable={true} onClick={onClick}>
      <div className={styles.bookName}>{book.title}</div>
      {showAuthor && <div className={styles.authorName}>{authorName}</div>}
    </Card>
  )
})
