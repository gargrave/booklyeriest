import * as R from 'ramda'

import {
  RawUser,
  User,
  UserMetadata,
  UserMetadataPropertyNames,
  UserProperties,
  UserPropertyNames,
} from '../auth.types'

const pickUserData = R.pick(UserPropertyNames)
const pickUserMetaData = R.pick(UserMetadataPropertyNames)

export const sanitizeUser = (rawUser: RawUser): User | undefined => {
  if (!rawUser) return undefined

  const userData: UserProperties = pickUserData(rawUser)
  const userMeta: UserMetadata = pickUserMetaData(rawUser.metadata)

  return {
    id: rawUser.uid,
    ...userData,
    ...userMeta,
  }
}
