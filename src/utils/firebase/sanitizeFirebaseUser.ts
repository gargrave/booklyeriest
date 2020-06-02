import pick from 'lodash/fp/pick'

import {
  FbUser,
  FbUserMetadata,
  FbUserMetadataPropertyNames,
  FbUserPropertyNames,
} from './firebase.types'

export const sanitizeFirebaseUser = (rawUser): FbUser | undefined => {
  if (!rawUser) return undefined

  const userData = { ...pick(FbUserPropertyNames, rawUser) }
  const userMeta: FbUserMetadata = {
    ...pick(FbUserMetadataPropertyNames, rawUser.metadata),
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = {
    ...userData,
    ...userMeta,
  }

  // for consistency's sake, rename 'uid' to 'id'
  user.id = user.uid
  delete user.uid

  return user as FbUser
}
