/* eslint-disable @typescript-eslint/consistent-type-assertions */
import * as R from 'ramda'

import { hydrateAuthor, ReduxAuthor } from 'components/authors/store'
import { genericAttrNames, KeyObjectMap } from 'store'

import { Book, bookAttrNames, ReduxBook } from './books.types'

export const hydrateBook = (authors: KeyObjectMap<ReduxAuthor>) => (
  book: ReduxBook,
): Book => {
  const author = hydrateAuthor(authors[book.relations.author])

  return {
    ...R.pick(genericAttrNames, book),
    ...R.pick(bookAttrNames, book),
    author,
  } as Book
}
