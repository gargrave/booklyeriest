import { AuthorsState } from 'components/authors/store'
import { BooksState } from 'components/books/store'

export type AppState = {
  authors: AuthorsState
  books: BooksState
}

export type GenericResource = {
  id: string
}

export type HasMany<T> = {
  items: T[]
}

export type KeyObjectMap<T> = {
  [id: string]: T
}

export type ThunkAction<T> = {
  payload: T
}
