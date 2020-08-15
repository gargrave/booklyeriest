import { authorFullName } from 'app/authors/store'
import { BookBucketProps } from './BookBucket'

export const useBookBucket = (props: BookBucketProps) => {
  const { books } = props

  const authorName = authorFullName(books[0].author)

  return {
    authorName,
  }
}
