import * as React from 'react'
import { useDispatch } from 'react-redux'

import { fetchAuthors } from 'components/authors/store'
import { fetchBooks } from 'components/books/store'
import { logError } from 'utils/logger'

export const useBootstrapper = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(true)

  const bootstrapApp = React.useCallback(() => {
    const asyncBootstrapApp = async () => {
      try {
        await dispatch(fetchAuthors())
        await dispatch(fetchBooks())
      } catch (err) {
        logError({ fn: 'bootstrapApp' }, err)
        throw err
      } finally {
        setLoading(false)
      }
    }

    asyncBootstrapApp()
  }, [dispatch])

  React.useEffect(() => {
    bootstrapApp()
  }, [bootstrapApp])

  return {
    loading,
  }
}
