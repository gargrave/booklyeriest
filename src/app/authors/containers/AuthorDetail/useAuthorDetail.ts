import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useRecoilValue } from 'recoil'

import { AuthorFields, deleteAuthor, updateAuthor } from 'app/authors/store'
import { getAuthorById as getRecoilAuthorById } from 'app/authors/store/authors.recoil'
import { useFirebaseAuth } from 'utils/firebase/useFirebaseAuth'
import { logError } from 'utils/logger'
import { AuthorDetailProps } from './AuthorDetail'

export const useAuthorDetail = ({ authorId, navigate }: AuthorDetailProps) => {
  // TODO: get rid of this, and replace with a Recoil helper
  const dispatch = useDispatch()
  const author = useRecoilValue(getRecoilAuthorById(authorId))

  const { userId } = useFirebaseAuth()
  const [loading, setLoading] = React.useState(false)

  const goToListPage = React.useCallback(() => {
    navigate && navigate('/authors')
  }, [navigate])

  const handleSubmit = React.useCallback(
    async (payload: AuthorFields) => {
      if (!author) return

      setLoading(true)
      try {
        await dispatch(
          updateAuthor({
            author: {
              ...author,
              ...payload,
            },
            userId,
          }),
        )
      } catch (err) {
        logError({ fn: 'updateAuthor' }, err)
        throw err
      } finally {
        goToListPage()
      }
    },
    [author, dispatch, goToListPage, userId],
  )

  const handleDelete = React.useCallback(async () => {
    if (!author) return

    setLoading(true)
    try {
      await dispatch(deleteAuthor({ author, userId }))
    } catch (err) {
      logError({ fn: 'deleteAuthor' }, err)
      throw err
    } finally {
      goToListPage()
    }
  }, [author, dispatch, goToListPage, userId])

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
  }
}
