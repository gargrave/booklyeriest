import { createSelector } from '@reduxjs/toolkit'
import * as fp from 'lodash/fp'

import { AppState, KeyObjectMap } from 'store/store.types'
import { isTruthy } from 'utils/fp.utils'
import { Author } from './authors.types'

/**************************************************
 * Functional Helpers
 **************************************************/
const sortByLastName = (a: Author, b: Author) => {
  const lnA = a.lastName.toLowerCase()
  const lnB = b.lastName.toLowerCase()

  return lnA === lnB ? 0 : lnA > lnB ? 1 : -1
}

const lowerLastName = (author: Author): string => author.lastName.toLowerCase()
const lastInitial = (author: Author): string => author.lastName[0].toUpperCase()

const groupAuthorsByLastInitial = fp.pipe(
  fp.filter(isTruthy),
  fp.sortBy(lowerLastName),
  fp.groupBy(lastInitial),
)

/**************************************************
 * Pre-Selectors
 **************************************************/
const getAuthorsData = (state): KeyObjectMap<Author> => state.authors.data

const getId = (_state, id?: string): string | undefined => id

/**************************************************
 * Selectors
 **************************************************/
export const getAuthors = createSelector(
  getAuthorsData,
  (authors): Author[] => {
    return Object.values(authors).sort(sortByLastName)
  },
)

export const getAuthorsGroupedByLastInitial = createSelector(
  getAuthorsData,
  (authors): KeyObjectMap<Author[]> => {
    const authorValues = Object.values(authors)
    return groupAuthorsByLastInitial(authorValues)
  },
)

export const getAuthorById = createSelector(
  getAuthorsData,
  getId,
  (authors, authorId): Author | undefined =>
    authorId ? authors[authorId] : undefined,
)

export const getAuthorsRequestPending = (state: AppState) =>
  state.authors.requestPending
