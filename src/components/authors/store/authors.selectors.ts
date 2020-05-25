import { createSelector } from '@reduxjs/toolkit'

import { AppState, KeyObjectMap } from 'store'
import { Author } from './authors.types'

const sortByLastName = (a: Author, b: Author) => {
  const lnA = a.lastName.toLowerCase()
  const lnB = b.lastName.toLowerCase()

  return lnA === lnB ? 0 : lnA > lnB ? 1 : -1
}

const getAuthorsData = (state): KeyObjectMap<Author> => state.authors.data

const getId = (_state, id?: string): string | undefined => id

export const getAuthors = createSelector(
  getAuthorsData,
  (authors): Author[] => {
    return Object.values(authors).sort(sortByLastName)
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
