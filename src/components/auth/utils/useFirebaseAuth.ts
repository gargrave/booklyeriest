import { useCallback, useEffect, useState } from 'react'

import { auth } from 'config/firebase'
import { sanitizeUser } from './sanitizeUser'
import { RawUser } from '../auth.types'

export type AuthenticationOptions = {
  waitForInitialization?: boolean
}

export const useFirebaseAuth = (options: AuthenticationOptions = {}) => {
  const { waitForInitialization = false } = options

  const [authInitialized, setAuthInitialized] = useState(false)
  const [user, setUser] = useState<any>(sanitizeUser(auth.currentUser)) // eslint-disable-line

  const logout = useCallback(auth.signOut, [])

  useEffect(() => {
    let hasUnSubbed = false

    const unSub = auth.onAuthStateChanged((fbUser: RawUser) => {
      if (!hasUnSubbed) {
        setUser(sanitizeUser(fbUser))
        if (waitForInitialization && !authInitialized) {
          setAuthInitialized(true)
        }
      }
    })

    return () => {
      hasUnSubbed = true
      unSub()
    }
  }, [authInitialized, waitForInitialization])

  return { authInitialized, logout, user }
}
