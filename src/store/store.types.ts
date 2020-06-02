import { AuthState } from 'app/auth/store/auth.types'
import { AuthorsState } from 'app/authors/store/authors.types'
import { BooksState } from 'app/books/store/books.types'

export type AppState = {
  auth: AuthState
  authors: AuthorsState
  books: BooksState
}

export type GenericResource = {
  id: string
  created: Date
  updated: Date
}

export type KeyObjectMap<T> = {
  [id: string]: T
}

export type ThunkAction<T> = {
  payload: KeyObjectMap<T>
  type: string
}
