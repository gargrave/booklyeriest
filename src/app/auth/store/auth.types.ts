import { FbUser } from 'utils/firebase/firebase.types'

/**************************************************
 * Auth Basic Types
 **************************************************/

export type User = FbUser

/**************************************************
 * Auth Redux Types
 **************************************************/
export type AuthState = {
  data: User
  requestPending: boolean
}
