import * as React from 'react'

import { Book } from 'components/books/store'
import { Card, CardProps } from 'packages/velcrostrip'
import { useBookCard } from './useBookCard'

export type BookCardProps = {
  book: Book
} & CardProps

export const BookCard: React.FC<BookCardProps> = React.memo((props) => {
  const { book, onClick } = props
  const { authorName, styles } = useBookCard(props)

  return (
    <Card className={styles.bookCard} hoverable={true} onClick={onClick}>
      <div className={styles.bookName}>{book.title}</div>
      <div className={styles.authorName}>{authorName}</div>
    </Card>
  )
})
