import { Author } from 'app/authors/store'
import { GenericResource, KeyObjectMap, ThunkAction } from 'store/store.types'

/**************************************************
 * Books Basic Types
 **************************************************/
export const bookFormFields = Object.freeze(['author', 'sortBy', 'title'])

export const bookQueryFields = ['sortBy', 'title'].join(' ')

type BookFields = {
  sortBy?: string
  title: string
}

type BookRelationships = {
  author: Author
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
