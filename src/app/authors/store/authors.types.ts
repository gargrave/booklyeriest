import {
  GenericResource,
  HasMany,
  KeyObjectMap,
  ThunkAction,
} from 'store/store.types'
import { Book } from 'app/books/store'

/**************************************************
 * Authors Basic Types
 **************************************************/
export const authorFormFields = Object.freeze(['firstName', 'lastName'])

export const authorQueryFields = ['firstName', 'lastName'].join(' ')

type AuthorFields = {
  firstName: string
  lastName: string
}

type AuthorRelationships = {
  books: HasMany<Book>
}

export type Author = GenericResource & AuthorFields

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
