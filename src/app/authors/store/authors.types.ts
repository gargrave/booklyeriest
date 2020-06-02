import { GenericResource, KeyObjectMap } from 'store/store.types'
import {
  FbCreateAction,
  FbDeleteAction,
  FbListAction,
  FbMutateAction,
} from 'utils/firebase/firebase.types'

/**************************************************
 * Authors Basic Types
 **************************************************/
export const authorFormFields = Object.freeze(['firstName', 'lastName'])

export type AuthorFields = {
  firstName: string
  lastName: string
}

export type Author = GenericResource & AuthorFields

// the shape of the data as saved in Firebase
// - id is stored as the key, but not within the object itself
export type WritableAuthor = Omit<Author, 'id'>

// for updates calls, omit "created" so we do not
// overwrite the FB date object with a JS Date object
export type UpdatableAuthor = Omit<WritableAuthor, 'created'>

/**************************************************
 * Authors Redux Types
 **************************************************/
export type AuthorsState = {
  data: KeyObjectMap<Author>
  requestPending: boolean
}

export type ListAuthorsAction = FbListAction<Author>
export type CreateAuthorAction = FbCreateAction<Author>
export type MutateAuthorAction = FbMutateAction<Author>
export type DeleteAuthorAction = FbDeleteAction<Author>
