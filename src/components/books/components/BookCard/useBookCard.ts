import * as React from 'react'

import { authorFullName } from 'components/authors/store'
import { BookCardProps } from './BookCard'

import getStyles from './BookCard.styles'

export const useBookCard = (props: BookCardProps) => {
  const { book } = props
  const styles = React.useMemo(() => getStyles(), [])

  const authorName = React.useMemo((): string => authorFullName(book.author), [
    book,
  ])

  return {
    authorName,
    styles,
  }
}
