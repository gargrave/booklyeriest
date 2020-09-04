/* eslint-disable sort-keys */
import { atom, selector, selectorFamily } from 'recoil'

import { KeyObjectMap } from 'store/store.types'
import { Author } from './authors.types'
import { groupAuthorsByLastInitial } from './authors.selectors'
import { transformFirebaseData } from '../../../utils/firebase/firebase.middleware'

/**************************************************
 * Loading state
 **************************************************/
const authorsLoading = atom<boolean>({
  key: 'authorsLoading',
  default: false,
})

export const getSetAuthorsLoading = selector<boolean>({
  key: 'getSetAuthorsLoading',
  get: ({ get }) => get(authorsLoading),
  set: ({ set }, newValue) => set(authorsLoading, newValue),
})

/**************************************************
 * Authors data
 **************************************************/
const authorsData = atom<KeyObjectMap<Author>>({
  key: 'authorsData',
  default: {},
})

export const getSetAuthors = selector<KeyObjectMap<Author>>({
  key: 'setAuthors',
  get: ({ get }) => get(authorsData),
  set: ({ set }, newValue) => set(authorsData, transformFirebaseData(newValue)),
})

export const getAuthorById = selectorFamily<
  Author | undefined,
  string | undefined
>({
  key: 'getAuthorsGroupedByLastInitial',
  get: (authorId) => ({ get }) => {
    if (!authorId) {
      return undefined
    }

    const authors = get(authorsData)
    const author = authors[authorId]
    if (!author) {
      throw new Error(`No author found with id: ${authorId}`)
    }
    return author
  },
})

export const getAuthorsGroupedByLastInitial = selector<KeyObjectMap<Author[]>>({
  key: 'getAuthorsGroupedByLastInitial',
  get: ({ get }) => {
    // TODO: move this helper out of Redux selectors
    return groupAuthorsByLastInitial(Object.values(get(authorsData)))
  },
})
