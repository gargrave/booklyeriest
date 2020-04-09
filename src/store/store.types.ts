import { AuthorsState } from 'components/authors/store'
import { BooksState } from 'components/books/store'

export type AppState = {
  authors: AuthorsState
  books: BooksState
}

export const genericAttrNames = ['id', 'type']

export type GenericResource = {
  id: string
  type: string
}

export type KeyObjectMap<T> = {
  [id: string]: T
}
