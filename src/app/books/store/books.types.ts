import { Author } from 'app/authors/store'
import { GenericResource, KeyObjectMap } from 'store/store.types'
import {
  FbCreateAction,
  FbDeleteAction,
  FbListAction,
  FbMutateAction,
} from 'utils/firebase/firebase.types'

/**************************************************
 * Books Basic Types
 **************************************************/
export const bookFormFields = Object.freeze(['author', 'sortBy', 'title'])

type BookFields = {
  sortBy?: string
  title: string
}

type BookRelationships = {
  author: Author
}

export type Book = GenericResource & BookFields & BookRelationships

// the shape of the data as saved in Firebase
// - id is stored as the key, but not within the object itself
// - author is stored only as the ID string
export type WritableBook = Omit<Book, 'id' | 'author'> & {
  authorId: string
}

// for updates calls, omit "created" so we do not
// overwrite the FB date object with a JS Date object
export type UpdatableBook = Omit<WritableBook, 'created'>

/**************************************************
 * Books Redux Types
 **************************************************/
export type BooksState = {
  data: KeyObjectMap<Book>
  requestPending: boolean
}

export type ListBooksAction = FbListAction<Book>
export type CreateBookAction = FbCreateAction<Book>
export type MutateBookAction = FbMutateAction<Book>
export type DeleteBookAction = FbDeleteAction<Book>
