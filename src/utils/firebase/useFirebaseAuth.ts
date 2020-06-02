import { useCallback, useEffect, useState } from 'react'

import { auth } from 'config/firebase'
import { sanitizeFirebaseUser } from './sanitizeFirebaseUser'

export type AuthenticationOptions = {
  waitForInitialization: boolean
}

export const useFirebaseAuth = (
  options: AuthenticationOptions = {} as AuthenticationOptions, // eslint-disable-line
) => {
  const { waitForInitialization } = options

  const [authInitialized, setAuthInitialized] = useState(false)
  const [rawUser, setRawUser] = useState<any>(auth.currentUser) // eslint-disable-line
  const [user, setUser] = useState<any>(sanitizeFirebaseUser(rawUser)) // eslint-disable-line

  useEffect(() => {
    let hasUnsubbed = false

    const unsub = auth.onAuthStateChanged((rawUser) => {
      if (!hasUnsubbed) {
        setRawUser(rawUser)
        if (waitForInitialization && !authInitialized) {
          setAuthInitialized(true)
        }
      }
    })

    return () => {
      hasUnsubbed = true
      unsub()
    }
  }, [authInitialized, waitForInitialization])

  // rebuild the memoized user any time we get new FB user data
  useEffect(() => {
    if (rawUser && rawUser.uid !== user?.id) {
      setUser(sanitizeFirebaseUser(rawUser))
    }
  }, [rawUser, user])

  // TODO: add login here
  const login = () => void 0

  const logout = useCallback(() => {
    auth.signOut()
  }, [])

  return {
    authInitialized,
    isAuthenticated: !!user?.id,
    logout,
    user: user,
    userId: user?.id,
  }
}
