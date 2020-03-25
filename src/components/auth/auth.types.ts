export type UserProperties = {
  displayName: string
  email: string
  emailVerified: boolean
}

export const UserPropertyNames = ['displayName', 'email', 'emailVerified']

export type UserMetadata = {
  creationTime?: string
  lastSignInTime?: string
}

export const UserMetadataPropertyNames = ['creationTime', 'lastSignInTime']

export type RawUser = {
  metadata: UserMetadata
  uid: string
} & UserProperties

export type User = {
  id: string
} & UserProperties &
  UserMetadata
