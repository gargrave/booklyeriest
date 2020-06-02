import { createSelector } from '@reduxjs/toolkit'
import * as fp from 'lodash/fp'

import { Author } from 'app/authors/store'
import { AppState, KeyObjectMap } from 'store/store.types'
import { isTruthy } from 'utils/fp.utils'
import { Book } from './books.types'
import { hydrateBook } from './books.utils'

/**************************************************
 * Functional Helpers
 **************************************************/
const authorLastName = fp.property('author.lastName')
const sortableString = fp.replace(/(a|an|the)\s/gi, '')

const bookSorter = (book: Book): string =>
  (book.sortBy || sortableString(book.title)).toLowerCase()

const groupBooksByAuthor = (hydrator) =>
  fp.pipe(
    fp.map(hydrator),
    fp.filter(isTruthy),
    fp.sortBy(bookSorter),
    fp.groupBy(authorLastName),
  )

/**************************************************
 * Pre-Selectors
 **************************************************/
const getBooksData = (state: AppState): KeyObjectMap<Book> => state.books.data

const getAuthorsData = (state: AppState): KeyObjectMap<Author> =>
  state.authors.data

const getId = (_state, id?: string): string | undefined => id

/**************************************************
 * Selectors
 **************************************************/
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

export const getBooksGroupedByAuthor = createSelector(
  getBooksData,
  getAuthorsData,
  (books, authors): KeyObjectMap<Book[]> => {
    const hydrator = hydrateBook(authors)
    const bookValues = Object.values(books)
    return (groupBooksByAuthor(hydrator)(
      bookValues,
    ) as unknown) as KeyObjectMap<Book[]>
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
