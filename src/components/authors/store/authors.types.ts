import { GenericResource, KeyObjectMap } from 'store/store.types'

export type AuthorsState = {
  data: KeyObjectMap<ReduxAuthor>
  requestPending: boolean
}

export const authorAttrNames = ['firstName', 'lastName']

export type AuthorAttrs = {
  firstName: string
  lastName: string
}

export type Author = {} & GenericResource & AuthorAttrs
export type ReduxAuthor = Author
