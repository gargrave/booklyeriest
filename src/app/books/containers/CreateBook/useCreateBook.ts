import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from '@reach/router'

import { createBook } from 'app/books/store'
import { logError } from 'utils/logger'

import getStyles from './CreateBook.styles'

export const useCreateBook = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loading, setLoading] = React.useState(false)

  const styles = React.useMemo(() => getStyles(), [])

  const goToListPage = React.useCallback(() => {
    navigate && navigate('/books')
  }, [navigate])

  const handleSubmit = React.useCallback(
    async (payload) => {
      setLoading(true)
      try {
        await dispatch(createBook(payload))
      } catch (err) {
        logError({ fn: 'createBook' }, err)
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
