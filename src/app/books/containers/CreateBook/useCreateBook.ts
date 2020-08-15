import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from '@reach/router'

import { createBook } from 'app/books/store'
import { useFirebaseAuth } from 'utils/firebase/useFirebaseAuth'
import { logError } from 'utils/logger'

export const useCreateBook = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { userId } = useFirebaseAuth()
  const [loading, setLoading] = React.useState(false)

  const goToListPage = React.useCallback(() => {
    navigate && navigate('/books')
  }, [navigate])

  const handleSubmit = React.useCallback(
    async (book) => {
      setLoading(true)
      try {
        await dispatch(createBook({ book, userId }))
      } catch (err) {
        logError({ fn: 'createBook' }, err)
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
  }
}
