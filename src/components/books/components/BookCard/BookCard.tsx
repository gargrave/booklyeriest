import * as React from 'react'

import { Book } from 'components/books/store'
import { Card } from 'packages/velcrostrip'

import getStyles from './BookCard.styles'

export type BookCardProps = {
  book: Book
}

export const BookCard: React.FC<BookCardProps> = React.memo(({ book }) => {
  const styles = React.useMemo(() => getStyles(), [])

  return (
    <Card className={styles.bookCard} hoverable={true}>
      <div className={styles.bookName}>{book.title}</div>
    </Card>
  )
})
