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
enum AuthorField {
  books = 'books',
  firstName = 'firstName',
  lastName = 'lastName',
}

export const authorFormFields = Object.freeze([
  AuthorField.firstName,
  AuthorField.lastName,
])

export const authorQueryFields = [
  AuthorField.firstName,
  AuthorField.lastName,
].join(' ')

type AuthorFields = {
  [AuthorField.firstName]: string
  [AuthorField.lastName]: string
}

type AuthorRelationships = {
  [AuthorField.books]: HasMany<Book>
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
