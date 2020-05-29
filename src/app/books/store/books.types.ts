import { Author } from 'app/authors/store'
import { GenericResource, KeyObjectMap, ThunkAction } from 'store/store.types'

/**************************************************
 * Books Basic Types
 **************************************************/
enum BookField {
  author = 'author',
  title = 'title',
}

export const bookFormFields = Object.freeze([BookField.author, BookField.title])

export const bookQueryFields = [BookField.title].join(' ')

type BookFields = {
  [BookField.title]: string
}

type BookRelationships = {
  [BookField.author]: Author
}

export type Book = GenericResource & BookFields & BookRelationships

/**************************************************
 * Books Redux Types
 **************************************************/
export type BooksState = {
  data: KeyObjectMap<Book>
  requestPending: boolean
}

export type ListBooksAction = ThunkAction<Book[]>
export type MutateBookAction = ThunkAction<Book>
