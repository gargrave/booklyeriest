import { createSelector } from '@reduxjs/toolkit'

import { Author } from 'components/authors/store'
import { KeyObjectMap, AppState } from 'store'
import { Book } from './books.types'
import { hydrateBook } from './books.utils'
import { isTruthy } from '../../../utils/fp.utils'

const getBooksData = (state: AppState): KeyObjectMap<Book> => state.books.data

const getAuthorsData = (state: AppState): KeyObjectMap<Author> =>
  state.authors.data

const getId = (_state, id?: string): string | undefined => id

export const getBooks = createSelector(
  getBooksData,
  getAuthorsData,
  (books, authors): Book[] => {
    const hydrator = hydrateBook(authors)

    return Object.values(books)
      .map(hydrator)
      .filter(isTruthy) as Book[]
  },
)

export const getBookById = createSelector(
  getBooksData,
  getAuthorsData,
  getId,
  (books, authors, bookId): Book | undefined => {
    if (!bookId) return undefined
    const hydrator = hydrateBook(authors)
    const book = books[bookId]
    return book && hydrator(book)
  },
)

export const getBooksRequestPending = (state) => state.books.requestPending
