import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from '@reach/router'

import { createAuthor } from 'app/authors/store'
import { useFirebaseAuth } from 'utils/firebase/useFirebaseAuth'
import { logError } from 'utils/logger'

import getStyles from './CreateAuthor.styles'

export const useCreateAuthor = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { userId } = useFirebaseAuth()
  const [loading, setLoading] = React.useState(false)

  const styles = React.useMemo(() => getStyles(), [])

  const goToListPage = React.useCallback(() => {
    navigate && navigate('/authors')
  }, [navigate])

  const handleSubmit = React.useCallback(
    // TODO: update this to have a proper type
    async (author) => {
      setLoading(true)
      try {
        await dispatch(
          createAuthor({
            author,
            userId,
          }),
        )
      } catch (err) {
        logError({ fn: 'createAuthor' }, err)
      } finally {
        goToListPage()
      }
    },
    [dispatch, goToListPage, userId],
  )

  const handleCancel = React.useCallback(() => {
    goToListPage()
  }, [goToListPage])

  return {
    handleCancel,
    handleSubmit,
    loading,
    styles,
  }
}
