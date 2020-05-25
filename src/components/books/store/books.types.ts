import { Author } from 'components/authors/store'
import { GenericResource, KeyObjectMap, ThunkAction } from 'store/store.types'

/**************************************************
 * Books Basic Types
 **************************************************/
export const bookAttrNames = ['author', 'title']

export type BookRelationships = {
  author: Author
}

export type BookAttrs = {
  title: string
}

export type Book = {} & GenericResource & BookAttrs & BookRelationships

/**************************************************
 * Books Redux Types
 **************************************************/
export type BooksState = {
  data: KeyObjectMap<Book>
  requestPending: boolean
}

export type ListBooksAction = ThunkAction<Book[]>
export type MutateBookAction = ThunkAction<Book>
