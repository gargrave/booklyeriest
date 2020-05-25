import * as React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import {
  deleteAuthor,
  getAuthorById,
  updateAuthor,
} from 'components/authors/store'
import { logError } from 'utils/logger'
import { AuthorDetailProps } from './AuthorDetail'

import getStyles from './AuthorDetail.styles'

export const useAuthorDetail = ({ authorId, navigate }: AuthorDetailProps) => {
  const dispatch = useDispatch()
  const author = useSelector((state) => getAuthorById(state, authorId))
  const [loading, setLoading] = React.useState(false)

  const styles = React.useMemo(() => getStyles(), [])

  const goToListPage = React.useCallback(() => {
    navigate && navigate('/authors')
  }, [navigate])

  const handleSubmit = React.useCallback(
    async (payload) => {
      setLoading(true)
      try {
        await dispatch(
          updateAuthor({
            id: authorId,
            ...payload,
          }),
        )
      } catch (err) {
        logError({ fn: 'updateAuthor' }, err)
        throw err
      } finally {
        goToListPage()
      }
    },
    [authorId, dispatch, goToListPage],
  )

  const handleDelete = React.useCallback(async () => {
    if (!authorId) return

    setLoading(true)
    try {
      await dispatch(deleteAuthor(authorId))
    } catch (err) {
      logError({ fn: 'deleteAuthor' }, err)
      throw err
    } finally {
      goToListPage()
    }
  }, [authorId, dispatch, goToListPage])

  const handleCancel = React.useCallback(() => {
    goToListPage()
  }, [goToListPage])

  React.useEffect(() => {
    if (!author) {
      // TODO: instead of redirecting, trigger a full re-fetch of authors
      goToListPage()
    }
  }, [author, goToListPage])

  return {
    author,
    handleCancel,
    handleDelete,
    handleSubmit,
    loading,
    styles,
  }
}
