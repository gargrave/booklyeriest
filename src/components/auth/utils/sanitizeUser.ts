import { pick } from 'utils'
import {
  RawUser,
  User,
  UserMetadata,
  UserMetadataPropertyNames,
  UserProperties,
  UserPropertyNames,
} from '../auth.types'

const pickUserData = pick(UserPropertyNames)
const pickUserMetaData = pick(UserMetadataPropertyNames)

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
