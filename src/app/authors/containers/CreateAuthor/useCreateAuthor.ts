import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from '@reach/router'

import { createAuthor } from 'app/authors/store'
import { logError } from 'utils/logger'

import getStyles from './CreateAuthor.styles'

export const useCreateAuthor = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loading, setLoading] = React.useState(false)

  const styles = React.useMemo(() => getStyles(), [])

  const goToListPage = React.useCallback(() => {
    navigate && navigate('/authors')
  }, [navigate])

  const handleSubmit = React.useCallback(
    async (payload) => {
      setLoading(true)
      try {
        await dispatch(createAuthor(payload))
      } catch (err) {
        logError({ fn: 'createAuthor' }, err)
      } finally {
        goToListPage()
      }
    },
    [dispatch, goToListPage],
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
