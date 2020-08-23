import { useFirebaseAuth } from 'utils/firebase/useFirebaseAuth'

export const useApp = () => {
  const { isAuthenticated } = useFirebaseAuth({ waitForInitialization: true })

  return {
    isAuthenticated,
  }
}
