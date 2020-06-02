import * as React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { deleteBook, getBookById, updateBook } from 'app/books/store'
import { AppState } from 'store/store.types'
import { useFirebaseAuth } from 'utils/firebase/useFirebaseAuth'
import { logError } from 'utils/logger'
import { BookDetailProps } from './BookDetail'

import getStyles from './BookDetail.styles'

export const useBookDetail = ({ bookId, navigate }: BookDetailProps) => {
  const dispatch = useDispatch()
  const book = useSelector((state: AppState) => getBookById(state, bookId))

  const { userId } = useFirebaseAuth()
  const [loading, setLoading] = React.useState(false)

  const styles = React.useMemo(() => getStyles(), [])

  const goToListPage = React.useCallback(() => {
    navigate && navigate('/books')
  }, [navigate])

  const handleSubmit = React.useCallback(
    async (payload) => {
      setLoading(true)
      try {
        await dispatch(
          updateBook({
            book: {
              ...book,
              ...payload,
            },
            userId,
          }),
        )
      } catch (err) {
        logError({ fn: 'updateBook' }, err)
        throw err
      } finally {
        goToListPage()
      }
    },
    [book, dispatch, goToListPage, userId],
  )

  const handleDelete = React.useCallback(async () => {
    if (!book) return

    setLoading(true)
    try {
      await dispatch(deleteBook({ book, userId }))
    } catch (err) {
      logError({ fn: 'deleteBook' }, err)
      throw err
    } finally {
      goToListPage()
    }
  }, [book, dispatch, goToListPage, userId])

  const handleCancel = React.useCallback(() => {
    goToListPage()
  }, [goToListPage])

  React.useEffect(() => {
    if (!book) {
      // TODO: instead of redirecting, trigger a full re-fetch of books
      goToListPage()
    }
  }, [book, goToListPage])

  return {
    book,
    handleCancel,
    handleDelete,
    handleSubmit,
    loading,
    styles,
  }
}
