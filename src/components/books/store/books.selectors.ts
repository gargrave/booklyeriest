import { createSelector } from '@reduxjs/toolkit'
import * as R from 'ramda'

import { ReduxAuthor } from 'components/authors/store'
import { KeyObjectMap, AppState } from 'store'
import { Book, ReduxBook } from './books.types'
import { hydrateBook } from './books.utils'

const getBooksData = (state: AppState): KeyObjectMap<ReduxBook> =>
  state.books.data

const getAuthorsData = (state: AppState): KeyObjectMap<ReduxAuthor> =>
  state.authors.data

export const getBooks = createSelector(
  getBooksData,
  getAuthorsData,
  (books, authors): Book[] => {
    const hydrator = hydrateBook(authors)

    return R.map(hydrator, R.values(books))
  },
)

export const getBooksRequestPending = (state) => state.books.requestPending
