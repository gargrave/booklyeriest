import { GenericResource, KeyObjectMap } from 'store/store.types'

export type BooksState = {
  data: KeyObjectMap<ReduxBook>
  requestPending: boolean
}

export const bookAttrNames = ['title']

export type BookAttrs = {
  title: string
}

export type BookRelations = {
  relations: {
    author: string
  }
}

export type Book = {} & GenericResource & BookAttrs
export type ReduxBook = Book & BookRelations
