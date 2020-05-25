import {
  GenericResource,
  HasMany,
  KeyObjectMap,
  ThunkAction,
} from 'store/store.types'
import { Book } from 'components/books/store'

/**************************************************
 * Authors Basic Types
 **************************************************/
export const authorAttrNames = ['firstName', 'lastName']

export type AuthorAttrs = {
  firstName: string
  lastName: string
}

export type AuthorRelationships = {
  books: HasMany<Book>
}

export type Author = {} & GenericResource & AuthorAttrs

/**************************************************
 * Authors Redux Types
 **************************************************/
export type AuthorsState = {
  data: KeyObjectMap<Author>
  requestPending: boolean
}

export type ListAuthorsAction = ThunkAction<Author[]>
export type MutateAuthorAction = ThunkAction<Author>
export type DeleteAuthorAction = ThunkAction<Author & AuthorRelationships>
