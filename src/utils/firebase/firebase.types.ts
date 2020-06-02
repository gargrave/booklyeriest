/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThunkAction } from '../../store/store.types'

/**************************************************
 * Firebase document types
 **************************************************/
export type FbDoc = {
  data: (args?: any) => any
  id: string
  ref: any
}

export type FbDocRef = {
  delete: (args?: any) => any
  get: (args?: any) => any
  set: (args?: any) => any
  update: (args?: any) => any
}

export type FbCollection = {
  docs: FbDoc[]
}

export type FbError = {
  code: string
  message: string
  name: string
}

export type FbTimestamp = {
  nanoseconds: number
  seconds: number
  toDate: () => Date
}

/**************************************************
 * Firebase Thunk wrappers
 **************************************************/
export type FbListAction<T> = ThunkAction<T> & {
  meta: {
    requestId: string
  }
}

export type FbCreateAction<T> = ThunkAction<T> & {
  meta: {
    arg: Omit<T, 'id' | 'created' | 'updated'>
    requestId: string
  }
}

export type FbMutateAction<T> = ThunkAction<T> & {
  meta: {
    arg: Omit<T, 'created' | 'updated'>
    requestId: string
  }
}

export type FbDeleteAction<T> = Omit<ThunkAction<T>, 'payload'> & {
  meta: {
    arg: {
      [key: string]: T
    }
    requestId: string
  }
}

/**************************************************
 * Firebase auth types
 **************************************************/
export type FbUserMetadata = {
  creationTime?: string
  lastSignInTime?: string
}

export const FbUserMetadataPropertyNames = ['creationTime', 'lastSignInTime']

export type FbUser = {
  id: string
  displayName: string
  email: string
  emailVerified: boolean
} & FbUserMetadata

export const FbUserPropertyNames = [
  'displayName',
  'email',
  'emailVerified',
  'uid',
]
