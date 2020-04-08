import { createSelector } from '@reduxjs/toolkit'

import { hydrateAuthor } from './authors.utils'

const getAuthorsData = (state) => state.authors.data

export const getAuthors = createSelector(getAuthorsData, (authors) => {
  const hydrator = hydrateAuthor

  return Object.values(authors).map(hydrator)
})
