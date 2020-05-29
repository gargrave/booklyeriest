import * as React from 'react'

import { authorFullName } from 'app/authors/store'
import { BookBucketProps } from './BookBucket'

import getStyles from './BookBucket.styles'

export const useBookBucket = (props: BookBucketProps) => {
  const { books } = props

  const styles = React.useMemo(getStyles, [])
  const authorName = authorFullName(books[0].author)

  return {
    authorName,
    styles,
  }
}
