import { createSelector } from '@reduxjs/toolkit'
import * as R from 'ramda'

import { AppState, KeyObjectMap } from 'store'
import { Author, ReduxAuthor } from './authors.types'
import { hydrateAuthor } from './authors.utils'

const getAuthorsData = (state: AppState): KeyObjectMap<ReduxAuthor> =>
  state.authors.data

export const getAuthors = createSelector(
  getAuthorsData,
  (authors): Author[] => {
    return R.map(hydrateAuthor, R.values(authors))
  },
)

export const getAuthorsRequestPending = (state) => state.authors.requestPending
