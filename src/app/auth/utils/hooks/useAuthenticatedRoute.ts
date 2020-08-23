import { useNavigate } from '@reach/router'
import * as React from 'react'

import { useFirebaseAuth } from 'utils/firebase/useFirebaseAuth'

export const useAuthenticatedRoute = () => {
  const navigate = useNavigate()

  const { authInitialized, isAuthenticated } = useFirebaseAuth({
    waitForInitialization: true,
  })

  React.useEffect(() => {
    if (authInitialized && !isAuthenticated) {
      navigate('/auth/login')
    }
  }, [authInitialized, isAuthenticated, navigate])
}
