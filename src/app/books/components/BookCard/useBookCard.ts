import * as React from 'react'

import { authorFullName } from 'app/authors/store'
import { BookCardProps } from './BookCard'

export const useBookCard = (props: BookCardProps) => {
  const { book } = props

  const authorName = React.useMemo((): string => authorFullName(book.author), [
    book,
  ])

  return {
    authorName,
  }
}
