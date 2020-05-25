import { Author } from 'components/authors/store'
import { KeyObjectMap } from 'store'
import { logWarning } from 'utils/logger'
import { Book } from './books.types'

export const hydrateBook = (authors: KeyObjectMap<Author>) => (
  book: Book,
): Book | undefined => {
  const authorId = book.author?.id
  const author = authors[authorId]

  if (!authorId || !author) {
    logWarning({
      data: { book },
      fn: 'hydrateBook',
      msg: 'Missing or unknown Author on Book.',
    })
    return undefined
  }

  return {
    ...book,
    author,
  }
}
