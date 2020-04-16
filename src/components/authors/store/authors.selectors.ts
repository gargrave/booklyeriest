import { createSelector } from '@reduxjs/toolkit'

import { AppState, KeyObjectMap } from 'store'
import { Author, ReduxAuthor } from './authors.types'
import { hydrateAuthor } from './authors.utils'

const sortByLastName = (a: Author, b: Author) => {
  const lnA = a.lastName.toLowerCase()
  const lnB = b.lastName.toLowerCase()

  return lnA === lnB ? 0 : lnA > lnB ? 1 : -1
}

const getAuthorsData = (state: AppState): KeyObjectMap<ReduxAuthor> =>
  state.authors.data

export const getAuthors = createSelector(
  getAuthorsData,
  (authors): Author[] => {
    return Object.values(authors)
      .map(hydrateAuthor)
      .sort(sortByLastName)
  },
)

export const getAuthorsRequestPending = (state: AppState) =>
  state.authors.requestPending
